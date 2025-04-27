import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function NavHeader() {
  const dropdowns = [
    {
      label: "Acerca de nosotros",
      items: [
        { label: "Historia", href: "#" },
        { label: "Equipo", href: "#" },
        { label: "Misión y Visión", href: "#" },
      ],
    },
    {
      label: "Productos",
      items: [
        { label: "Productos", href: "/productos" },
        { label: "TecnoMG", href: "/productos" },
        { label: "TecnoCM", href: "/productos" },
      ],
    },
    {
      label: "Servicios",
      items: [
        { label: "Tecnoslab MG", href: "/tecnoslab-mg" },
        { label: "CogriGespap", href: "/cogrigespap" },
        { label: "Consultoría", href: "#" },
      ],
    },
    {
      label: "Contáctanos",
      items: [
        { label: "Formulario de Contacto", href: "/contactanos" },
        { label: "Ubicaciones", href: "#" },
        { label: "Soporte Técnico", href: "#" },
      ],
    },
  ];

  return (
    <nav className="flex items-center gap-2">
      {dropdowns.map((dropdown) => (
        <DropdownMenu key={dropdown.label}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="text-base">
              {dropdown.label}
              <ChevronDown className="ml-1 h-4 w-4 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {dropdown.items.map((item) => (
              <DropdownMenuItem key={item.label} asChild>
                <Link to={item.href} className="w-full">
                  {item.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
    </nav>
  );
}