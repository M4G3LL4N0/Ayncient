"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";
import { calculateQuizResult, quizQuestions } from "@/lib/quiz";
import { saveQuizResult } from "@/domain/quiz/service";

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);

  const current = quizQuestions[step];
  const progress = Math.round(((step + 1) / quizQuestions.length) * 100);
  const canContinue = current ? answers[current.key] !== undefined : false;
  const result = useMemo(() => calculateQuizResult(answers), [answers]);

  async function handleSave() {
    setIsSaving(true);
    setSaveError(null);
    try {
      const payload = {
        email: isEmailSubmitted ? email : null,
        total_score: result.totalScore,
        level: result.level,
        category_scores: result.categoryScores,
        answers,
      };
      const { error } = await saveQuizResult(payload);
      if (error) throw new Error(error);
    } catch (e: any) {
      setSaveError(e.message);
    } finally {
      setIsSaving(false);
    }
  }

  function handleNext() {
    if (step < quizQuestions.length - 1) {
      setStep((prev) => prev + 1);
      return;
    }
    setShowResult(true);
  }

  function handleBack() {
    setStep((prev) => Math.max(0, prev - 1));
  }

  function handleRestart() {
    setStep(0);
    setAnswers({});
    setShowResult(false);
    setSaveError(null);
    setEmail("");
    setIsEmailSubmitted(false);
  }

  if (showResult) {
    return (
      <main className="min-h-screen py-10">
        <div className="container">
          <Link href="/" className="btn-ghost inline-flex items-center gap-2">
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="mt-8 card p-8 md:p-10">
            <div className="eyebrow mb-4">Your result</div>

            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className="subtle text-sm">Ayncient Alignment Score</div>
                <div className="mt-2 text-7xl font-bold tracking-[-0.05em] text-gradient">
                  {result.totalScore}
                </div>
                <div className="mt-3 text-2xl font-semibold">{result.level}</div>

                <p className="subtle mt-5 max-w-xl text-lg leading-8">
                  {result.message}
                </p>

                {!isEmailSubmitted && (
                  <div className="mt-8">
                    <div className="form-label">Get your full results</div>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setIsEmailSubmitted(true);
                        handleSave();
                      }}
                      className="mt-3 flex gap-3"
                    >
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="input-field flex-1"
                      />
                      <button
                        type="submit"
                        className="btn-primary"
                        disabled={isSaving}
                      >
                        {isSaving ? (
                          <span className="flex items-center gap-2">
                            <span>Sending...</span>
                            <span className="loading-spinner" />
                          </span>
                        ) : (
                          "Send Results"
                        )}
                      </button>
                    </form>
                    {saveError && (
                      <p className="form-error mt-2">{saveError}</p>
                    )}
                  </div>
                )}

                {isEmailSubmitted && (
                  <div className="mt-8">
                    <div className="form-success">
                      <Check size={18} className="mr-2" />
                      Results sent to your email!
                    </div>
                  </div>
                )}

                <div className="mt-8 flex flex-wrap gap-4">
                  <button onClick={handleRestart} className="btn-secondary">
                    Retake Quiz
                  </button>
                  <a href="#waitlist" className="btn-primary">
                    Join Waitlist
                  </a>
                </div>
              </div>

              <div className="rounded-[24px] border border-white/8 bg-black/20 p-6">
                <div className="text-lg font-semibold">Category Breakdown</div>

                <div className="mt-6 space-y-5">
                  {Object.entries(result.categoryScores).map(([key, value]) => (
                    <div key={key}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="subtle capitalize">{key}</span>
                        <span>{value}/10</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/8">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cta-primary to-cta-secondary"
                          style={{ width: `${value * 10}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!current) {
    return (
      <main className="min-h-screen py-10">
        <div className="container">
          <Link href="/" className="btn-ghost inline-flex items-center gap-2">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <div className="mt-8 card p-8 md:p-10">
            <p className="text-lg">No quiz questions found.</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-10">
      <div className="container">
        <Link
          href="/"
          className="btn-ghost inline-flex items-center gap-2 hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="mt-8 card p-8 md:p-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="eyebrow mb-3">Ayncient Alignment Score</div>
              <h1 className="text-3xl font-bold tracking-[-0.04em] md:text-5xl text-gradient">
                Find out how aligned your life really is.
              </h1>
            </div>

            <div className="subtle text-sm">
              Question {step + 1} of {quizQuestions.length}
            </div>
          </div>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/8">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cta-primary to-cta-secondary transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-10 rounded-[24px] border border-white/8 bg-black/20 p-6 md:p-8">
            <div className="subtle text-sm capitalize">{current.category}</div>

            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              {current.title}
            </h2>

            <div className="mt-8 grid gap-4">
              {current.options.map((option) => {
                const active = answers[current.key] === option.value;

                return (
                  <button
                    key={option.label}
                    type="button"
                    className={`rounded-2xl border px-5 py-4 text-left transition ${
                      active
                        ? "border-cta-primary bg-[#d79342]/12"
                        : "border-white/8 bg-white/4 hover:border-white/20 hover:bg-white/6"
                    }`}
                    onClick={() =>
                      setAnswers((prev) => ({
                        ...prev,
                        [current.key]: option.value,
                      }))
                    }
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex items-center justify-between">
              <button
                type="button"
                className="btn-secondary"
                onClick={handleBack}
                disabled={step === 0}
              >
                <ArrowLeft size={16} />
                <span className="ml-2">Back</span>
              </button>

              <button
                type="button"
                className="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
                onClick={handleNext}
                disabled={!canContinue}
              >
                <span>
                  {step === quizQuestions.length - 1 ? "See Result" : "Continue"}
                </span>
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
