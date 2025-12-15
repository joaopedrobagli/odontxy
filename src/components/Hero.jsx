const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#42C4C7]/10 to-white overflow-hidden">
      <div className="absolute top-10 left-10 w-48 h-48 md:w-64 md:h-64 bg-[#42C4C7] rounded-full opacity-10"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 md:w-80 md:h-80 bg-[#42C4C7] rounded-full opacity-10"></div>
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              O sorriso que transforma a sua vida começa aqui
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
              Cuidamos da sua saúde bucal com tecnologia avançada e profissionais
              preparados para oferecer conforto, segurança e resultados incríveis.
            </p>
            <button className="px-8 py-3 md:px-10 md:py-3 font-semibold rounded-xl text-white bg-[#42C4C7] border-[3px] border-white/40 shadow-[0_0_15px_#42C4C777] hover:shadow-[0_0_25px_#42C4C7] transition-all text-sm md:text-base">
              Conhecer Especialistas
            </button>
          </div>
          
          <div className="relative order-1 md:order-2 mb-8 md:mb-0">
            <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl">
              <div className="aspect-video bg-[#42C4C7]/10 rounded-lg overflow-hidden">
                <img src="/hero.jpg" className="w-full h-full object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

