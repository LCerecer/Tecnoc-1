import { Hero } from "@/components/ui/animated-hero";
import { Gallery6 } from "@/components/ui/gallery6";
import { Cta11 } from "@/components/ui/cta11";

const galleryData = {
  heading: "Nuestros Servicios",
  items: [
    {
      id: "item-1",
      title: "Pisos de quinta generación",
      summary: "Repara tu piso en menos de 48 horas, sin necesidad de colados, con alta planicidad y a 1/5 del precio ofrecido en el mercado",
      url: "#",
      image: "https://res.cloudinary.com/dy089iwsg/image/upload/v1745505006/Tecnosbal_logo_ccdmij.png",
    },
    {
      id: "item-2",
      title: "Medición de alta precisión",
      summary: "Mediciones de piso para VNA y pasillos robóticos con garantía total. Tecnología avanzada que asegura precisión milimétrica, sin demoras ni errores.",
      url: "#",
      image: "https://res.cloudinary.com/dy089iwsg/image/upload/v1745505380/Cogri_logo_ohocoz.png",
    },
    {
      id: "item-3",
      title: "Reparación de pisos industriales",
      summary: "¿Otro problema? Nosotros lo solucionamos",
      url: "#",
      image: "https://res.cloudinary.com/dy089iwsg/image/upload/v1745506451/Piso_Logo_kpqqq8.png",
    }
  ],
};

const ctaData = {
  heading: "¿Listo para modernizar tu piso?",
  description: "Descubre cómo podemos transformar tu espacio con soluciones innovadoras y eficientes.",
  buttons: {
    primary: {
      text: "Aprende más",
      url: "#",
    },
    secondary: {
      text: "Contáctanos",
      url: "#",
    },
  },
};

function HomeDemo() {
  return (
    <main className="pt-12 md:pt-16 w-full">
      <div className="container mx-auto">
        <Hero />
        <Gallery6 {...galleryData} />
        <Cta11 {...ctaData} />
      </div>
    </main>
  );
}

export { HomeDemo };