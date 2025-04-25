import { cn } from "@/lib/utils";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

interface Gallery6Props {
  heading: string;
  items: GalleryItem[];
  className?: string;
}

export function Gallery6({ heading, items, className }: Gallery6Props) {
  return (
    <section className={cn("min-h-screen flex flex-col justify-center py-16", className)}>
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12">{heading}</h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col space-y-6">
              <div className="group relative overflow-hidden rounded-lg border bg-white hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-[4/3] relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-contain w-full h-full p-4"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
              <p className="text-lg leading-relaxed text-gray-700 font-medium px-2">
                {item.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}