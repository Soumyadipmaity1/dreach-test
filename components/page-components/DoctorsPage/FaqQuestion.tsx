import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

const Data = [
  {
    question: "Why choose our medical for your family?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi distinctio laudantium omnis inventore sunt doloremque est sed iure nesciunt voluptatem. Odio, et ducimus soluta esse deseruntsequi! Libero, ullam doloremque.",
  },
  {
    question: "Why we are different from others?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi distinctio laudantium omnis inventore sunt doloremque est sed iure nesciunt voluptatem. Odio, et ducimus soluta esse deseruntsequi! Libero, ullam doloremque.",
  },
  {
    question: "Trusted & experience senior care & love",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi distinctio laudantium omnis inventore sunt doloremque est sed iure nesciunt voluptatem. Odio, et ducimus soluta esse deseruntsequi! Libero, ullam doloremque.",
  },
  {
    question: "How to get appointment for emergency cases?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi distinctio laudantium omnis inventore sunt doloremque est sed iure nesciunt voluptatem. Odio, et ducimus soluta esse deseruntsequi! Libero, ullam doloremque.",
  },
];

const FaqQuestion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mx-auto p-6 w-full">
      <div className="bg-white flex flex-col gap-7">
        {Data.map((item, index) => (
          <div key={index} className=" ">
            <div
              className=" cursor-pointer flex justify-between items-center p-4"
              onClick={() => toggleFAQ(index)}
            >
              <p className=" text-[#1B3C74] font-bold">{item.question}</p>
              <span>
                {activeIndex === index ? (
                  <FaMinus size={18} color="#2AA7FF" />
                ) : (
                  <FaPlus size={14} color="#2AA7FF" />
                )}
              </span>
            </div>
            {activeIndex === index && (
              <div className="px-4 pb-4">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqQuestion;
