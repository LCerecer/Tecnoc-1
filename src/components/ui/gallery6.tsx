// src/pages/Servicios.tsx
import React, { useRef } from 'react'
import { Feature197 } from '@/components/ui/accordion-feature'

const tecnoMGData = {
  features: [
    {
      id: 1,
      title: "Pisos de quinta generación",
      summary:
        "Repara tu piso en menos de 48 horas, sin necesidad de colados, con alta planicidad y a 1/5 del precio ofrecido en el mercado",
      url: "#",
      image:
        "https://res.cloudinary.com/dy089iwsg/image/upload/v1746402855/Central_nocxiw.jpg",
    },
  ],
}

const tecnoCMData = {
  features: [
    {
      id: 1,
      title: "Tecnología de Vanguardia",
      summary:
        "Implementamos las últimas innovaciones en medición y control VNA y robóticos, garantizando resultados precisos y confiables en cada proyecto.",
      url: "#",
      image:
        "https://res.cloudinary.com/dy089iwsg/image/upload/v1746402855/Central_nocxiw.jpg",
    },
  ],
}

const block3Data = {
  features: [
    {
      id: 1,
      title: "Servicio 3",
      summary: "Descripción breve del servicio 3.",
      url: "#",
      image:
        "https://res.cloudinary.com/dy089iwsg/image/upload/v1746402855/Central_nocxiw.jpg",
    },
  ],
}

const block4Data = {
  features: [
    {
      id: 1,
      title: "Servicio 4",
      summary: "Descripción breve del servicio 4.",
      url: "#",
      image:
        "https://res.cloudinary.com/dy089iwsg/image/upload/v1746402855/Central_nocxiw.jpg",
    },
  ],
}

export default function Servicios() {
  const tecnoMGRef = useRef<HTMLDivElement>(null)
  const tecnoCMRef = useRef<HTMLDivElement>(null)
  const block3Ref = useRef<HTMLDivElement>(null)
  const block4Ref = useRef<HTMLDivElement>(null)

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen w-full bg-white pt-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="bg-white rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Servicios
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-4">
            TECNOSLAB ofrece soluciones especializadas en medición con VNA y robóticos, garantizando resultados precisos y confiables.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed mb-4">
            Nuestro equipo técnico emplea perfilógrafos avanzados para asegurar pisos con tolerancias mínimas adaptadas a cada cliente.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed">
            Somos expertos en sistemas automatizados y robóticos, ofreciendo soluciones concretas que impulsan la productividad de tu negocio.
          </p>
        </div>

        {/* 2 × 2 grid of blocks */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          {/* TecnoMG */}
          <button
            onClick={() => scrollTo(tecnoMGRef)}
            className="relative overflow-hidden rounded-lg group hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src="https://res.cloudinary.com/dy089iwsg/image/upload/v1746402910/Central_sgsdkv.png"
              alt="TecnoMG"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-lg">
              <h3 className="text-2xl font-bold text-white">TecnoMG</h3>
            </div>
          </button>

          {/* TecnoCM */}
          <button
            onClick={() => scrollTo(tecnoCMRef)}
            className="relative overflow-hidden rounded-lg group hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src="https://res.cloudinary.com/dy089iwsg/image/upload/v1746402855/Central_nocxiw.jpg"
              alt="TecnoCM"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-lg">
              <h3 className="text-2xl font-bold text-white">TecnoCM</h3>
            </div>
          </button>

          {/* Servicio 3 */}
          <button
            onClick={() => scrollTo(block3Ref)}
            className="relative overflow-hidden rounded-lg group hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src="https://res.cloudinary.com/dy089iwsg/image/upload/v1746402855/Central_nocxiw.jpg"
              alt="Servicio 3"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-lg">
              <h3 className="text-2xl font-bold text-white">Servicio 3</h3>
            </div>
          </button>

          {/* Servicio 4 */}
          <button
            onClick={() => scrollTo(block4Ref)}
            className="relative overflow-hidden rounded-lg group hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src="https://res.cloudinary.com/dy089iwsg/image/upload/v1746402855/Central_nocxiw.jpg"
              alt="Servicio 4"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-lg">
              <h3 className="text-2xl font-bold text-white">Servicio 4</h3>
            </div>
          </button>
        </div>

        {/* Sections for the remaining 4 services */}
        <div ref={tecnoMGRef} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">TecnoMG</h2>
          <Feature197 {...tecnoMGData} />
        </div>

        <div ref={tecnoCMRef} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">TecnoCM</h2>
          <Feature197 {...tecnoCMData} />
        </div>

        <div ref={block3Ref} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Servicio 3</h2>
          <Feature197 {...block3Data} />
        </div>

        <div ref={block4Ref} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Servicio 4</h2>
          <Feature197 {...block4Data} />
        </div>
      </div>
    </div>
  )
}
