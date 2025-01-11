import React, { useState } from "react";
import { Plus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "How long does it take to see SEO results?",
      answer:
        "It typically takes 4-6 months to start seeing significant SEO results. However, this can vary depending on factors like competition, current site performance, and implementation speed.",
    },
    {
      question: "What's the difference between organic and paid traffic?",
      answer:
        "Organic traffic comes from unpaid search results through SEO efforts, while paid traffic comes from paid advertising like PPC campaigns. Organic takes longer but can provide sustainable long-term results.",
    },
    {
      question: "Can SEO work for my industry?",
      answer:
        "Yes, SEO can work for virtually any industry. The specific strategies may vary, but improving search visibility is valuable for any business with an online presence.",
    },
    {
      question: "Why does SEO take time?",
      answer:
        "SEO takes time because it involves multiple factors: building site authority, creating quality content, earning backlinks, and waiting for search engines to recognize and reward these improvements.",
    },
    {
      question: "Do I need ongoing SEO services?",
      answer:
        "Yes, ongoing SEO is recommended as search algorithms constantly change, competition evolves, and regular content updates are needed to maintain and improve rankings.",
    },
  ];

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">FAQ's</h1>
        <p className="text-black text-sm">
          Looking to learn more about paid search management for your business?
          <br />
          Browse our FAQ's
        </p>
      </div>

      <div>
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-500 transition-all ease-in-out duration-200"
          >
            <button
              className="w-full py-4 px-10 flex justify-between items-center text-left focus:outline-none"
              onClick={() => toggleItem(index)}
            >
              <span className="font-medium">{item.question}</span>
              <Plus
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-45" : ""
                }`}
                size={20}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                openIndex === index ? "grid-rows-[1fr] " : "grid-rows-[0fr] "
              }`}
            >
              <div className="overflow-hidden">
                <div className="text-gray-600 py-4 px-10">{item.answer}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
