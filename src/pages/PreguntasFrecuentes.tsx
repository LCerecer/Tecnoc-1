import React from 'react';

export default function PreguntasFrecuentes() {
  return (
    <div className="min-h-screen w-full bg-white pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Preguntas Frecuentes</h1>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">¿Qué servicios ofrece Tecnoslab?</h2>
            <p className="text-gray-600">
              Tecnoslab ofrece soluciones especializadas en medición y corrección de planicidad para pisos industriales y robóticos, 
              incluyendo servicios de medición de alta precisión y reparación de pisos industriales.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">¿Cuánto tiempo toma una reparación típica?</h2>
            <p className="text-gray-600">
              La mayoría de las reparaciones se completan en menos de 48 horas, permitiendo una rápida 
              vuelta a la operación normal de su instalación.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">¿Qué estándares siguen sus mediciones?</h2>
            <p className="text-gray-600">
              Realizamos mediciones bajo estándares internacionales como ASTM, ACI y normas específicas 
              para sistemas VNA y robóticos.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">¿Trabajan con sistemas automatizados?</h2>
            <p className="text-gray-600">
              Sí, somos expertos en sistemas automatizados y robóticos, incluyendo instalaciones como 
              AutoStore, Amazon AMR y Geek+.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}