import React from "react";

const timelineData = [
  {
    title: "Birth of a Vision",
    date: "2023",
    description:
      "Dr. Reach founded with a vision to revolutionize healthcare management",
    latest: true,
    downloadLink: "#",
    svgPath1:
      "M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z",
    svgPath2:
      "M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z",
  },
  {
    title: "AI-Powered Innovation ",
    date: " 2025",
    description:
      "Launch of our first AI-powered healthcare management platform",
    latest: false,
    svgPath1:
      "M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z",
    svgPath2: "",
  },
  {
    title: "Advancing Telemedicine",
    date: "2026",
    description:
      "Introduction of telemedicine integration and predictive analytics",
    latest: false,
    svgPath1:
      "M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z",
    svgPath2: "",
  },
  {
    title: "Global Expansion",
    date: "2028",
    description: "Expanded to serve over 1000 healthcare providers globally",
    latest: false,
    svgPath1:
      "M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z",
    svgPath2: "",
  },
];

const TimelineItem = ({ item, index }: { item: any; index: number }) => {
  const alignmentClass = index % 2 === 0 ? "justify-end" : "justify-start";

  return (
    <div className={`flex ${alignmentClass}`}>
      <div className="bg-[#125872] sm:w-[500px] w-80 rounded-xl py-1 pt-4 m-2 my-4 px-6">
        <li className="mb-10">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-10 h-10 text-[#31addb] dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d={item.svgPath1} />
              {item.svgPath2 && <path d={item.svgPath2} />}
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-sky-200 pb-1 dark:text-white">
            {item.title}
            {item.latest && (
              <span className="bg-blue-100 text-blue-800 text-sm font-medium pb-1 me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-white ms-3">
                Latest
              </span>
            )}
          </h3>
          <time className="block mb-2 text-sm leading-none text-[#f90] font-bold">
            {item.date}
          </time>
          <p className="mb-4 text-base font-normal text-gray-100 dark:text-white">
            {item.description}
          </p>
          {item.downloadLink && (
            <a
              href={item.downloadLink}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <svg
                className="w-4 h-4 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d={item.svgPath2} />
              </svg>
              Download ZIP
            </a>
          )}
        </li>
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  return (
    <ol className="relative border-s-2 border-blue-800 dark:border-gray-700">
      {timelineData.map((item, index) => (
        <TimelineItem key={index} item={item} index={index} />
      ))}
    </ol>
  );
};

export default Timeline;
