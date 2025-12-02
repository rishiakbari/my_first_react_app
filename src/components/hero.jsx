import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home"
    className="pt-24 h-[calc(100vh-96px)] flex items-center justify-between">
      {/* LEFT SIDE — TEXT */}
      <div className="flex flex-col space-y-0">
        <h1 className="text-6xl font-bold text-white ml-0 leading-tight animate-slide-left animate-delay-0">
          I'm Rishi Akbari
        </h1>

        <h1 className="text-5xl font-semibold text-white ml-0 leading-tight animate-slide-left animate-delay- 1">
          Flutter <span className="text-gradient">Developer</span>
        </h1>

        <p className="text-gray-300 mt-2 leading-relaxed animate-slide-left animate-delay-1x`x ">
          I'm capable of creating excellent mobile apps, handling every step
          from concept to deployment.
        </p>

        {/* ⭐ SOCIAL ICON BUTTONS ⭐ */}
        <div className="flex gap-4 mt-5 animate-slide-left animate-delay-0">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rishi-akbari-584a40222"
            target="_blank"
            className="relative w-12 h-12 flex items-center justify-center 
               rounded-full bg-[#1e1e2f] transition-all duration-300 
               shadow-xl group hover:scale-110"
          >
            <span
              className="absolute inset-0 rounded-full opacity-0 
                     bg-gradient-to-r from-[#990033] to-[#0099ff]
                 group-hover:opacity-100 transition-opacity duration-300"
            ></span>

            <FaLinkedin
              className="text-white text-2xl relative z-10
                 transition-colors duration-300 
                 group-hover:text-black"
            />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/rishiakbari"
            target="_blank"
            className="relative w-12 h-12 flex items-center justify-center 
               rounded-full bg-[#1e1e2f] transition-all duration-300 
               shadow-xl group hover:scale-110"
          >
            <span
              className="absolute inset-0 rounded-full opacity-0 
                     bg-gradient-to-r from-[#990033] to-[#0099ff]
                     group-hover:opacity-100 transition-opacity duration-300"
            ></span>

            <FaGithub
              className="text-white text-2xl relative z-10 
                         transition-colors duration-300 
                         group-hover:text-black"
            />
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/AkbariRishi"
            target="_blank"
            className="relative w-12 h-12 flex items-center justify-center 
               rounded-full bg-[#1e1e2f] transition-all duration-300 
               shadow-xl group hover:scale-110"
          >
            <span
              className="absolute inset-0 rounded-full opacity-0 
                     bg-gradient-to-r from-[#990033] to-[#0099ff]
                     group-hover:opacity-100 transition-opacity duration-300"
            ></span>

            <FaTwitter
              className="text-white text-2xl relative z-10 
                          transition-colors duration-300 
                          group-hover:text-black"
            />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/rishii_akbari"
            target="_blank"
            className="relative w-12 h-12 flex items-center justify-center 
               rounded-full bg-[#1e1e2f] transition-all duration-300 
               shadow-xl group hover:scale-110"
          >
            <span
              className="absolute inset-0 rounded-full opacity-0 
                     bg-gradient-to-r from-[#990033] to-[#0099ff]
                     group-hover:opacity-100 transition-opacity duration-300"
            ></span>

            <FaInstagram
              className="text-white text-2xl relative z-10 
                            transition-colors duration-300 
                            group-hover:text-black"
            />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/RishiPatel"
            target="_blank"
            className="relative w-12 h-12 flex items-center justify-center 
               rounded-full bg-[#1e1e2f] transition-all duration-300 
               shadow-xl group hover:scale-110"
          >
            <span
              className="absolute inset-0 rounded-full opacity-0 
                     bg-gradient-to-r from-[#990033] to-[#0099ff]
                     group-hover:opacity-100 transition-opacity duration-300"
            ></span>

            <FaFacebook
              className="text-white text-2xl relative z-10 
                          transition-colors duration-300 
                          group-hover:text-black"
            />
          </a>
        </div>
        {/* ⭐ DOWNLOAD CV BUTTON ⭐ */}
        <div className="download-btn-container mt-6 animate-slide-left animate-delay-4">
          <a
            href="/Rishi_Akbari-CV.pdf"
            download
            className="download-btn flex items-center justify-center"
          >
            <span className="font-bold">Download CV</span>

            <svg width="180px" height="60px" viewBox="0 0 180 60">
              <polyline points="179,1 179,59 1,59 1,1 179,1"></polyline>
            </svg>
          </a>
        </div>
      </div>

      {/* RIGHT SIDE — IMAGE */}
      <div className="w-[250px] h-[310px] p-1 rounded-xl bg-gradient-to-r from-[#DF8908] to-[#B415FF] shadow-[0_0_30px_rgba(223,137,8,0.7)] flex items-center justify-center opacity-95 image-slide-right animate-pulse">
        <div className="w-[250px] h-[300px] bg-[#030014] rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(0,0,0,0.7)] ">
          <img
            src="/hero.png"
            alt="Hero"
            className="w-[250px] h-[300px] object-cover rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.5) ]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
