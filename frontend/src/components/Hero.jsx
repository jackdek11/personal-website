import { styles } from '../styles';

const Hero = () => {
  const HeroSectionStyles = {
    height: '53vh',
  };

  return (
    <section style={HeroSectionStyles} className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm Jack
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            i love to build.
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about"></a>
      </div>
    </section>
  );
};



export default Hero;
