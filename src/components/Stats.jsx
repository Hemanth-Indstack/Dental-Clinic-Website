import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import CountUp from "react-countup"
import { fadeUpSoft, staggerContainer } from "../animations/motionVariants"

const stats = [
  {
    number: 2500,
    label: "Happy Patients",
  },
  {
    number: 15,
    label: "Years of Experience",
  },
  {
    number: 12,
    label: "Qualified Doctors",
  },
  {
    number: 100,
    label: "Dental Treatments",
  },
]

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <section ref={ref} className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUpSoft}
            >
              <h3 className="text-5xl font-bold text-[#4c6edb]">
                {inView && (
                  <CountUp
                    end={item.number}
                    duration={2}
                    separator=","
                  />
                )}
                +
              </h3>

              <p className="mt-4 text-gray-600 font-medium">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
