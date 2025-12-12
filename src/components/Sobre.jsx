const Sobre = () => {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Sobre a Clínica
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img src="/sobre.jpg" className="w-full h-80 object-cover rounded"/>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-600 mb-8">
             A Clínica OdontoXY é reconhecida por oferecer uma experiência odontológica moderna, acolhedora e totalmente personalizada. Atuamos há mais de 12 anos com foco na saúde bucal e na confiança de cada paciente, sempre combinando conhecimento técnico, tecnologia avançada e um atendimento próximo.
            </p>
            <p className="text-lg text-gray-600 mb-8">
             Investimos continuamente em equipamentos de última geração, técnicas atualizadas e materiais de alta qualidade, garantindo resultados duradouros e naturais. Nosso objetivo é simples: cuidar do seu sorriso com precisão, conforto e transparência.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;