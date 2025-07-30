import AboutSection from "@/components/AboutSection"
import HeaderSection from "@/components/HeaderSection"
import HeroSection from "@/components/HeroSection"
import SmoothWrapper from "@/components/SmoothWrapper"

const Home = () => {
  return (
    <main>
      <HeaderSection />
      <SmoothWrapper>
        <HeroSection />
        <AboutSection />
      </SmoothWrapper>
    </main>
  )
}

export default Home
