
import { BriefcaseIcon, ChartBarIcon, DocumentTextIcon, UsersIcon } from './IconComponents';

const problems = [
  {
    icon: <DocumentTextIcon />,
    title: 'Фрагментация данных',
    description: 'Информация о сотрудниках разбросана по разным системам, что мешает созданию единой аналитической картины.',
  },
  {
    icon: <UsersIcon />,
    title: 'Высокая текучесть кадров',
    description: 'Отсутствие инструментов для проактивного управления вовлеченностью и удержания ключевых сотрудников.',
  },
  {
    icon: <BriefcaseIcon />,
    title: 'Неэффективный рекрутинг',
    description: 'Ручной отбор кандидатов приводит к субъективизму, ошибкам и замедлению процесса закрытия вакансий.',
  },
  {
    icon: <ChartBarIcon />,
    title: 'Решения "вслепую"',
    description: 'Руководители лишены объективных данных для принятия стратегических кадровых решений.',
  },
];

const ProblemSection = () => {
  return (
    <section id="problems" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Боль вашего бизнеса - это точка роста
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Наша платформа решает ключевые проблемы, которые мешают эффективному управлению персоналом
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;