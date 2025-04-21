"use client"; 

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

function NavHeader() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <nav className="fixed top-0 right-0 p-4 z-50">
      <ul
        className="relative flex w-fit gap-4 rounded-full border-2 border-black bg-white p-1"
        onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      >
        <Tab setPosition={setPosition}>Tecnoslab_MG</Tab>
        <Tab setPosition={setPosition}>CogriGespap</Tab>
        <Tab setPosition={setPosition}>Consultorias</Tab>
        <Tab setPosition={setPosition}>Contactanos</Tab>

        <Cursor position={position} />
      </ul>
    </nav>
  );
}

const Tab = ({
  children,
  setPosition,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<{
    left: number;
    width: number;
    opacity: number;
  }>>;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-4 md:py-2 md:text-sm"
    >
      {children}
    </li>
  );
};

const Cursor = ({ 
  position 
}: { 
  position: {
    left: number;
    width: number;
    opacity: number;
  }
}) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-black md:h-9"
    />
  );
};

export default NavHeader;