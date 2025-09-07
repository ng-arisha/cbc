import { FolderOpen } from "lucide-react"
import ViewResourcesModal from "./view-resources-modal"

function Resourcecard({title,description}:{title:string,description:string}) {
    return (
        <div className=" bg-success-content rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
            <div className="bg-gradient-to-br from-secondary to-[#E8F5E8] p-12 flex justify-center items-center rounded-t-lg">
                <FolderOpen size={40} className="text-success" />
            </div>
            <div className="p-4 text-start">
            <h1 className="text-sm lg:text-lg font-medium">{title}</h1>
            <p className="text-primary-content text-xs lg:text-sm py-2">{description}</p>

            <ViewResourcesModal title={title} />
            </div>
        </div>
    )
}

export default Resourcecard
