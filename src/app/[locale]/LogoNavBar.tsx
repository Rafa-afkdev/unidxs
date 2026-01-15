"use client";

import Image from "next/image";

export function LogoNavBar() {
  return (
    <div className="flex items-center justify-center">
      <Image 
        src="/Logo.png" 
        alt="UNIDXS Logo" 
        width={150} 
        height={70}
        priority
        className="object-contain"
        style={{ width: 'auto', height: 'auto', maxHeight: '60px' }}
      />
    </div>
  )
}