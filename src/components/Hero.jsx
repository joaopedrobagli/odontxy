const Hero = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-blue-50 to-green-50 overflow-hidden">
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-100 rounded-full opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-green-100 rounded-full opacity-20"></div>
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              O sorriso que transforma a sua vida começa aqui
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Cuidamos da sua saúde bucal com tecnologia avançada e profissionais preparados para oferecer conforto, segurança e resultados incríveis.
            </p>
            <button className="bg-[#25D366] hover:bg-[#1ebe5d] text-white px-8 py-3 rounded-lg font-semibold">
              Conhecer Especialistas
            </button>
          </div>
          
          <div className="relative">
            <div className="bg-white p-6 rounded-2xl shadow-xl">
              <div className="aspect-video bg-gradient-to-b from-blue-100 to-green-100 rounded-lg flex items-center justify-center">
                <img src="/hero.jpg" className="h-auto w-auto "/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
