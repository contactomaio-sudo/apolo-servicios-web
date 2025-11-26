import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    // Simulación de envío a un backend
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulación de éxito. En un caso real, esto dependería de la respuesta del servidor.
    console.log('Form data submitted:', formData);
    setSubmissionStatus('success');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

    // Para simular un error, descomentar la siguiente línea y comentar las de éxito.
    // setSubmissionStatus('error');

    setIsSubmitting(false);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full">
        <h3 className="text-2xl font-bold text-primary mb-6">Envíenos un Mensaje</h3>
        <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label htmlFor="name" className="block text-slate-700 font-semibold mb-2">Nombre Completo</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-slate-700 font-semibold mb-2">Correo Electrónico</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-slate-700 font-semibold mb-2">Teléfono</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <div>
                    <label htmlFor="subject" className="block text-slate-700 font-semibold mb-2">Asunto</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
            </div>
            <div className="mb-6">
                <label htmlFor="message" className="block text-slate-700 font-semibold mb-2">Mensaje</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} required className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"></textarea>
            </div>
            <div>
                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-secondary text-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-500 transition-all duration-300 transform hover:scale-105 disabled:bg-slate-400 disabled:cursor-not-allowed disabled:scale-100"
                >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
            </div>

            {submissionStatus === 'success' && (
                <p className="mt-4 text-center text-green-600 font-semibold">
                    ¡Gracias por su mensaje! Nos pondremos en contacto con usted a la brevedad.
                </p>
            )}
            {submissionStatus === 'error' && (
                <p className="mt-4 text-center text-red-600 font-semibold">
                    Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.
                </p>
            )}
        </form>
    </div>
  );
};

export default ContactForm;