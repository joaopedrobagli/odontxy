const Equipe = () => {
  return (
    <section id="especialistas" className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Equipe</div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Nossos Especialistas</h2>
        </div>

        <div className="grid gap-6 md:gap-10 sm:grid-cols-2">
          <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 text-center shadow-sm hover:shadow-md transition">
            <div className="w-full h-48 md:h-64 rounded-lg md:rounded-xl overflow-hidden mb-4 md:mb-6">
              <img 
                src="/dentista-feminina.jpg" className="w-full h-full object-cover"/>
            </div>
            <div className="text-lg md:text-xl font-semibold text-gray-900">Dra. Ana Silva</div>
            <div className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4">Ortodontista • CRO/SP 12345</div>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
              Especialista em ortodontia com 12 anos de experiência.
              Atua com aparelhos fixos e alinhadores invisíveis.
            </p>
          </div>
          <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 text-center shadow-sm hover:shadow-md transition">
            <div className="w-full h-48 md:h-64 rounded-lg md:rounded-xl overflow-hidden mb-4 md:mb-6">
              <img src="/doutor.jpg" className="w-full h-full object-cover"/>
            </div>
            <div className="text-lg md:text-xl font-semibold text-gray-900">Dr. Carlos Santos</div>
            <div className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4">Implantodontista • CRO/SP 67890</div>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
              Especialista em implantes dentários com 15 anos de experiência.
              Membro da Sociedade Brasileira de Implantodontia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipe;