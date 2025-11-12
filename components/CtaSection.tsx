
const CtaSection = () => {
  return (
    <section id="cta" className="bg-blue-700 text-white">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Готовы трансформировать ваш HR?
        </h2>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
          Узнайте, как HR ERP может помочь вашему бизнесу снизить издержки, удержать лучшие таланты и выйти на новый уровень эффективности.
        </p>
        <button
          className="bg-white text-blue-700 font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-100 transition-transform duration-300 transform hover:scale-105 shadow-2xl"
        >
          Оставить заявку на демо-версию
        </button>
      </div>
    </section>
  );
};

export default CtaSection;