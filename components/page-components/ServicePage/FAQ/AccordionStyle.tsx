"use client";

import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

interface Question {
  id: number;
  title: string;
  details: string;
}

const questions: Question[] = [
  {
    id: 1,
    title: "Why choose our medical for your family?",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: 2,
    title: "	Why we are different from others?",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: 3,
    title: "Trusted & experience senior care & love",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: 4,
    title: "How to get appointment for emergency cases?",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
];

export default function AccordionStyle() {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleAccordionChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="">
      {questions.map((question) => (
        <Accordion
          key={question.id}
          expanded={expanded === question.id}
          onChange={handleAccordionChange(question.id)}
          className="my-2 p-2.5 bg-white dark:bg-slate-900"
        >
          <AccordionSummary
            expandIcon={
              <KeyboardDoubleArrowDownIcon
                style={{
                  color: expanded === question.id ? "white" : "initial",
                  fontWeight: "bold",
                }}
                className="text-[16px] lg:text-[18px] xl:text-[24px]"
              />
            }
            aria-controls={`panel${question.id}-content`}
            id={`panel${question.id}-header`}
            style={{
              backgroundColor: expanded === question.id ? "#F97316" : "initial",
              color: expanded === question.id ? "white" : "#125872",
            }}
          >
            <Typography
              variant="h5"
              style={{ fontWeight: "bold" }}
              className="text-[16px] lg:text-[18px] xl:text-[21px]"
            >
              {question.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-[12px] 2xlg:text-[14px] xl:text-[16px] dark:text-gray-300">
              {question.details}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
