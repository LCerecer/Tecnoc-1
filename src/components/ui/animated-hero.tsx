import React from "react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dy089iwsg/image/upload/v1745092430/1_loiwsy.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* New Motion Paragraph */}
          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Somos representantes en México de COGRI GESPAP, parte de COGRI GROUP,
            líderes mundiales en diseño, ingeniería, medición de planicidad y
            certificación de pisos industriales para sistemas robóticos y
            pasillos VNA.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#"
              className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Agenda tu llamada
            </a>
            <a
              href="#"
              className="bg-black/20 backdrop-blur-sm text-white border border-white px-8 py-3 rounded-lg font-medium hover:bg-black/30 transition-colors"
            >
              Únete a la comunidad →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
