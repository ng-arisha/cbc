import { faqs } from "@/utils/utils";

function FaqAccordion() {
  return (
    <div>
      {
        faqs.map((faq, index) => (
            <div key={index} className="collapse  bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked={index === 0} />
        <div className="collapse-title font-semibold">
         { faq.quiz }
        </div>
        <div className="collapse-content text-sm">
          {faq.ans}
        </div>
      </div>
        ))
      }
      
      
    </div>
  );
}

export default FaqAccordion;
