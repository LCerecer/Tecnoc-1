import { Link } from 'react-router-dom';

interface GalleryProps {
  heading: string;
  items: {
    id: string;
    title: string;
    summary: string;
    url: string;
    image: string;
  }[];
}

export function Gallery6({ heading, items }: GalleryProps) {
  const getUrl = (title: string) => {
    switch (title) {
      case 'Tecnoslab_MG':
        return '/tecnoslab';
      case 'CogriGespap':
        return '/cogrigespap';
      case 'Consultorias':
        return '/consultorias';
      default:
        return '#';
    }
  };

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          {heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <Link
              key={item.id}
              to={getUrl(item.title)}
              className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-bold text-center p-4 bg-white">{item.title}</h3>
                <div className="aspect-[4/3] relative">
                  <img
                    alt={item.title}
                    className="object-cover w-full h-full"
                    src={item.image}
                  />
                </div>
                <div className="p-4 bg-white flex-grow">
                  <p className="text-gray-700 text-sm">{item.summary}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}