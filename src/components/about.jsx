const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen pt-28 px-10 text-white flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl font-bold mb-5 text-gradient">About Me</h1>

      <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
        I am a dedicated{" "}
        <span className="text-[#D1A14A] font-semibold">Flutter Developer </span>
        with{" "}
        <span className="text-[#D1A14A] font-semibold">
          2 years of experience
        </span>{" "}
        in building high-quality and performance-driven mobile applications. I
        specialize in creating smooth, visually appealing, and scalable
        cross-platform apps for both Android and iOS.
        <br />
        <br />
        Over the past two years, I have developed and maintained several
        end-to-end applications, handling UI/UX design, API integration, state
        management, performance optimization, and deployment. I have hands-on
        experience with
        <span className="text-[#D1A14A] font-semibold">
          {" "}
          GetX, Provider, Riverpod, Firebase, REST APIs, Agora (Video Call), and
          In-App Purchases
        </span>
        .
        <br />
        <br />I enjoy solving complex problems, writing clean code, and
        continuously learning new technologies to deliver smooth and impactful
        mobile experiences.
      </p>

      {/* <div className="mt-8 grid grid-cols-2 gap-4 max-w-lg">
        <p className="text-gray-300">✔️ Cross-platform app development</p>
        <p className="text-gray-300">✔️ GetX, Provider, Riverpod</p>
        <p className="text-gray-300">✔️ Firebase & REST APIs</p>
        <p className="text-gray-300">✔️ Agora video calling</p>
        <p className="text-gray-300">✔️ In-App Purchases</p>
        <p className="text-gray-300">✔️ Store deployment</p>
      </div> */}
    </section>
  );
};

export default About;
