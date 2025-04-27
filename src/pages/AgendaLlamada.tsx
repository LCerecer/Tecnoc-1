import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AgendaLlamada() {
  const [showCalendly, setShowCalendly] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCalendly(true);
  };

  return (
    <div className="min-h-screen w-full bg-white pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Agenda tu Llamada</h1>
        
        <AnimatePresence mode="wait">
          {!showCalendly ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-md mx-auto"
            >
              <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    required
                    type="tel"
                    id="phone"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-black text-white rounded-md py-2 hover:bg-gray-800 transition-colors"
                >
                  Agenda tu llamada
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="calendly"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="aspect-video w-full max-w-4xl mx-auto"
            >
              <iframe
                src="https://calendly.com/luiscerecer7/tecnoslab"
                width="100%"
                height="100%"
                frameBorder="0"
              ></iframe>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}