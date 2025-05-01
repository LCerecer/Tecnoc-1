import React from 'react';
import { motion } from 'framer-motion';

export default function Lista() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen w-full bg-[#F5F5F5] pt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Mantente al día con las innovaciones de la construcción
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nombre
                </label>
                <input
                  required
                  type="text"
                  id="name"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label 
                  htmlFor="company" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Empresa
                </label>
                <input
                  required
                  type="text"
                  id="company"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label 
                  htmlFor="phone" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Teléfono
                </label>
                <input
                  required
                  type="tel"
                  id="phone"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                  placeholder="Tu número de teléfono"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Correo
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white rounded-md py-3 hover:bg-gray-800 transition-colors font-medium"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}