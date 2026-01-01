import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Services from "../components/Services"
import ImageText from "../components/ImageText"
import Stats from "../components/Stats"
import Team from "../components/Team"
import CTA from "../components/CTA"
import Appointment from "../components/Appointment"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <ImageText />
      <Stats />
      <Team />
      <CTA />
      <Appointment />   {/* ✅ APPOINTMENT BEFORE FOOTER */}
      <Footer />        {/* ✅ FOOTER ALWAYS LAST */}
    </>
  )
}
