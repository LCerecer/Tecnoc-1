import * as React from "react";
import { cn } from "@/lib/utils";

const NavHeader = () => {
  return (
    <nav className="fixed top-0 right-0 p-6 z-50">
      <ul className="relative flex w-fit min-w-[200px] gap-6 rounded-full border-2 border-black bg-white px-6 py-4 text-base">
        <li>
          <a
            href="#tecnoslab"
            className="text-black hover:text-gray-600 transition-colors duration-200 min-h-[40px] flex items-center justify-center text-[1rem] font-medium"
          >
            TECNOSLAB_MG
          </a>
        </li>
        <li>
          <a
            href="#cogrigespap"
            className="text-black hover:text-gray-600 transition-colors duration-200 min-h-[40px] flex items-center justify-center text-[1rem] font-medium"
          >
            COGRIGESPAP
          </a>
        </li>
        <li>
          <a
            href="#consultorias"
            className="text-black hover:text-gray-600 transition-colors duration-200 min-h-[40px] flex items-center justify-center text-[1rem] font-medium"
          >
            CONSULTORIAS
          </a>
        </li>
        <li>
          <a
            href="#contactanos"
            className="text-black hover:text-gray-600 transition-colors duration-200 min-h-[40px] flex items-center justify-center text-[1rem] font-medium"
          >
            CONTACTANOS
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavHeader;