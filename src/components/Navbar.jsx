import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleClick = () => setOpen(false)

  return (
    <>
      {/* TOP NAVBAR */}
      <header className="w-full bg-[#14213d] fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-white text-2xl font-light">logo</div>

          {/* Hamburger */}
          <div
            onClick={() => setOpen(true)}
            className="space-y-1 cursor-pointer"
          >
            <span className="block w-7 h-[2px] bg-white"></span>
            <span className="block w-7 h-[2px] bg-white"></span>
            <span className="block w-7 h-[2px] bg-white"></span>
          </div>
        </div>
      </header>

      {/* OVERLAY MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* LEFT PANEL */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-72 bg-black text-white p-8 relative"
            >
              {/* Close */}
              <button
                onClick={handleClick}
                className="absolute top-6 right-6 text-3xl hover:text-blue-400 transition"
              >
                &times;
              </button>

              {/* MENU LINKS */}
              <nav className="mt-20 space-y-6 text-lg font-light">
                <a
                  href="#"
                  onClick={handleClick}
                  className="block transition-colors duration-300 hover:text-blue-400"
                >
                  Home
                </a>

                <a
                  href="#services"
                  onClick={handleClick}
                  className="block transition-colors duration-300 hover:text-blue-400"
                >
                  Services
                </a>

                <a
                  href="#team"
                  onClick={handleClick}
                  className="block transition-colors duration-300 hover:text-blue-400"
                >
                  Team
                </a>

                <a
                  href="#appointment"
                  onClick={handleClick}
                  className="block transition-colors duration-300 hover:text-blue-400"
                >
                  Book Appointment
                </a>
              </nav>
            </motion.div>

            {/* BACKDROP */}
            <motion.div
              onClick={handleClick}
              className="flex-1 bg-black/60"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
