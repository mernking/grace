// "use client";
// import React, { useState } from "react";
// import Link from "next/link";

// export default function Navbar() {
//   const [open, setopen] = useState(false);

//   function handleMenu() {
//     setopen(!open);
//   }
//   return (
//     <section className="w-full flex justify-center items-center">
//       <div className="max-w-[1200px] w-full">
//         <div className="desktop bg-black w-full justify-between items-center px-3 py-4 flex">
//           <div className="logo text-2xl font-bold w-1/2">
//             <Link href="/">
//               <h1>Boundless Bolt</h1>
//             </Link>
//           </div>
//           <div className="navbarsection hidden sm:flex items-center justify-between w-1/2">
//             <Link href="/#">Home</Link>
//             <Link href="/#portfolio">Projects</Link>
//             <Link href="/#service">Service</Link>
//             <Link href="/#skill">Skills</Link>
//           </div>
//           <div className="sm:hidden">
//             <button onClick={handleMenu}>menu</button>
//           </div>
//         </div>
//         <div className="mobile absolute w-full max-w-[1200px] bg-black py-3">
//           {open ? (
//             <div
//               onClick={handleMenu}
//               className="w-full p-2 h-fit flex flex-col gap-2 sm:hidden items-center justify-between"
//             >
//               <Link
//                 className="w-full border rounded-md text-center bg-white/5 hover:bg-white hover:text-black/50"
//                 href="/#"
//               >
//                 Home
//               </Link>
//               <Link
//                 className="w-full border rounded-md text-center bg-white/5 hover:bg-white hover:text-black/50"
//                 href="/#portfolio"
//               >
//                 Projects
//               </Link>
//               <Link
//                 className="w-full border rounded-md text-center bg-white/5 hover:bg-white hover:text-black/50"
//                 href="/#service"
//               >
//                 Service
//               </Link>
//               <Link
//                 className="w-full border rounded-md text-center bg-white/5 hover:bg-white hover:text-black/50"
//                 href="/#skill"
//               >
//                 Skills
//               </Link>
//             </div>
//           ) : (
//             ""
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function handleMenu() {
    setOpen(!open);
  }

  return (
    <section className="w-full flex justify-center items-center relative z-50">
      <div className="max-w-[1200px] w-full">
        {/* Desktop Navbar */}
        <div className="desktop bg-black w-full justify-between items-center px-3 py-4 flex">
          <div className="logo text-2xl font-bold w-1/2">
            <Link href="/">
              <h1>Boundless Bolt</h1>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="navbarsection hidden sm:flex items-center justify-between w-1/2 text-white">
            <Link href="/#">Home</Link>
            <Link href="/#portfolio">Projects</Link>
            <Link href="/#service">Service</Link>
            <Link href="/#skill">Skills</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={handleMenu}
              className="text-white border px-3 py-1 rounded-md"
            >
              {open ? "close" : "menu"}
            </button>
          </div>
        </div>

        {/* Animated Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute w-full max-w-[1200px] bg-black py-3 sm:hidden flex flex-col gap-2 items-center justify-between"
            >
              {["Home", "Projects", "Service", "Skills"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  onClick={handleMenu}
                  className="w-full px-3"
                >
                  <Link
                    href={`/#${
                      item.toLowerCase() === "home" ? "" : item.toLowerCase()
                    }`}
                    className="block w-full border rounded-md text-center text-white bg-white/5 hover:bg-white hover:text-black/50 py-2 transition-all"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
