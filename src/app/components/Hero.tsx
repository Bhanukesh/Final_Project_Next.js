const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-white dark:bg-black">
       <img
        src="/hero.png"
        alt="Hero Image"
        className="w-full max-w-[10rem] rounded-lg shadow-lg mb-5"
      />
      <h1 className="text-3xl font-extrabold text-white mb-6">
        Become the web developer you were always destined to be.
      </h1>
      <p className="text-xl text-white max-w-xl mb-8">
        Slaying the dragon is about facing your fears, pursuing meaning and transforming into the web developer you were always destined to be.
      </p>
      <p className="text-xl text-white max-w-xl mb-8">
        Here you will start your journey, it will not be easy - you will suffer - but you will go all the way. 
                Slaying The Dragon is a learning platform for the bravest adventurer aspiring to defeat 
                the biggest dragon of all - web development. <strong>I currently offer a CSS course</strong> 
                and a JS course, with plans to release more courses soon, 
                including <strong>DSA - ReactJS - NextJS and more.</strong> 
                You have decided upon your purpose - <strong>you will slay the dragon.
                </strong>
      </p>
      <a
          href="#"
          className="bg-white text-black text-sm px-5 py-5 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Preview →
        </a>
     
    </section>
  );
};

export default Hero;