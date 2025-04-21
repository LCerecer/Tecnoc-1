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
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "item-2",
      title: "CogriGespap",
      summary: "Mediciones de piso para VNA y pasillos robóticos con garantía total. Tecnología avanzada que asegura precisión milimétrica, sin demoras ni errores.",
      url: "#",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
      <header className="flex items-center justify-between p-4 md:p-6">
        <img 
          src={Logo} 
          alt="Tecnoslab Logo" 
          className="h-12 md:h-16 absolute top-4 left-4 md:top-6 md:left-6" 
        />
        <NavHeader />
      </header>
      <Hero />
      <Gallery6 {...galleryData} />
      <BackgroundPaths title="Innovación Tecnológica" />
    </div>
  );
}

export { HomeDemo };