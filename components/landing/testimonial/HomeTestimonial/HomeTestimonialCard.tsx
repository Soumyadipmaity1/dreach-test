/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";

interface Quote {
  quote: string;
  authorName: string;
  authorTitle: string;
  imageSrc: string;
}

interface Quotes {
  [key: string]: Quote[];
}

interface HomeTestimonialCardProps {
  cardType: string;
}

const Image =
  "https://cdn.pixabay.com/photo/2024/03/14/08/52/pug-8632718_1280.jpg";

const quotes: Quotes = {
  card1: [
    {
      quote:
        "Medicine is not only a science; it is also an art. It does not consist of compounding pills and plasters; it deals with the very processes of life, which must be understood before they may be guided.",
      authorName: "Lorem ipsum",
      authorTitle: "company name / position",
      imageSrc: Image,
    },
  ],
  card2: [
    {
      quote:
        "Medicine is not only a science; it is also an art. It does not consist of compounding pills and plasters; it deals with the very processes of life, which must be understood before they may be guided.",
      authorName: "Lorem ipsum",
      authorTitle: "company name / position",
      imageSrc: Image,
    },
  ],
  card3: [
    {
      quote:
        "Medicine is not only a science; it is also an art. It does not consist of compounding pills and plasters; it deals with the very processes of life, which must be understood before they may be guided.",
      authorName: "Lorem ipsum",
      authorTitle: "company name / position",
      imageSrc: Image,
    },
  ],
};

const HomeTestimonialCard: React.FC<HomeTestimonialCardProps> = ({
  cardType,
}) => {
  const selectedQuotes: Quote[] = quotes[cardType] || [];

  return (
    <div className="flex">
      {selectedQuotes.map((quoteObj, index) => (
        <div
          key={index}
          className=" p-5 rounded-xl m-4 border-2 border-[#287a98] pt-8 px-8 shadow-lg shadow-[#7eddff] bg-white dark:bg-slate-800"
        >
          <h4>"{quoteObj.quote}"</h4>
          <div className="flex pt-3">
            <img
              className="w-20 py-3 bg-[#fd9ab9] m-3 rounded-full"
              src={quoteObj.imageSrc}
              alt={quoteObj.authorName}
            />
            <div className="mt-5">
              <h3 className="text-xl text-[#125872] dark:text-[#31ADDB] font-semibold">
                {quoteObj.authorName}
              </h3>
              <h4 className="text-sm text-orange-500 dark:font-semibold">
                {quoteObj.authorTitle}
              </h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeTestimonialCard;
