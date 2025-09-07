import Contact from "@/components/sections/contact"
import Curriculum from "@/components/sections/curriculum"
import Faqs from "@/components/sections/faqs"
import FooterSection from "@/components/sections/footer-section"
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
     <Contact />
     <FooterSection />
    </div>
  )
}

export default HomePage
