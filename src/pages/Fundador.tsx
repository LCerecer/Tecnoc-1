import React from 'react';

export default function Fundador() {
  return (
    <div className="min-h-screen w-full bg-white pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold text-gray-900 mb-8">Misión y Visión</h1>
        <div className="max-w-3xl mx-auto bg-white rounded-lg p-8">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-5xl font-semibold text-gray-800">Misión</h2>
          </div>
          <p className="transform scale-125 text-gray-600 leading-relaxed">
            Ofrecemos soluciones integrales para piso industrial que garantizan que cumpla con las especificaciones de planicidad y durabilidad requeridas por las tecnologías automatizadas de manejo de materiales a través de personal experto y tecnologías de medición y corrección de planicidad de última generación.
          </p>

          <div className="flex flex-col items-center mt-8">
            <h2 className="text-5xl font-semibold text-gray-800">Visión</h2>
          </div>
          <p className="transform scale-125 text-lg text-gray-600 leading-relaxed mt-4 text-center">
            Ser la primera opción de nuestros clientes para solucionar sus necesidades de diseño y planicidad de piso industrial.
          </p>

          <div className="flex flex-col items-center mt-8">
            <h2 className="text-5xl font-semibold text-gray-800">Valores</h2>
          </div>
          <p className="transform scale-125 text-lg text-gray-600 leading-relaxed mt-4 text-center">
            • Innovación.<br/>
            • Confiabilidad.<br/>
            • Experiencia.
          </p>

          {/* New Image at the end */}
          <div className="mt-8 text-center">
            <img
              src="https://res.cloudinary.com/dy089iwsg/image/upload/v1746400972/Mision1_aoergg.png"
              alt="Gráfico Misión"
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
