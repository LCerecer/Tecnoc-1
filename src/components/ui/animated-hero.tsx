import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://res.cloudinary.com/dy089iwsg/image/upload/v1745092430/1_loiwsy.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay for better text readability */}
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Tecnoslab
          </motion.h1>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Tecnología
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            No hay piso que no podamos solucionar
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
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