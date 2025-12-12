import { useState } from 'react';

const Header = () => {
  const [menu, setMenu] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex items-center">
            <img src="/logo.png" className="h-24 w-auto mr-10"/>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">Home</a>
            <a href="#sobre" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">Sobre a Clínica</a>
            <a href="#serviços" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">Serviços</a>
            <a href="#especialistas" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">Especialistas</a>
            <a href="#contato" className="text-gray-500 hover:text-gray-900 transition-colors duration-200">Contato</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-[#25D366] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#1ebe5d]">
              Entre em contato
            </button>
          </div>
          
          <button className="md:hidden text-gray-500" onClick={() => setMenu(!menu)}>
            <div className="text-xl font-light">☰</div>
          </button>
        </div>
        
        {menu && (
          <div className="md:hidden bg-white border-t">
            <div className="flex flex-col py-4">
              <a href="#home" className="py-3 px-4 text-gray-500 hover:text-gray-900 hover:bg-gray-50" onClick={() => setMenu(false)}>Home</a>
              <a href="#sobre" className="py-3 px-4 text-gray-500 hover:text-gray-900 hover:bg-gray-50" onClick={() => setMenu(false)}>Sobre a Clínica</a>
              <a href="#serviços" className="py-3 px-4 text-gray-500 hover:text-gray-900 hover:bg-gray-50" onClick={() => setMenu(false)}>Serviços</a>
              <a href="#especialistas" className="py-3 px-4 text-gray-500 hover:text-gray-900 hover:bg-gray-50" onClick={() => setMenu(false)}>Especialistas</a>
              <a href="#contato" className="py-3 px-4 text-gray-500 hover:text-gray-900 hover:bg-gray-50" onClick={() => setMenu(false)}>Contato</a>
              
              <button className="mx-4 mt-4 bg-[#25D366] text-white py-3 rounded text-sm font-medium hover:bg-[#1ebe5d]">
                Entre em contato
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;