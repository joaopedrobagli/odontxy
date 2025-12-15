const Sobre = () => {
  return (
    <section id="sobre" className="py-12 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="text-center mb-10 md:mb-16">
          <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Sobre a Clínica</div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Um Pouco Sobre Nós</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="order-1 md:order-1">
            <img src="/sobre.jpg" className="w-full h-64 md:h-80 object-cover rounded"/>
          </div>
          <div className="order-2 md:order-2 space-y-4 md:space-y-6">
            <p className="text-base md:text-lg text-gray-600">
              A Clínica OdontoXY atua no mercado odontológico há mais de 10 anos, 
              oferecendo tratamentos dentários completos com qualidade e tecnologia. 
              Localizada em São Paulo, nossa clínica é referência em cuidados 
              odontológicos para pacientes de todas as idades.
            </p>
            <p className="text-base md:text-lg text-gray-600">
              Nossa missão é proporcionar saúde bucal através de tratamentos 
              personalizados e equipamentos de última geração, sempre priorizando 
              o bem-estar e satisfação dos nossos pacientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;