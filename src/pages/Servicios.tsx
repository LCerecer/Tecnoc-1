import React from 'react';

export default function Servicios() {
  return (
    <div className="min-h-screen w-full bg-white pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Nuestros Servicios</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mediciones de pisos</h2>
            <p className="text-gray-600">
              Realizamos mediciones precisas utilizando tecnología de última generación para garantizar 
              la calidad y planicidad de sus pisos industriales.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Corrección y desbaste</h2>
            <p className="text-gray-600">
              Ofrecemos servicios especializados de corrección y desbaste para optimizar la superficie 
              de sus pisos industriales.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ingeniería de pisos industriales</h2>
            <p className="text-gray-600">
              Diseñamos soluciones integrales para pisos industriales, considerando las necesidades 
              específicas de cada proyecto.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Supervisión de pisos industriales</h2>
            <p className="text-gray-600">
              Proporcionamos supervisión experta durante todo el proceso de instalación y mantenimiento 
              de pisos industriales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}