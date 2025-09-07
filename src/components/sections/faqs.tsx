import FaqAccordion from "../shared/faq-accordion";

function Faqs() {
  return (
    <div id="faqs" className="w-full px-4 py-12 md:py-24 lg:py-16 xl:py-24 md:px-8 lg:px-12 xl:px-16 2xl:px-[30rem] bg-success-content flex justify-center items-center">
      <div className=" w-full lg:max-w-5xl">
        <h1 className="text-xl text-center lg:text-5xl font-bold mb-4">
          Frequently Asked Questions
        </h1>
        <p className="mx-auto text-center text-sm lg:text-xl lg:px-32 text-primary-content">
          Find answers to common questions about the Competency-Based Curriculum
        </p>

        <div className="mt-8 py-6 ">
          <FaqAccordion />
        </div>
      </div>
    </div>
  );
}

export default Faqs;
