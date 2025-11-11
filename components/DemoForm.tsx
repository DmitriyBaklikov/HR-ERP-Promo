import React, { useState } from 'react';

const DemoForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
    // Clear error on change
    if (errors[name as keyof typeof errors]) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = { name: '', email: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Имя обязательно для заполнения.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Электронная почта обязательна для заполнения.';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Пожалуйста, введите корректный адрес электронной почты.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the data to a server
      console.log('Form data submitted:', formData);
      setSubmitted(true);
    }
  };
  
  const inputBaseClasses = "w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-300";
  const inputNormalClasses = "border-gray-300 focus:ring-blue-500 focus:border-blue-500";
  const inputErrorClasses = "border-red-500 focus:ring-red-500 focus:border-red-500";


  return (
    <section id="demo-form" className="bg-gray-100 py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Запросить демо-доступ
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Заполните форму, и мы свяжемся с вами в ближайшее время, чтобы показать, как HR ERP может усилить вашу команду.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-2xl">
          {submitted ? (
            <div className="text-center py-10">
              <div className="flex justify-center items-center mb-4">
                <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Спасибо!</h3>
              <p className="text-gray-700">Ваша заявка принята. Мы скоро с вами свяжемся.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Имя <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`${inputBaseClasses} ${errors.name ? inputErrorClasses : inputNormalClasses}`}
                  placeholder="Ваше имя"
                />
                {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Контактный e-mail <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`${inputBaseClasses} ${errors.email ? inputErrorClasses : inputNormalClasses}`}
                  placeholder="your.email@company.com"
                />
                {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputBaseClasses} ${inputNormalClasses}`}
                  placeholder="Расскажите немного о ваших задачах (необязательно)"
                ></textarea>
              </div>
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-bold py-3 px-10 rounded-lg text-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 transform hover:scale-105 shadow-lg w-full md:w-auto"
                >
                  Отправить заявку
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default DemoForm;
