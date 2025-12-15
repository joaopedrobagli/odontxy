const Serviços = () => {
  return (
    <section id="servicos" className="py-12 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Serviços</div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Nossa Especialidade</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white border border-gray-200 rounded-lg md:rounded-xl overflow-hidden shadow-sm">
            <div className="h-48 md:h-64">
              <img src="/Ortodontia.jpg" className="w-full h-full object-cover"/>
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Ortodontia</h3>
              <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4">
                Correção da posição dos dentes e ossos maxilares através de aparelhos fixos.
              </p>
              <div className="text-xs md:text-sm text-gray-600">
                Aparelho fixo - Alinhadores - Aparelho móvel
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg md:rounded-xl overflow-hidden shadow-sm">
            <div className="h-48 md:h-64">
              <img src="/Implantes.jpg" className="w-full h-full object-cover"/>
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Implantes</h3>
              <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4">
                Reposição de dentes perdidos com implantes de titânio. Solução fixa e duradoura.
              </p>
              <div className="text-xs md:text-sm text-gray-600">
                Implante unitário - Prótese sobre implante - All-on-4
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg md:rounded-xl overflow-hidden shadow-sm">
            <div className="h-48 md:h-64">
              <img src="/prevencao.jpg" className="w-full h-full object-cover"/>
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Prevenção Dental</h3>
              <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4">
                Cuidados essenciais para manter a saúde bucal em dia e evitar problemas futuros.
              </p>
              <div className="text-xs md:text-sm text-gray-600">
                Limpeza profissional - Facetas - Aplicação de flúor
              </div>
            </div>
          </div>
        </div> 
      </div>
    </section>
  );
};

export default Serviços;