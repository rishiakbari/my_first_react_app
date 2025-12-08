import { FaAward } from "react-icons/fa";

const About = () => {
  return (
    <section className="min-h-screen text-white px-10 py-20">
      {/* TITLE + DIVIDER */}
      <div className="flex items-center gap-4 mb-10" data-aos="fade-down">
        <div className="w-16 h-[3px] bg-[#D1A14A] rounded-full"></div>

        <h1 className="text-5xl font-bold text-gradient whitespace-nowrap">
          About Me
        </h1>

        <div className="flex-1 h-[3px] bg-gradient-to-r from-[#D1A14A] to-transparent"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center leading-tight gap-20">
        <div className="md:w-1/2 flex justify-center" data-aos="fade-right">
          <img
            src="/profile.jpg"
            alt="About"
            className="w-[350px] h-[380px] rounded-xl shadow-[0_0_25px_rgba(209,161,74,0.3)] object-cover"
          />
        </div>
        <p
          className="text-lg text-gray-300 leading-relaxed max-w-3xl text-left"
          data-aos="fade-left"
        >
          I am a dedicated{" "}
          <span className="bg-gradient-to-r from-[#ff66cc] to-[#666699] bg-clip-text text-transparent font-semibold">
            Flutter Developer{" "}
          </span>
          with{" "}
          <span className="bg-gradient-to-r from-[#ff66cc] to-[#666699] bg-clip-text text-transparent font-semibold">
            2+ years of experience{" "}
          </span>
          in building high-quality and performance-driven mobile applications. I
          specialize in creating smooth, visually appealing, and scalable
          cross-platform apps for both Android and iOS.
          <br />
          <br />
          Over the past two years, I have developed and maintained several
          end-to-end applications, handling UI/UX design, API integration, state
          management, performance optimization, and deployment. I have hands-on
          experience with
          <span className="bg-gradient-to-r from-[#ff66cc] to-[#666699] bg-clip-text text-transparent font-semibold">
            {" "}
            GetX, BLoc, Firebase, REST APIs, debugging, Agora (Video Call), and
            Third-party APIs
          </span>
          .
          <br />
          <br />I enjoy solving complex problems, writing clean code, and
          continuously learning new technologies to deliver smooth and impactful
          mobile experiences.
        </p>
      </div>
      {/* EDUCATION + EXPERIENCE */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* EDUCATION */}
        <div
          className="bg-black p-8 rounded-xl shadow-lg border border-neutral-800 hover:shadow-2xl transition-all duration-300 shadow-neutral-800 ease-in-out"
          data-aos="zoom-out-down"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#ff66cc] to-[#666699] bg-clip-text text-transparent mb-4">
            Education
          </h2>

          <ul className="space-y-4 text-gray-300">
            <li>
              🎓 <span className="font-bold">Bachelor of Computer Science</span>
              <br />
              <span className="text-gray-100">
                MBIT College - CVM University / 2020 – 2024
              </span>
            </li>
            <li>
              <span className="font-semibold flex items-center justify-center gap-2">
                <FaAward className="text-[#D1A14A]" />
                Self-Learning & Certification
              </span>
              <span className="text-gray-100">
                GUJ-SSIP Hackathon, CVM University Hackathon
              </span>
            </li>
          </ul>
        </div>

        {/* EXPERIENCE */}
        <div
          className="bg-black p-8 rounded-xl shadow-lg border border-neutral-800 hover:shadow-2xl transition-all duration-300 shadow-neutral-800 ease-in-out"
          data-aos="zoom-out-down"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#ff66cc] to-[#666699] bg-clip-text text-transparent mb-4">
            Experience
          </h2>

          <ul className="space-y-4 text-gray-300">
            <li>
              🧑‍💻{" "}
              <span className="font-semibold">
                Flutter Developer — 2+ Years
              </span>
              <br />
              <span className="text-gray-100">
                PIARK Infosoft Pvt ltd - Ahmedabad
              </span>
            </li>

            <li>
              📱 Developed end-to-end apps:
              <br />
              <span className="text-gray-100">
                Doctor Diary, Atura-Care, Paintastica, NPC and NFC
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
