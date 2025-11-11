
import React from 'react';
import { AcademicCapIcon, AdjustmentsHorizontalIcon, AnalyticsIcon, BookOpenIcon, IdentificationIcon, UserGroupIcon } from './IconComponents';

const features = [
  { icon: <IdentificationIcon />, name: 'Кадровый учет', description: 'Полная автоматизация КДП в строгом соответствии с ТК РФ.' },
  { icon: <UserGroupIcon />, name: 'Подбор и адаптация', description: 'Интеллектуальный поиск кандидатов и выстроенные планы адаптации.' },
  { icon: <AcademicCapIcon />, name: 'Оценка и развитие', description: 'Систематизация процессов оценки, обучения и формирования кадрового резерва.' },
  { icon: <AnalyticsIcon />, name: 'Аналитика и прогнозирование', description: 'Интерактивные дашборды и предиктивная аналитика для управления рисками.' },
  { icon: <BookOpenIcon />, name: 'Инфопортал сотрудника', description: 'Единая точка доступа к корпоративным сервисам и данным.' },
  { icon: <AdjustmentsHorizontalIcon />, name: 'Управление ресурсами', description: 'Оптимизация планирования и распределения загрузки персонала.' },
];

const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Единая платформа для всех HR-задач
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            HR ERP реализована на базе модульной архитектуры. Каждый модуль закрывает специфический набор операционных, юридических и технологических барьеров.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start p-6 bg-white rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
              <div className="flex-shrink-0 mr-4 mt-1 h-12 w-12 flex items-center justify-center rounded-lg bg-blue-600 text-white">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{feature.name}</h3>
                <p className="text-gray-600 mt-1">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
