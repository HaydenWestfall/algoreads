import { faqs as faqsExport } from "../../../models/faq";
import { Accordian } from "./Accordian";

export const Faq = () => {
  const faqs = faqsExport;

  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">
        Question in mind?
      </h1>
      <div
        className=""
        id="accordion-flush"
        data-accordion="collapse"
        data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        data-inactive-classes="text-gray-500 dark:text-gray-400"
      >
        {faqs.map((faq) => (
          <Accordian key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
};
