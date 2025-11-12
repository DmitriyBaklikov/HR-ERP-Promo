
import { BrainIcon, FingerPrintIcon, PuzzlePieceIcon } from './IconComponents';

const advantages = [
  {
    icon: <BrainIcon />,
    title: 'Предиктивное управление удержанием',
    description: 'Наш ML-модуль прогнозирует риски увольнения и выявляет факторы вовлеченности, позволяя принимать превентивные меры до того, как ценный сотрудник решит уйти.',
  },
  {
    icon: <FingerPrintIcon />,
    title: 'Автоматизация найма по навыкам',
    description: 'Интегрированный AI-модуль с NLP автоматически анализирует резюме и ранжирует кандидатов на основе семантического анализа их компетенций, а не формальных критериев.',
  },
  {
    icon: <PuzzlePieceIcon />,
    title: 'Комплексная ERP-архитектура',
    description: 'Все модули работают в едином контуре, устраняя "интеграционный барьер" и создавая целостный HR-датасет, достаточный для эффективной работы AI/ML моделей.',
  },
];

const AdvantagesSection = () => {
  return (
    <section id="advantages" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Технологическое превосходство
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Три ключевых преимущества, которые формируют HR-решение нового поколения.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-gray-800 text-white p-8 rounded-xl shadow-2xl flex flex-col">
              <div className="flex-shrink-0 h-16 w-16 flex items-center justify-center rounded-full bg-blue-600 mb-6">
                {advantage.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{advantage.title}</h3>
              <p className="text-gray-300 flex-grow">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;