// src/components/NavHeader.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function NavHeader() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Acerca de nosotros */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-black hover:text-gray-700">
            Acerca de nosotros
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 w-[400px]">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/historia"
                    className={`${navigationMenuTriggerStyle()} text-black hover:text-gray-700`}
                  >
                    Historia
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/fundador"
                    className={`${navigationMenuTriggerStyle()} text-black hover:text-gray-700`}
                  >
                    Misión, Visión y Valores
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Productos */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-black hover:text-gray-700">
            Productos
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 w-[400px]">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/productos"
                    className={`${navigationMenuTriggerStyle()} text-black hover:text-gray-700`}
                  >
                    Descripción general
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/productos"
                    className={`${navigationMenuTriggerStyle()} text-black hover:text-gray-700`}
                  >
                    TecnoMG
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/productos"
                    className={`${navigationMenuTriggerStyle()} text-black hover:text-gray-700`}
                  >
                    TecnoCM
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Servicios */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-black hover:text-gray-700">
            Servicios
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 w-[400px]">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/servicios"
                    className={`${navigationMenuTriggerStyle()} text-black hover:text-gray-700`}
                  >
                    Medicion de planicidad
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/servicios"
                    className={`${navigationMenuTriggerStyle()} text-black hover:text-gray-700`}
                  >
                    Corrección y desbaste
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/servicios"
                    className={`${navigationMenuTriggerStyle()} text-black hover:text-gray-700`}
                  >
                    Ingeniería de pisos industriales
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/servicios"
                    className={`${navigationMenuTriggerStyle()} text-black hover:text-gray-700`}
                  >
                    Supervisión de pisos industriales
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Contáctanos */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-black hover:text-gray-700">
            Contáctanos
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 w-[400px]">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/lista"
                    className={`${navigationMenuTriggerStyle()} text-black hover:text-gray-700`}
                  >
                    Únete a nuestra lista
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/agenda-llamada"
                    className={`${navigationMenuTriggerStyle()} text-black hover:text-gray-700`}
                  >
                    Agenda una llamada
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/comunicacion-correo"
                    className={`${navigationMenuTriggerStyle()} text-black hover:text-gray-700`}
                  >
                    Comunicación por correo
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/preguntas-frecuentes"
                    className={`${navigationMenuTriggerStyle()} text-black hover:text-gray-700`}
                  >
                    Preguntas frecuentes
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
