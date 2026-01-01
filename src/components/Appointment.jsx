import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { fadeUpSoft } from "../animations/motionVariants"

export default function Appointment() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <section
      ref={ref}
      id="appointment"
      className="py-28 bg-[#f5f7fa] scroll-mt-20"
    >
      <div className="max-w-3xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          variants={fadeUpSoft}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-5xl font-bold text-center text-gray-900"
        >
          Book an Appointment
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeUpSoft}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.15 }}
          className="mt-6 text-center text-gray-600"
        >
          Fill in the form below and we’ll contact you shortly.
        </motion.p>

        {/* Form */}
        <motion.form
          variants={fadeUpSoft}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-white p-10 shadow-lg"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Full Name"
              className="border px-4 py-3 w-full focus:outline-none focus:border-[#4c6edb]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border px-4 py-3 w-full focus:outline-none focus:border-[#4c6edb]"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="border px-4 py-3 w-full focus:outline-none focus:border-[#4c6edb]"
            />

            <input
              type="date"
              className="border px-4 py-3 w-full focus:outline-none focus:border-[#4c6edb]"
            />
          </div>

          <textarea
            placeholder="Message"
            rows="4"
            className="border px-4 py-3 w-full mt-6 focus:outline-none focus:border-[#4c6edb]"
          />

          <button
            type="submit"
            className="mt-8 bg-[#4c6edb] text-white px-10 py-4 tracking-wide hover:bg-[#3b5fc7] transition"
          >
            SUBMIT APPOINTMENT
          </button>
        </motion.form>

      </div>
    </section>
  )
}
