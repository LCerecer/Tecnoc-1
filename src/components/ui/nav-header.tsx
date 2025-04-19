import { Link } from 'react-router-dom';

export default function NavHeader() {
  return (
    <nav className="fixed top-0 right-0 p-4 z-50">
      <div className="flex gap-4">
        <Link to="/tecnoslab" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
          Tecnoslab_MG
        </Link>
        <Link to="/cogrigespap" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
          CogriGespap
        </Link>
        <Link to="/consultorias" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
          Consultorias
        </Link>
        <Link to="/contactanos" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
          Contáctanos
        </Link>
      </div>
    </nav>
  );
}