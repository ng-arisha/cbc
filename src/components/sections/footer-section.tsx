import Link from "next/link"

function FooterSection() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start w-full bg-primary px-4 py-6 md:py-6 lg:py-8 xl:py-12 md:px-8 lg:px-12 xl:px-16 2xl:px-[30rem] space-x-3">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
                <h1 className="text-success text-lg lg:text-xl py-2">CBC Kenya Hub</h1>
                <p className="text-secondary-content">Your trusted companion for navigating the Competency-Based Curriculum in Kenya. We provide clear, accurate, and up-to-date information for all stakeholders.</p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
                <h1 className="text-success text-lg lg:text-xl py-2">Quick Links</h1>
               <Link href="/" className="text-secondary-content block py-1">Home</Link>
               <Link href="/overview" className="text-secondary-content block py-1">Overview</Link>
               <Link href="/resources" className="text-secondary-content block py-1">Resources</Link>
               <Link href="/faqs" className="text-secondary-content block py-1">FAQs</Link>
               <Link href="/contact" className="text-secondary-content block py-1">Contact</Link>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
                <h1 className="text-success text-lg lg:text-xl py-2">Support</h1>
                <Link href="/" className="text-secondary-content block py-1">FAQs</Link>
               <Link href="/overview" className="text-secondary-content block py-1">Contact</Link>
               <Link href="/resources" className="text-secondary-content block py-1">Help Desk</Link>
               <Link href="/faqs" className="text-secondary-content block py-1">Feedback</Link>
               <Link href="/contact" className="text-secondary-content block py-1">Newsletter</Link>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
                <h1 className="text-success text-lg lg:text-xl py-2">Stay Updated</h1>
               <p className="text-secondary-content"> Subscribe to our newsletter for the latest CBC updates and resources.</p>
            </div>
        </div>
    )
}

export default FooterSection
