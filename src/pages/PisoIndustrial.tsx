import React from 'react';

export default function PisoIndustrial() {
  return (
    <div className="min-h-screen w-full bg-white pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Piso Industrial</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Soluciones para Pisos Industriales</h2>
            <p className="text-gray-600">
              Ofrecemos soluciones completas para la reparación y mantenimiento de pisos industriales. 
              Nuestro sistema de quinta generación permite reparaciones rápidas y eficientes, 
              garantizando la máxima durabilidad y rendimiento.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ventajas</h2>
            <ul className="space-y-3 text-gray-600">
              <li>• Reparación en menos de 48 horas</li>
              <li>• Sin necesidad de colados</li>
              <li>• Alta planicidad garantizada</li>
              <li>• Costos reducidos</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}