import { navigationLinks } from "@/utils/utils"
import Link from "next/link"

function SideNavigation() {
    return (
        <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
           <img src="/logo/cbc.svg" alt="cbc logo" />
          </li>

          {
            navigationLinks.map((link) => (
                <li key={link.title}>
                    <Link href={link.link}>
                        <link.Icon className="inline mr-2 h-5 w-5" />
                    <span>{link.title}</span>
                    </Link>
                </li>
            ))
          }
          
        </ul>
      </div>
    )
}

export default SideNavigation
