const Footer = () => {
  return (
    <footer className="bg-[#42C4C7] text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="flex justify-center md:justify-start">
            <img src="/logo.png" className="h-24 md:h-32 w-auto"/>
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">Contato</h4>
            <div className="space-y-2 md:space-y-3 text-white/90 text-sm md:text-base">
              <div>(18) 9999-9999</div>
              <div>contato@odontoxy.com.br</div>
              <div>WhatsApp: (18) 99999-9999</div>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">Endereço</h4>
            <div className="space-y-1 md:space-y-2 text-white/90 text-sm md:text-base">
              <div>Av. Prudente, 8000</div>
              <div>Pompeia</div>
              <div>XXXXXXXXXX - SP</div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 my-6 md:my-8"></div>
        <div className="text-center text-white/90 text-xs md:text-sm">
          © 2025 OdontoXY. Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
};

export default Footer;