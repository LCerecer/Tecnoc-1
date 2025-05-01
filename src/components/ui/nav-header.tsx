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
        <NavigationMenuItem>
          <NavigationMenuTrigger>Acerca de nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 w-[400px]">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/historia"
                    className={navigationMenuTriggerStyle()}
                  >
                    Historia
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/fundador"
                    className={navigationMenuTriggerStyle()}
                  >
                    Fundador
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Productos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 w-[400px]">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/productos"
                    className={navigationMenuTriggerStyle()}
                  >
                    Descripción general
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/productos"
                    className={navigationMenuTriggerStyle()}
                  >
                    TecnoMG
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/productos"
                    className={navigationMenuTriggerStyle()}
                  >
                    TecnoCM
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Servicios</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 w-[400px]">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/servicios"
                    className={navigationMenuTriggerStyle()}
                  >
                    Mediciones de pisos
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/servicios"
                    className={navigationMenuTriggerStyle()}
                  >
                    Corrección y desbaste
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/servicios"
                    className={navigationMenuTriggerStyle()}
                  >
                    Ingeniería de pisos industriales
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/servicios"
                    className={navigationMenuTriggerStyle()}
                  >
                    Supervisión de pisos industriales
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Contáctanos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 w-[400px]">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/lista"
                    className={navigationMenuTriggerStyle()}
                  >
                    Únete a nuestra lista
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/agenda-llamada"
                    className={navigationMenuTriggerStyle()}
                  >
                    Agenda una llamada
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/comunicacion-correo"
                    className={navigationMenuTriggerStyle()}
                  >
                    Comunicación por correo
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/preguntas-frecuentes"
                    className={navigationMenuTriggerStyle()}
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