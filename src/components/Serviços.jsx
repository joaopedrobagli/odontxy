const Serviços = () => {
  return (
    <section id="servicos" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Serviços
            </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="h-64">
              <img src="/Ortodontia.jpg" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ortodontia</h3>
              <p className="text-gray-700 mb-4">
                Correção da posição dos dentes e ossos maxilares através de aparelhos fixos.
              </p>
              <div className="text-sm text-gray-600">
                - Aparelho fixo - Alinhadores - Aparelho móvel
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="h-64">
              <img src="/Implantes.jpg" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Implantes</h3>
              <p className="text-gray-700 mb-4">
                Reposição de dentes perdidos com implantes de titânio. Solução fixa e duradoura.
              </p>
              <div className="text-sm text-gray-600">
                - Implante unitário - Prótese sobre implante - All-on-4
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="h-64">
              <img src="/prevencao.jpg" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Prevenção Dental</h3>
              <p className="text-gray-700 mb-4">
                Cuidados essenciais para manter a saúde bucal em dia e evitar problemas futuros.
              </p>
              <div className="text-sm text-gray-600">
                - Limpeza profissional - Facetas - Aplicação de flúor
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Serviços;
