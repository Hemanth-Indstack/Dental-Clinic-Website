import { motion } from "framer-motion"
import { fadeUpSoft } from "../animations/motionVariants"

export default function Hero() {
  return (
    <section className="pt-20"> {/* navbar offset */}

      <div className="grid md:grid-cols-2 min-h-[calc(100vh-80px)]">

        {/* LEFT IMAGE */}
        <motion.div
          variants={fadeUpSoft}
          initial="hidden"
          animate="visible"
          className="w-full h-full"
        >
          <img
            src="https://th.bing.com/th/id/R.760eef84eabfe8ddeed2a5955bcc2b68?rik=H%2faLTJ7eptsYTw&riu=http%3a%2f%2fminoamarketing.com%2fwp-content%2fuploads%2f2015%2f10%2fbigstock-Man-giving-thumbs-up-at-dentis-58722806.jpg&ehk=yECWKYOy1L79ynQLLcCmhp9Z06CMQdvLzf4rjBldZpU%3d&risl=&pid=ImgRaw&r=0"
            alt="Dental Clinic"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          variants={fadeUpSoft}
          initial="hidden"
          animate="visible"
          className="bg-[#eef2f3] flex items-center"
        >
          <div className="px-20">

            <p className="uppercase tracking-widest text-gray-600 text-sm">
              HIGHT-END DENTISTRY
            </p>

            <h1 className="mt-6 text-6xl font-bold text-gray-900 leading-tight">
              Welcome to <br /> Dental Clinic
            </h1>

            <p className="mt-6 text-gray-600">
              Image from <span className="underline">Freepik</span>
            </p>

            <button className="mt-10 bg-[#4c6edb] text-white px-12 py-4 tracking-wide">
              CONTACT US
            </button>

          </div>
        </motion.div>

      </div>
    </section>
  )
}
