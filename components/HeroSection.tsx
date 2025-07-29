'use client'
import Image from "next/image"
import { useEffect, useState } from "react"

const HeroSection = () => {
    const [maskSize, setMaskSize] = useState('30%')

    useEffect(() => {
        const handleResize = () => {
        const width = window.innerWidth
        if (width < 768) {
            setMaskSize('50%') // mobile
        } else if (width < 1024) {
            setMaskSize('40%') // tablet
        } else {
            setMaskSize('25%') // desktop
        }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

  return (
    <main className="bg-[url('/assets/ramen-bg.jpg')] bg-cover bg-center w-full h-dvh flex items-center justify-center">
        {/* Background */}
        <div
            className="absolute w-full h-dvh"
            style={{
                background: 'linear-gradient(to bottom, rgba(19, 19, 19, 0.95), rgba(19, 19, 19, 0.95))',
            }}
        ></div>
        <div
            className="absolute inset-0 z-0 bg-[url('/assets/ramen-bg.jpg')] bg-cover bg-center pointer-events-none opacity-45"
            style={{
                WebkitMaskImage: "url('/assets/mirror.png')",
                maskImage: "url('/assets/mirror.png')",

                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',

                WebkitMaskPosition: 'center',
                maskPosition: 'center',

                WebkitMaskSize: maskSize,
                maskSize: maskSize,

                WebkitMaskComposite: "destination-out",
                maskComposite: "exclude",
                backgroundBlendMode: "normal",
                maskMode: "alpha",
            }}
        ></div>

        {/* Logo */}
        <div className="relative z-10 w-2/3 max-w-[600px] aspect-[3/1]">
            <Image
                src="/assets/ramenhouse-logo.png"
                alt="Ramenhouse Logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 80vw, 400px"
            />
        </div>
    </main>
  )
}

export default HeroSection
