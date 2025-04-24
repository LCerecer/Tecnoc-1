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
}

export function Gallery6({ heading, items }: Gallery6Props) {
  return (
    <section className="min-h-screen flex flex-col justify-center py-16">
      <div className="container">
        <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
          <div className="w-full text-center mb-8">
            <h2 className="text-3xl font-semibold md:text-4xl">{heading}</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.id}
              className={cn(
                "group relative overflow-hidden rounded-lg border bg-white",
                "hover:shadow-lg transition-shadow duration-300"
              )}
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.summary}</p>
                <a
                  href={item.url}
                  className="mt-4 inline-block text-blue-600 hover:text-blue-800"
                >
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}