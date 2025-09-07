"use client";

import { curriculumnContent } from "@/utils/utils";
import { useState } from "react";
import CurriculuCard from "../shared/curriculum-card";

function Curriculum() {
  const curriculumnTabs = [
    { label: "Grade 1-3", value: "grade1-3" },
    { label: "Grade 4-6", value: "grade4-6" },
    { label: "Grade 7-9", value: "grade7-9" },
    { label: "Grade 10-12", value: "grade10-12" },
  ];

  const [activeTab, setActiveTab] = useState(curriculumnTabs[0].value);

  const filtredCurricula = curriculumnContent.filter((curricula)=> curricula.level === activeTab)

  const handleTabClick = (value: string) => {
    setActiveTab(value);
  };
  return (
    <div className="w-full px-4 py-12 md:py-24 lg:py-32 xl:py-48 md:px-8 lg:px-12 xl:px-16 2xl:px-[30rem] bg-secondary flex justify-center items-center">
      <div className="lg:max-w-5xl text-center min-w-0  mb-4">
        <h1 className="text-xl lg:text-5xl font-bold mb-4">
          Curriculum Structure
        </h1>
        <p className="mx-auto text-sm lg:text-xl lg:px-32 text-primary-content">
          Explore subjects and competencies by grade level
        </p>

        <div className=" w-full overflow-x-auto">
        <div className="flex w-max lg:w-auto lg:justify-center mt-8 py-6 ">
          {
            curriculumnTabs.map((tab, index) => (
              <button
              key={index}
            onClick={() => handleTabClick(tab.value)}
            type="button"
            className={`btn btn-outline btn-secondary mx-2 shrink whitespace-nowrap text-primary-content text-xs lg:text-sm border border-primary-content rounded-md hover:bg-success hover:text-success-content hover:border-success ${
              activeTab === tab.value ? "bg-success text-success-content border-success" : ""}`}
          >
            <span>{tab.label}</span>
          </button>
            ))
          }
        </div>
        </div>

        {/* curriculumn cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 py-6">
          {
            filtredCurricula.map((curicula,index)=>(
              <CurriculuCard key={index} title={curicula.title} description={curicula.description} />
            ))
          }
         
         
        </div>
      </div>
    </div>
  );
}

export default Curriculum;
