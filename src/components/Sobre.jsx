const Sobre = () => {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
           Sobre a Clínica
         </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          
          <div>
            <img src="/sobre.jpg" className="w-full h-80 object-cover rounded"/>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-600 mb-5">
              A Clínica OdontoXY atua no mercado odontológico há mais de 10 anos, 
              oferecendo tratamentos dentários completos com qualidade e tecnologia. 
              Localizada em São Paulo, nossa clínica é referência em cuidados 
              odontológicos para pacientes de todas as idades.
            </p>
            
            <p className="text-lg text-gray-600 mb-5">
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