
// const Footer = () => {

//  return (
//     <>    
//     </>
//  )
// }




import React from "react";

// UI Reference: https://tailwindui.com/components/marketing/sections/footers
const data = [
  { title: "Solutions", list: ["Marketing", "Analytics", "Commerce", "Insights"] },
  { title: "Support", list: ["Pricing", "Documentation", "Guides", "API Status"] },
  { title: "Company", list: ["About", "Blog", "Jobs", "Press", "Partners"] },
  { title: "Legal", list: ["Claim", "Privacy", "Terms of Use"] },
];

const Footer = ({ theme = "dark" }) => {
  return (
    <>
      <div
        className={`w-screen px-4 pt-8 md:pt-28 text-xs sm:text-sm
      ${theme === "dark" ? "bg-gray-900 text-gray-400" : "bg-gray-100 text-gray-600"}
      `}
      >
        <div className="flex flex-col md:flex-row gap-8 sm:gap-20 ml-6 mr-12">
          <div className="self-center">
            <div className="mb-2 md:mb-6">
              Making the world a better place through constructing elegant hierachies.
            </div>

            <div className="flex gap-4 text-sm sm:text-lg">
              <span>
                <i className="fa-brands fa-facebook"></i>
              </span>
              <span>
                <i className="fa-brands fa-twitter"></i>
              </span>
              <span>
                <i className="fa-brands fa-github"></i>
              </span>
              <span>
                <i className="fa-brands fa-youtube"></i>
              </span>
              <span>
                <i className="fa-brands fa-instagram"></i>
              </span>
            </div>
          </div>

          <div className="mx-auto flex flex-row gap-6 md:gap-12 flex-wrap sm:flex-nowrap">
            {data.map(({ title, list }, idx) => (
              <div key={idx}>
                <h5
                  className={`font-semibold mb-2 sm:mb-8
                  ${theme === "dark" ? "text-gray-300" : "text-gray-900"} `}
                >
                  {title}
                </h5>
                <ul className="flex flex-col gap-3 sm:gap-5">
                  {list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mt-8 sm:mt-16 border-t py-7 text-gray-500 text-xs
          ${theme === "dark" ? "border-t-gray-800" : "border-t-gray-300"} `}
        >
          &copy; 2020 Your Company, Inc. All rights reserved
        </div>
      </div>
    </>
  );
};

export default Footer;




//<>
// <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"/>

// <footer className="relative bg-blueGray-200 pt-8 pb-6">
//   <div className="container mx-auto px-4">
//     <div className="flex flex-wrap text-left lg:text-left">
//       <div className="w-full lg:w-6/12 px-4">
//         <h4 className="text-3xl fonat-semibold text-blueGray-700">Thank you for visiting Tiny Wear!</h4>
    
//         <div className="mt-6 lg:mb-0 mb-6">
//         <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
// <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
// <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipule="evenodd"/>
// </svg>
// Jane Adams
// </button>
// <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
// <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
// <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipule="evenodd"/>
// </svg>
// Rajvir Chaggar
// </button>
// <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
// <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
// <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipule="evenodd"/>
// </svg>
// Christa Lococo
// </button>
// <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
// <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
// <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipule="evenodd"/>
// </svg>
// Shawn Dreifuss
// </button>
//         </div>
//       </div>
//       <div className="w-full lg:w-6/12 px-4">
//         <div className="flex flex-wrap items-top mb-6">
//           <div className="w-full lg:w-4/12 px-4 ml-auto">
//             <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Project Link</span>
//             <ul className="list-unstyled">
//               <li>
//                 <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Github</a>
//               </li>
             
//             </ul>
//           </div>
//           <div className="w-full lg:w-4/12 px-4">
//             <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Creator Githubs</span>
//             <ul className="list-unstyled">
//               <li>
//                 <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/janealexadams">Jane Adams</a>
//               </li>
//               <li>
//                 <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/Chaggar25">Rajvir Chaggar</a>
//               </li>
//               <li>
//                 <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/bellaloc">Christa Lococo</a>
//               </li>
//               <li>
//                 <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/shawndreifuss">Shawn Dreifuss</a>
//               </li>
              
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//     <hr className="my-6 border-blueGray-300"/>
//     <div className="flex flex-wrap items-center md:justify-between justify-center">
//       <div className="w-full md:w-4/12 px-4 mx-auto text-center">
       
//       </div>
//     </div>
//   </div>
// </footer>
// </>
// )}
