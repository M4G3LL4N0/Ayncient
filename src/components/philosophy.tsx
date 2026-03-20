export function Philosophy() {
  return (
    <section id="philosophy" className="py-20 md:py-28">
      <div className="container grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="card p-8 md:p-10">
          <div className="eyebrow mb-4">The problem</div>
          <h2 className="section-title max-w-xl">
            Modern life works against your biology.
          </h2>
          <p className="subtle mt-5 max-w-xl text-lg leading-8">
            Artificial light. Processed food. Constant stimulation. Sedentary
            routines. Poor sleep. Endless screens.
          </p>
          <p className="subtle mt-4 max-w-xl text-lg leading-8">
            Most people are not broken. They are misaligned.
          </p>
        </div>

        <div className="card p-8 md:p-10">
          <div className="eyebrow mb-4">The belief</div>
          <h2 className="section-title max-w-xl">
            Return to the conditions humans were designed for.
          </h2>
          <p className="subtle mt-5 max-w-xl text-lg leading-8">
            Ayncient exists to help people rebuild their lives around the basics:
            sleep, light, movement, food quality, rhythm, recovery, and social
            connection.
          </p>
          <p className="subtle mt-4 max-w-xl text-lg leading-8">
            Not by pretending the modern world does not exist. By living through
            it more intelligently.
          </p>
        </div>
      </div>
    </section>
  );
}
