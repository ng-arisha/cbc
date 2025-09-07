import { Download, FolderClosed, Search } from "lucide-react";

function HomeSection() {
  return (
    <div id="home" className="w-full px-4 py-12 md:py-24 lg:py-32 xl:py-48 md:px-8 lg:px-12 xl:px-16 2xl:px-[30rem] bg-gradient-to-br from-secondary to-[#E8F5E8] flex justify-center items-center">
      <div className="text-center w-full lg:max-w-4xl">
        <h1 className="text-xl lg:text-5xl font-bold mb-4">
          Your Calm Guide to CBC in Kenya
        </h1>
        <p className="mx-auto text-sm lg:text-xl lg:px-32 text-primary-content">
          Trusted resources, curriculum guides, and updates for teachers,
          parents, and learners navigating the Competency-Based Curriculum.
        </p>

        <div className="flex w-full my-6 flex-col lg:flex-row justify-center items-center gap-4">
          <button className="cursor-pointer bg-success text-white px-6 py-3 rounded-lg hover:bg-success transition w-full lg:w-auto flex space-x-2">
            <FolderClosed size={20} />
            <span>Explore Resources</span>
          </button>
          <button className="cursor-pointer bg-error text-white px-6 py-3 rounded-lg hover:bg-error transition w-full lg:w-auto">
            <Download size={20} className="inline-block mr-2" />
            <span>Download Resources</span>
          </button>
        </div>

        <div className=" w-full lg:max-w-xs flex items-center mx-auto   px-2 py-1">
          <input
            type="text"
            className="bg-transparent w-[98%] border border-success p-2 rounded-sm focus:outline-none"
            placeholder="Search resources..."
          />
          <Search size={20} className="inline-block ml-2 text-primary-content cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
