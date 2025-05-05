import React from 'react';

export default function Historia() {
  return (
    <div className="min-h-screen w-full bg-white pt-20">
      <div className="container mx-auto px-4">
        {/* Title at a sensible 6–7xl instead of 10xl */}
        <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-8">
          Nuestra Historia
        </h1>

        {/* Limit the width so text never spills off page */}
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg p-8">
          {/* Paragraphs sized text-lg on mobile, text-xl on larger */}
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6">
            Desde nuestra fundación, Tecnoslab ha estado a la vanguardia en soluciones 
            para pisos industriales. Nuestra trayectoria comenzó con la visión de
            transformar la industria mediante tecnología innovadora y servicios de alta calidad.
          </p>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            A lo largo de los años, hemos expandido nuestras capacidades y experiencia, 
            consolidándonos como líderes en el mercado de pisos industriales en México.
          </p>

          {/* LinkedIn Banner */}
          <img
            src="https://res.cloudinary.com/dy089iwsg/image/upload/v1746400162/BARRA_LINKEDIN_qr1jqd.png"
            alt="Barra LinkedIn"
            className="mt-6 mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
