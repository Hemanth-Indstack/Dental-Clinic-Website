import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { fadeLeft, fadeRight, fadeUpSoft } from "../animations/motionVariants"

export default function ImageText() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <section ref={ref} className="relative py-32 bg-[#f5f7fa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* IMAGE */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="md:w-2/3"
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1663088767412-b10c8dc27ad1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Dental"
            className="w-full h-[520px] object-cover"
          />
        </motion.div>

        {/* WHITE OVERLAY CARD */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="bg-white shadow-2xl p-14 md:w-[520px]
                     md:absolute md:right-6 md:top-1/2 md:-translate-y-1/2
                     mt-16 md:mt-0"
        >
          <motion.h2
            variants={fadeUpSoft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-4xl font-bold text-gray-900"
          >
            Yes, healthy and beautiful smile <br /> is possible for you
          </motion.h2>

          <motion.p
            variants={fadeUpSoft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.15 }}
            className="mt-6 text-gray-600 leading-relaxed"
          >
            Our clinic offers a full range of dental services using modern
            technology and advanced treatment methods.
          </motion.p>

          <motion.button
            variants={fadeUpSoft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.3 }}
            className="mt-8 bg-[#4c6edb] text-white px-10 py-4 tracking-wide"
          >
            READ MORE
          </motion.button>
        </motion.div>

      </div>
    </section>
  )
}
