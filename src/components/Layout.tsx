import { Link } from 'react-router-dom';
import NavHeader from '@/components/ui/nav-header';
import Logo from '@/components/Assets/Logo.svg';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen w-full bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-3 lg:px-6">
          <div className="flex items-center justify-between">
            <Link to="/">
              <img 
                src={Logo} 
                alt="Tecnoslab Logo" 
                className="h-12 md:h-16 w-auto"
              />
            </Link>
            <NavHeader />
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}