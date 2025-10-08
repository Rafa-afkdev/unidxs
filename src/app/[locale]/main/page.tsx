"use client"
import Image from 'next/image'
import React, { useState } from 'react'

export default function Main() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 z-0">
  <Image
    src="/Fondo.webp"
    alt="Fondo desenfocado"
    fill
    className="object-cover object-[50%] blur-xs scale-100"
    priority
    quality={85}
    sizes="100vw"
    style={{
      filter: 'brightness(0.7)'
    }}
  />
  <div className="absolute inset-0 bg-black/60"></div>
</div>
</div>
  )
}
