import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { fadeUpSoft } from "../animations/motionVariants"

export default function CTA() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <section ref={ref} className="bg-[#4c6edb] py-28">
      <div className="max-w-4xl mx-auto px-6 text-center text-white">

        <motion.h2
          variants={fadeUpSoft}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-5xl font-bold"
        >
          We’re ready to give you a healthy smile
        </motion.h2>

        <motion.p
          variants={fadeUpSoft}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.15 }}
          className="mt-6 text-lg text-white/90"
        >
          Book your appointment today and experience professional dental care.
        </motion.p>

        <motion.button
          variants={fadeUpSoft}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
          className="mt-10 bg-white text-[#4c6edb] px-12 py-4 font-semibold tracking-wide hover:bg-gray-100 transition"
        >
          CONTACT US
        </motion.button>

      </div>
    </section>
  )
}
