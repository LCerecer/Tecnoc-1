import React from 'react';

export default function TecnoslabMG() {
  return (
    <div className="min-h-screen w-full bg-white pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Tecnoslab MG</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nuestra Presencia en Minas Gerais</h2>
            <p className="text-gray-600">
              TECNOSLAB MG representa nuestra división especializada en el estado de Minas Gerais, 
              donde ofrecemos soluciones innovadoras para pisos industriales y servicios de 
              medición de alta precisión.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Servicios Especializados</h2>
            <ul className="space-y-3 text-gray-600">
              <li>• Reparación de pisos industriales</li>
              <li>• Medición de alta precisión para VNA</li>
              <li>• Consultoría técnica especializada</li>
              <li>• Soluciones personalizadas</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}