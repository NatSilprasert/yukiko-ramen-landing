import { Menu } from "lucide-react"

const HeaderSection = () => {
  return (
    <main className="fixed top-0 flex w-full px-8 py-6 md:px-12 md:py-8 lg:px-24 lg:py-12 justify-between items-center z-9999">
        <Menu className="size-10"/>
        <div className="h-full border rounded-full text-md lg:text-xl p-2.5 font-bachelor-regular transition-all  duration-300 hover:text-primary hover:bg-white">
            EN
        </div>
    </main>
  )
}

export default HeaderSection
