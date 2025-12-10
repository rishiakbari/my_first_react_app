// import { FaArrowUpRightFromSquare } from "react-icons/fa6";

// const tutorials = [
//   {
//     title: "Doctor Dairy",
//     btnText: "Doctor Dairy",
//     img: "./doctordiary.png",

//   },
//   {
//     title: "Atura Care",
//     btnText: "Atura Care",
//     img: "./aturacare.png",
//   },
//   {
//     title: "Paintastica",
//     btnText: "Paintastica",
//     img: "./paintastica.png",
//   },

// ];

// export default function Work() {
//   return (
//     <div>
//       <div className="flex items-center gap-4 mb-20 mt-16">
//         <div className="flex-1 h-[3px] bg-[#D1A14A] rounded-full"></div>

//         <h1 className="text-5xl font-bold text-gradient">My Recent Work</h1>

//         <div className="flex-1 h-[3px] bg-gradient-to-r from-[#D1A14A] to-transparent"></div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-3 p-0"
//       data-aos="zoom-out-up"
//       >
//         {tutorials.map((item, index) => (
//           <div
//             key={index}
//             className={`rounded-2xl overflow-hidden border border-neutral-800 hover: shadow-neutral-800 transition-all ease-in-out
//           hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-[#1c1c1c]`}
//           >
//             {/* Banner Image */}
//             <div className="relative h-60 w-full">
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 className="h-full w-full object-cover transition duration-300 absolute inset-0 shadow-[0_8px_16px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_16px_rgba(255,255,255,0.1)]"
//               />
//             </div>

//             {/* Content Section */}
//             <div className=" p-4 flex justify-between items-center ">
//               <div>
//                 <h3 className="text-xl  text-white leading-tight items-start">
//                   {item.btnText}
//                 </h3>
//               </div>
//               <h3 className="text-blue-600 dark:text-blue-400">Read more {">"}</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
// import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const tutorials = [
  {
    title: "Doctor Dairy",
    btnText: "Doctor Dairy",
    img: "./doctordiary.png",
    heading: "About This Doctor Diary",
    gallery: [
      "/dd/d1.png",
      "/dd/d2.png",
      "/dd/d3.png",
      "/dd/d4.png",
      "/dd/d5.png",
      "/dd/d6.png",
      "/dd/d7.png",
      "/dd/d8.png",
    ],
    longDescription:
      "Manage your patient's medical and health records and visit notes the easy way. Using Doctor Diary, you can manage all your patient records such as personal information, medical reports, medication, clinical notes, patient history, and other notes. Keep record of patient payments and add prescriptions to their treatment. This app is useful for medical and health professionals who visit patients frequently and need a reliable way to keep track of medical records. It is a handy app you can bring along whenever you perform your medical practice. Every step is given in order, making it easy not to miss important details during history taking and examination.",
    shortDes:
      "Above all, you can save all your clinical data in a secure database. If your device is broken or lost, you don’t need to start from scratch. All your clinical data can be stored in a secure database that you only can access it after login into the app.",
    keyFeature: [
      "Simple, intuitive and easy to use.",
      "Customize the patient information",
      "View patient visit / medical history",
      "Built-in powerful tool to help manage reusable notes",
      "Backup and restore data",
      "categorized patient treatment level",
      "Different count for paid and unpaid patient",
      "Monthly and Daily Report",
      "Access all your clinical data from any Android device",
    ],
    des: [
      "For doctor, dentist, nurse, surgeon, pediatrician, dermatologist, eye care clinic, paramedic, physician, small clinics, medical students, etc.",

      "We hope you find this app useful and we welcome your suggestions. We will add more cool features as we go along. So stay tuned!",
    ],
    playStore:
      "https://play.google.com/store/apps/details?id=com.arkinfosoft.mediplus",
    appStore:
      "https://play.google.com/appstore/apps/details?id=com.arkinfosoft.mediplus",
  },
  {
    title: "Atura Care",
    btnText: "Atura Care",
    heading: "About This Atura Care",
    img: "./aturacare.png",
    gallery: [
      "/dd/a1.png",
      "/dd/a2.png",
      "/dd/a3.png",
      "/dd/a4.png",
      "/dd/a5.png",
      "/dd/a6.png",
    ],
    keyFeature: [
      "🔍 Treatment and Prescription Management: Access your treatments & prescriptions anytime anywhere with ease.",
      "📅 Appointment Booking: Schedule appointments with your healthcare providers effortlessly. Choose the time that works for you and receive reminders to stay on schedule and access your medical records anytime, anywhere.",
      "📋 Health Tracker: Access a centralized hub for all your health information. From treatment plans to medical history, everything is at your fingertips.",
      "🔒 Secure and Confidential: Rest easy knowing that your health data is secure. We prioritize the confidentiality of your medical information, providing you with a safe space to manage your health.",
      "🚀 User-Friendly Interface: Navigate the app with ease. Our intuitive design makes it simple for users of all ages to manage their health effectively.",
    ],
    longDescription:
      "Introducing Atura Care, your one-stop solution for seamlessly managing your treatments and prescriptions, and scheduling appointments with your doctor. Stay on top of your well-being with user-friendly features designed to simplify your healthcare journey. Download now and prioritize your health with ease!",
    des: [
      "Join the thousands who have already taken charge of their health with our app. Download now and experience the convenience of streamlined healthcare management. Your well-being, your way!",
    ],
    playStore:
      "https://play.google.com/store/apps/details?id=com.arkinfosoft.aturacare",
    appStore:
      "https://play.google.com/store/apps/details?id=com.arkinfosoft.aturacare",
  },
  {
    title: "Paintastica",
    btnText: "Paintastica",
    heading: "About This Paintastica",
    img: "./paintastica.png",
    gallery: ["/dd/p1.png", "/dd/p2.png", "/dd/p3.png"],
    keyFeature: [
      "🎨 Calligraphy Workshops – Learn elegant writing styles and lettering techniques.",
      "☕ Coffee Painting – Create beautiful artwork using coffee as a medium.",
      "🖼️ Canvas Painting – Master brush techniques and explore various painting styles.",
      "🍫 Chocolate Making – Hands-on sessions on crafting delicious homemade chocolates.",
      "🎂 Cake Baking & Decoration – Learn baking basics, frosting techniques, and creative cake designs.",
      "✂️ Creative Craft Sessions – Includes card-making, scrapbooking, explosion boxes, and more.",
      "🕯️ Candle Making – Design aromatic and decorative candles in different styles.",
      "✏️ Drawing Classes – Starting after Diwali, covering fundamentals to advanced sketching.",
      "📰 Decoupage Art – Learn to decorate surfaces using paper cutouts and layering techniques.",
      "🌸 Flower Making – Craft realistic flowers using different materials.",
      "👕 Fabric Painting – Explore fabric-based artwork with traditional and modern techniques.",
      "🪟 Glass Painting – Transparent and stained-glass style painting sessions.",
      "🔪 Knife Painting – Create textured artwork using palette knife techniques.",
    ],
    longDescription:
      "Let Paintastica helps you to enhance artist in you We offer personalized basic to advance level workshops under one platform for all age group.",
    des: [
      "Paintastica is an online learning community with thousands of classes for creative and curious people, on topics . On Paintastica, members come together to find inspiration and take the next step in their creative journey.",
    ],
    shortDes:
      "We offer personalised lessons powered by Paintastica, aimed at kids and adult too. With our cross curricular approach, we ensure your child gets the best.",
    playStore:
      "https://play.google.com/store/apps/details?id=com.art.paintastica",
    appStore:
      "https://play.google.com/store/apps/details?id=com.arkinfosoft.aturacare",
  },
];

