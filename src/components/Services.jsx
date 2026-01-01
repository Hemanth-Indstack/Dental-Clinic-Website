import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  fadeUpSoft,
  staggerContainer,
  serviceItem,
} from "../animations/motionVariants"

const services = [
  {
    title: "DENTAL CARE",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
    icon: "🦷",
  },
  {
    title: "ORAL SURGERY",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
    icon: "✨",
  },
  {
    title: "IMPLANTS",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
    icon: "⚙️",
  },
  {
    title: "CROWNS",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
    icon: "👑",
  },
]

export default function Services() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <section
      ref={ref}
      id="services"                 // ✅ anchor target
      className="bg-[#4c6edb] py-28 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 text-center text-white">

        {/* Title */}
        <motion.h2
          variants={fadeUpSoft}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-5xl font-bold"
        >
          Our Services
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeUpSoft}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.15 }}
          className="mt-6 max-w-2xl mx-auto text-lg text-white/90"
        >
          Consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
        </motion.p>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-16"
        >
          {services.map((item, index) => (
            <motion.div
              key={index}
              variants={serviceItem}
              className="text-center"
            >
              {/* Icon */}
              <div className="mx-auto w-24 h-24 rounded-full border-2 border-white flex items-center justify-center text-4xl mb-8">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold tracking-wide">
                {item.title}
              </h3>

              <p className="mt-6 text-white/90 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
