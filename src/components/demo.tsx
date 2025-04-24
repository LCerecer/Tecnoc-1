import { Hero } from "@/components/ui/animated-hero";
import NavHeader from "@/components/ui/nav-header";
import { Gallery6 } from "@/components/ui/gallery6";
import { BackgroundPaths } from "@/components/ui/background-paths";
import Logo from "@/components/Assets/Logo.svg";

const galleryData = {
  heading: "Nuestros Servicios",
  items: [
    {
      id: "item-1",
      title: "Tecnoslab_MG",
      summary: "Repara tu piso en menos de 48 horas, sin necesidad de colados, con alta planicidad y a 1/5 del precio ofrecido en el mercado",
      url: "#",
      image: "https://res.cloudinary.com/dy089iwsg/image/upload/v1745505006/Tecnosbal_logo_ccdmij.png",
    },
    {
      id: "item-2",
      title: "CogriGespap",
      summary: "Mediciones de piso para VNA y pasillos robóticos con garantía total. Tecnología avanzada que asegura precisión milimétrica, sin demoras ni errores.",
      url: "#",
      image: "https://res.cloudinary.com/dy089iwsg/image/upload/v1745505380/Cogri_logo_ohocoz.png",
    },
    {
      id: "item-3",
      title: "Consultorias",
      summary: "¿Otro problema? Nosotros lo solucionamos",
      url: "#",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    }
  ],
};

function HomeDemo() {
  return (
    <div className="min-h-screen w-full bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <img 
            src={Logo} 
            alt="Tecnoslab Logo" 
            className="h-24 md:h-28 lg:h-32 w-auto" 
          />
          <NavHeader />
        </div>
      </header>
      
      <main className="pt-24 md:pt-28 lg:pt-32">
        <div className="w-full">
          <Hero />
        </div>
        <Gallery6 {...galleryData} />
        <BackgroundPaths title="Innovación Tecnológica" />
      </main>
    </div>
  );
}

export { HomeDemo };