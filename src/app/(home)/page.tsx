import Curriculum from "@/components/sections/curriculum"
import Faqs from "@/components/sections/faqs"
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
     <Faqs />
    </div>
  )
}

export default HomePage
