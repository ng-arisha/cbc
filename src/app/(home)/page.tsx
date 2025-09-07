import Curriculum from "@/components/sections/curriculum"
import HomeSection from "@/components/sections/home"
import Overview from "@/components/sections/overview"
import Resources from "@/components/sections/resources"

function HomePage() {
  return (
    <div>
     <HomeSection />
     <Overview />
     <Curriculum />
     <Resources />
    </div>
  )
}

export default HomePage
