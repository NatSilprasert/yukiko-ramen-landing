import Image from "next/image"

const HeroSection = () => {
  return (
    <main className="bg-[url('/assets/ramen-bg.jpg')] bg-cover bg-center w-full h-dvh flex items-center justify-center">
        {/* Background */}
        <div className="absolute w-full h-dvh bg-primary/97"></div>
        <div
            className="absolute inset-0 z-0 bg-[url('/assets/ramen-bg.jpg')] bg-cover bg-center pointer-events-none opacity-50"
            style={{
                WebkitMaskImage: "url('/assets/mirror.png')",
                maskImage: "url('/assets/mirror.png')",

                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',

                WebkitMaskPosition: 'center',
                maskPosition: 'center',

                WebkitMaskSize: '28%',
                maskSize: '28%',

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
