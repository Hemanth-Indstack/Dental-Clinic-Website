export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] py-16">
      <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">

        {/* Logo / Name */}
        <h3 className="text-white text-2xl font-light">
          Dental Clinic
        </h3>

        {/* Description */}
        <p className="mt-4 max-w-xl mx-auto">
          Providing high-quality dental care with modern technology and
          experienced doctors.
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-gray-700 my-10" />

        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} Dental Clinic. All rights reserved.
        </p>

      </div>
    </footer>
  )
}
