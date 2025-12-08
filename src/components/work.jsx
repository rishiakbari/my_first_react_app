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
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const tutorials = [
  {
    title: "Doctor Dairy",
    btnText: "Doctor Dairy",
    img: "./doctordiary.png",
    description:
      "This project is a doctor diary app including video call and iOS in-app purchases.",
  },
  {
    title: "Atura Care",
    btnText: "Atura Care",
    img: "./aturacare.png",
    description:
      "Healthcare system app for managing schedules, calls, and patient data.",
  },
  {
    title: "Paintastica",
    btnText: "Paintastica",
    img: "./paintastica.png",
    description: "A creative painting app with AI-driven drawing tools.",
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
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4 z-50">
          <div className="relative bg-[#1c1c1c] p-6 rounded-2xl max-w-lg w-full border border-neutral-700">
            {/* Close Icon */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-gray-300 hover:text-white text-5xl"
            >
              &times;
            </button>

            {/* Title */}
            <h2 className="text-3xl font-bold text-[#D1A14A] mb-4">
              {selectedProject.title}
            </h2>

            {/* Image */}
            <img
              src={selectedProject.img}
              alt={selectedProject.title}
              className="rounded-xl mb-4"
            />

            {/* Description */}
            <p className="text-gray-300 leading-relaxed">
              {selectedProject.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

