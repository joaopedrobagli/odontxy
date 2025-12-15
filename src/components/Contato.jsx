const Contato = () => {
  return (
    <section id="contato" className="py-12 md:py-20 relative">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/cli.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(3px)',
          opacity: 0.3}}></div>
      
      <div className="relative z-10 max-w-sm md:max-w-md mx-auto px-4">
        <div className="bg-white p-6 md:p-10 shadow-md md:shadow-lg">
          <div className="text-center mb-10 md:mb-16">
            <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Contato</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Fale Conosco</h2>
          </div>

          <form className="space-y-6 md:space-y-8">
            <div>
              <input type="text" placeholder="Seu nome" className="w-full px-4 md:px-5 py-3 md:py-4 border-b border-gray-300 focus:border-gray-900 outline-none text-gray-700 text-sm md:text-base"/>
            </div>
            <div>
              <input type="email" placeholder="Seu email" className="w-full px-4 md:px-5 py-3 md:py-4 border-b border-gray-300 focus:border-gray-900 outline-none text-gray-700 text-sm md:text-base"/>
            </div>
            <div>
              <textarea rows="4" placeholder="Mensagem" className="w-full px-4 md:px-5 py-3 md:py-4 border-b border-gray-300 focus:border-gray-900 outline-none text-gray-700 resize-none text-sm md:text-base"></textarea>
            </div>
            <div className="pt-4">
              <button type="submit" className="w-full bg-[#42C4C7] text-white py-3 md:py-4 font-medium text-base md:text-lg transition-colors hover:bg-[#3ab1b4]">Enviar Mensagem</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contato;