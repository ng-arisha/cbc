import { curriculumStages } from "@/utils/utils";
import OverviewCard from "../shared/overview-card";

function Overview() {
  return (
    <div className="w-full px-4 py-12 md:py-24 lg:py-16 xl:py-24 md:px-8 lg:px-12 xl:px-16 2xl:px-[30rem] bg-success-content flex justify-center items-center">
      <div className="text-center w-full lg:max-w-5xl">
        <h1 className="text-xl lg:text-5xl font-bold mb-4">
          CBC Learning Journey
        </h1>
        <p className="mx-auto text-sm lg:text-xl lg:px-32 text-primary-content">
        Follow the complete educational pathway from early years to senior secondary, designed to build competencies and life skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 py-6">
            {
                curriculumStages.map((stage, index) => (
                    <OverviewCard key={index} index={index + 1} stage={stage.stage} description={stage.description} />
                ))
            }
       
        </div>
      </div>
    </div>
  );
}

export default Overview;
