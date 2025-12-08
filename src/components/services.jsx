import { FaAndroid, FaLaptopCode, FaApple } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";

const Services = () => {
  return (
    <section className="min-h-screen px-10  text-white" data-aos="fade-left">
      {/* TITLE */}
      <div className="flex items-center gap-4 mb-16">
        <div className="flex-1 h-[3px] bg-[#D1A14A] rounded-full"></div>

        <h1 className="text-5xl font-bold text-gradient">Our Services</h1>

        <div className="flex-1 h-[3px] bg-gradient-to-r from-[#D1A14A] to-transparent"></div>
      </div>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {/* Web Development */}
        <div
          className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 shadow-md 
          transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-2 hover:shadow-neutral-800"
          data-aos="flip-left"
        >
          <div className="flex justify-center ">
            <FaLaptopCode className="text-7xl text-green-400 mb-4" />
          </div>
          <h2 className="text-2xl font-semibold mb-3">Web Development</h2>
          <p className="text-gray-300 leading-relaxed">
            I build responsive, fast and modern web applications using React.js,
            Next.js, Tailwind CSS and backend integrations.
          </p>
        </div>

        {/* Android Development */}
        <div
          className="bg-neutral-950 p-8 rounded-2xl border border-neutral-800 shadow-md 
           transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-2 hover:shadow-neutral-800"
          data-aos="flip-left"
        >
          <div className="flex justify-center">
            <FaAndroid className="text-7xl text-green-400 mb-4 shadow-2xl" />
          </div>
          <h2 className="text-2xl font-semibold mb-3 text-center">
            Android Development
          </h2>
          <p className="text-gray-300 leading-relaxed text-center">
            Native Android apps with smooth UI, performance & modern APIs.
          </p>
        </div>

        {/* iOS Development */}
        <div
          className="bg-neutral-950 p-8 rounded-2xl border border-neutral-800 shadow-md 
           transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-2 hover:shadow-neutral-800"
          data-aos="flip-right"
        >
          <div className="flex justify-center">
            <FaApple className="text-7xl text-green-400 mb-4" />
          </div>
          <h2 className="text-2xl font-semibold mb-3 text-center">
            iOS Development
          </h2>
          <p className="text-gray-300 leading-relaxed text-center">
            High-quality iOS apps with optimized performance & clean UI.
          </p>
        </div>

        {/* Cross Platform (Flutter) */}
        <div
          className="bg-neutral-950 p-8 rounded-2xl border border-neutral-800 shadow-md 
           transition-all duration-300 hover:shadow-lg hover:-translate-y-2 border-2 hover:shadow-neutral-800"
          data-aos="flip-right"
        >
          <div className="flex justify-center">
            <SiFlutter className="text-7xl text-green-400 mb-4" />
          </div>
          <h2 className="text-2xl font-semibold mb-3 text-center">
            Cross Platform
          </h2>
          <p className="text-gray-300 leading-relaxed text-center">
            Feature-rich Flutter apps for Android & iOS from a single codebase.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
