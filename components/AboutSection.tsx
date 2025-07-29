import Image from 'next/image'

const AboutSection = () => {
  return (
    <main className="h-dvh w-full lg:flex px-8 md:px-12 lg:px-24 py-20">
        <div className="w-4/5 lg:w-2/5 flex flex-col justify-center md:p-12">
            <b className='text-4xl md:text-6xl font-bachelor-regular'>About</b>
            <p className='mt-6 text-sm'>Yukiko Ramen House originated in Kyoto, Japan in 1994. Brothers Shihiro and Motohiro Yukiko, had a simple goal, to bring people together and provide great food. 25 years after the first opening, they are now opening their first location outside of Japan.</p>
        </div>

        <div className="relative w-full h-1/3 md:h-2/3 lg:w-3/5 lg:h-full mt-12 md:mt-0">
            <Image
            src="/assets/aboutus-img-1.png"
            alt="About Us"
            fill
            className="object-cover md:p-12"
            />
        </div>
    </main>
  )
}

export default AboutSection