export default function Work() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div>
      {/* Heading */}
      <div className="flex items-center gap-4 mb-20 mt-16">
        <div className="flex-1 h-[3px] bg-[#D1A14A] rounded-full"></div>
        <h1 className="text-5xl font-bold text-gradient">My Recent Work</h1>
        <div className="flex-1 h-[3px] bg-gradient-to-r from-[#D1A14A] to-transparent"></div>
      </div>

      {/* Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-0"
        data-aos="zoom-out-up"
      >
        {tutorials.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden border border-neutral-800 transition-all ease-in-out hover:shadow-2xl hover:-translate-y-2 bg-[#1c1c1c]"
          >
            {/* Banner Image */}
            <div className="relative h-60 w-full">
              <img
                src={item.img}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-4 flex justify-between items-center">
              <h3 className="text-xl text-white">{item.btnText}</h3>

              <button
                onClick={() => setSelectedProject(item)}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Read more {">"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ===== Project Modal / Details Box ===== */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center p-4 z-50">
          <div
            className="relative bg-[#1a1a1a] p-10 rounded-3xl max-w-4xl w-full 
                    text-white shadow-2xl max-h-[90vh] overflow-y-auto scrollbar-hide"
          >
            {/* Close Icon */}
            {/* <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-gray-300 hover:text-white text-5xl"
            >
              &times;
            </button> */}
            <button
              onClick={() => setSelectedProject(null)}
              className="fixed top-6 right-6 bg-white/20 hover:bg-white/30 
             text-white rounded-full w-10 p-2 text-1xl z-[9999]"
            >
              ✕
            </button>

            {/* <h4 className="text-gray-300 mb-2 text-lg">
              {selectedProject.title}
            </h4> */}

            {/* Title */}
            <h2 className="text-gray-300 mb-2 text-4xl mb-4 ">
              {selectedProject.heading}
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl text-left mb-5">
              {selectedProject.longDescription}
            </p>
            {/* Image */}
            <div className="grid grid-cols-1 sm:grid-cols-8 gap-1 mb-4">
              {selectedProject.gallery?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${selectedProject.title} image ${index + 1}`}
                  className="rounded-xl w-full h-52"
                />
              ))}
            </div>
            {/* Description */}
            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl text-left mb-5">
              {selectedProject.shortDes}
            </p>

            <h3 className="text-lg leading-relaxed max-w-3xl text-left mb-4 font-bold text-white">
              Key Features
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              {selectedProject.keyFeature?.map((feature, index) => (
                <li
                  key={index}
                  className="text-lg leading-relaxed max-w-3xl text-left"
                >
                  {feature}
                </li>
              ))}
            </ul>
            <div className="space-y-3 mt-5">
              {selectedProject.des?.map((item, index) => (
                <p
                  key={index}
                  className="text-lg text-gray-400 leading-relaxed max-w-3xl text-left"
                >
                  {item}
                </p>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-5">
              {/* Play Store Button */}
              {selectedProject.playStore && (
                <a href={selectedProject.playStore} target="_blank">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                    className="h-13"
                  />
                </a>
              )}

              {/* App Store Button */}
              {selectedProject.appStore && (
                <a
                  href={selectedProject.appStore}
                  target="_blank"
                  //   className="flex items-center bg-white/10 hover:bg-white/20 backdrop-blur-md
                  //  border border-white/20 rounded-xl px-4 py-2 transition"
                >
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="App Store"
                    className="h-13"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
