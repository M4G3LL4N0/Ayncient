"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { quizQuestions, calculateQuizResult } from "@/lib/quiz";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);

  const current = quizQuestions[step];
  const progress = Math.round(((step + 1) / quizQuestions.length) * 100);

  const canContinue = answers[current?.key] !== undefined;

  const result = useMemo(() => calculateQuizResult(answers), [answers]);

  const handleNext = () => {
    if (step < quizQuestions.length - 1) {
      setStep((prev) => prev + 1);
      return;
    }
    setShowResult(true);
  };

  const handleRestart = () => {
    setStep(0);
    setAnswers({});
    setShowResult(false);
  };

  if (showResult) {
    return (
      <main className="min-h-screen py-10">
        <div className="container">
          <Link href="/" className="subtle text-sm hover:text-white">
            ← Back to Home
          </Link>

          <div className="mt-6 card p-6 sm:mt-8 sm:p-8 md:p-10 animate-fade-in">
            <div className="eyebrow mb-4">🎉 Your Alignment Result</div>
            <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] animate-slide-up">
              <div>
                <div className="subtle text-sm">Your Ayncient Alignment Score</div>
                <div className="mt-2 text-7xl font-bold tracking-[-0.05em] bg-gradient-to-r from-[var(--accent)] to-yellow-300 bg-clip-text text-transparent">
                  {result.totalScore}
                </div>
                <div className="mt-3 text-2xl font-semibold">{result.level}</div>
                <p className="subtle mt-5 max-w-xl text-lg leading-8">
                  {result.message}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <button onClick={handleRestart} className="btn-secondary">
                    Retake Quiz
                  </button>
                  <a href="#email" className="btn-primary">
                    Save My Score
                  </a>
                </div>
              </div>

              <div className="rounded-[24px] border border-white/8 bg-black/20 p-6">
                <div className="text-lg font-semibold">Category Breakdown</div>
                <div className="mt-6 space-y-5">
                  {Object.entries(result.categoryScores).map(([key, value]) => (
                    <div key={key}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="capitalize subtle">{key}</span>
                        <span>{value}/10</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/8">
                        <div
                          className="h-full rounded-full bg-[var(--accent)]"
                          style={{ width: `${value * 10}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div id="email" className="mt-8 rounded-2xl border border-white/8 bg-white/4 p-5">
                  <div className="text-base font-semibold">Save your score</div>
                  <p className="subtle mt-2 text-sm leading-7">
                    Next fast move: connect this form to Supabase and store each
                    result with an email for onboarding, lifecycle emails, and the
                    7-Day Reset.
                  </p>
                  <form className="mt-4 flex flex-col gap-3 md:flex-row">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="h-12 flex-1 rounded-full border border-white/8 bg-white/4 px-4 outline-none placeholder:text-[#c9b99c]/60"
                    />
                    <button type="button" className="btn-primary h-12 px-6">
                      Save Result
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-10">
      <div className="container animate-fade-in">
        <Link href="/" className="subtle inline-flex items-center gap-2 text-sm hover:text-white transition-opacity hover:opacity-80">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="mt-8 card p-8 md:p-10 transition-all duration-300 hover:shadow-lg">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between transition-opacity duration-300">
            <div>
              <div className="eyebrow mb-3">Ayncient Alignment Score</div>
              <h1 className="text-2xl font-bold tracking-[-0.04em] sm:text-3xl md:text-5xl">
                Find out how aligned your life really is.
              </h1>
            </div>
            <div className="subtle text-sm">
              Question {step + 1} of {quizQuestions.length}
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-2 flex justify-between text-sm subtle">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-white/8">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-yellow-400 transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="mt-10 rounded-[24px] border border-white/8 bg-black/20 p-6 md:p-8">
            <div className="subtle text-sm capitalize">{current.category}</div>
            <h2 className="mt-2 text-xl font-semibold sm:text-2xl md:text-3xl">
              {current.title}
            </h2>

            <div className="mt-8 grid gap-4">
              {current.options.map((option) => {
                const active = answers[current.key] === option.value;
                return (
                  <button
                    key={option.label}
                    type="button"
                    className={`rounded-2xl border px-5 py-4 text-left transition-all duration-200 ${
                      active
                        ? "border-[var(--accent)] bg-gradient-to-r from-[rgba(201,139,46,0.08)] to-[rgba(201,139,46,0.16)] shadow-[inset_0_0_0_1px_var(--accent)]"
                        : "border-white/8 bg-white/4 hover:bg-white/8 hover:translate-y-[-2px]"
                    }`}
                    onClick={() =>
                      setAnswers((prev) => ({ ...prev, [current.key]: option.value }))
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
                onClick={() => setStep((prev) => Math.max(0, prev - 1))}
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
                <span>{step === quizQuestions.length - 1 ? "See Result" : "Continue"}</span>
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
