import { motion } from "framer-motion";

export function Hero() {
  return (
    <section 
      className="relative flex flex-col items-center justify-center text-center h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: "url('https://res.cloudinary.com/dy089iwsg/image/upload/v1745092430/1_loiwsy.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content container */}
      <div className="relative z-10 text-white px-4 md:px-6">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Tecnoslab Tecnología
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          No hay piso que no podamos solucionar
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
            Agenda tu llamada
          </button>
          <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
            Únete a la comunidad
          </button>
        </motion.div>
      </div>
    </section>
  );
}