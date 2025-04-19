import { Link } from "react-router-dom";

interface BackgroundPathsProps {
  title: string;
}

export function BackgroundPaths({ title }: BackgroundPathsProps) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">{title}</h2>
          <div className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Link 
              to="/contactanos"
              className="inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 text-black dark:text-white transition-all duration-300 group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10 hover:shadow-md dark:hover:shadow-neutral-800/50"
            >
              <img 
                src="https://res.cloudinary.com/dy089iwsg/image/upload/v1745090634/Whats_x67m0j.jpg"
                alt="Contact Us"
                className="w-full h-full object-cover rounded-[1.15rem]"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}