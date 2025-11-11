
import React from 'react';

const benefits = [
    { value: 'до 60%', label: 'Сокращение цикла согласований' },
    { value: '70-80%', label: 'Снижение затрат на бумагу' },
    { value: '20-30%', label: 'Сокращение трудозатрат HR-службы' },
    { value: '< 1.5 года', label: 'Окупаемость проекта (500+ сотрудников)' },
];

const BenefitsSection: React.FC = () => {
    return (
        <section id="benefits" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Экономический эффект от внедрения
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Достигайте измеримых результатов и повышайте рентабельность инвестиций в персонал.
                    </p>
                </div>
                <div className="bg-white rounded-lg shadow-xl p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="p-4">
                                <p className="text-4xl lg:text-5xl font-extrabold text-blue-600 mb-2">{benefit.value}</p>
                                <p className="text-base text-gray-600 font-medium">{benefit.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
