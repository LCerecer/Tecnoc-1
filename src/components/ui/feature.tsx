import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function Feature() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid border rounded-lg container p-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">Platform</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  TecnoCM
                </h2>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  Tecnoslab ofrece soluciones especializadas en medición y corrección de planicidad para pisos industriales y robóticos. Realizamos mediciones bajo estándares internacionales como ASTM, ACI y normas específicas para sistemas VNA y robóticos, garantizando resultados precisos y confiables. Nuestro equipo técnico emplea perfilógrafos avanzados y tecnología láser para asegurar pisos con tolerancias mínimas adaptadas a cada cliente.
                </p>
              </div>
            </div>
            <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Aplicaciones</p>
                  <p className="text-muted-foreground text-sm">
                    Nuestros servicios aseguran pisos industriales con la precisión requerida para almacenes automatizados y operaciones logísticas exigentes. Garantizamos superficies óptimas para montacargas en pasillos estrechos (VNA) y sistemas robóticos avanzados.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Mejor uso</p>
                  <p className="text-muted-foreground text-sm">
                    Tecnoslab verifica y corrige la planicidad según estándares internacionales y específicos del fabricante. Así, aseguramos una operación eficiente, segura y de alto rendimiento para tu empresa.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Tecnología avanzada</p>
                  <p className="text-muted-foreground text-sm">
                    Utilizamos equipos de última generación y metodologías probadas para garantizar resultados óptimos en cada proyecto.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-muted rounded-md aspect-square overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg" 
              alt="Industrial Flooring"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };