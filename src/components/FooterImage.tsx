import React from 'react'

const FooterImage = () => {
  return (
    <div>

<div className="relative text-center">
  {/* Main Text */}
  <span
    className="block text-6xl font-extrabold text-transparent bg-gradient-to-b from-gray-500 to-gray-800 bg-clip-text shadow-lg"
  >
    CYBERPOSTURE
  </span>

  {/* Reflected Text */}
  <span
    className="absolute top-full left-0 right-0 text-6xl font-extrabold text-gray-500 opacity-10 scale-y-[-1]"
  >
    CYBERPOSTURE
  </span>
</div>

    </div>
  )
}

export default FooterImage