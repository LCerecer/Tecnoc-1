import { Link } from 'react-router-dom';

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
  const getRedirectPath = (title: string) => {
    switch (title) {
      case "Pisos de quinta generación":
        return "/tecnoslab-mg";
      case "Medición de alta precisión":
        return "/cogrigespap";
      case "Reparación de pisos industriales":
        return "/cogrigespap"; // Updated to redirect to CogriGespap
      default:
        return "#";
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center py-16">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">{heading}</h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col space-y-6">
              <Link 
                to={getRedirectPath(item.title)}
                className="group relative overflow-hidden rounded-lg border bg-white hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    alt={item.title}
                    className="object-contain w-full h-full p-4"
                    src={item.image}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.summary}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}