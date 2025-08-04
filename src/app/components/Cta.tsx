const Cta = () => {
  return (
    <section className="bg-black text-white py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Ready to Slay Your Inner Dragon?</h2>
        <p className="text-lg mb-8">
          Embark on your journey today and become the legend you were born to be.
        </p>
        <img
          src="/cta.png"
          alt="Call to Action"
          className="mx-auto mb-8 w-full max-w-[10em] rounded-lg shadow-lg"
        />
        <a
          href="#"
          className="bg-white text-black text-sm px-5 py-5 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Enter App →
        </a>
      </div>
    </section>
  );
};

export default Cta;
