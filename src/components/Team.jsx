import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { fadeUpSoft, staggerContainer } from "../animations/motionVariants"

const team = [
  {
    name: "Dr. John Smith",
    role: "Dentist",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1170&auto=format&fit=crop",
  },
  {
    name: "Dr. Anna Brown",
    role: "Senior Dentist",
    image:
      "https://images.unsplash.com/photo-1667133295308-9ef24f71952e?q=80&w=757&auto=format&fit=crop",
  },
  {
    name: "Dr. Robert Lee",
    role: "Dental Surgeon",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800",
  },
]

export default function Team() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  })

  return (
    <section
      ref={ref}
      id="team"                 // ✅ REQUIRED for navbar scroll
      className="py-28 bg-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          variants={fadeUpSoft}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-5xl font-bold text-center text-gray-900"
        >
          Our Team
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeUpSoft}
              className="group"
            >
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="mt-2 text-gray-500">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
