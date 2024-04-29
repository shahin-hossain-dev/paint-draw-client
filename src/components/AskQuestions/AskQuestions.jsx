import React, { useEffect, useState } from "react";
import { Bounce, Flip, Slide } from "react-awesome-reveal";

const AskQuestions = () => {
  const [askQuestions, setAskQuestions] = useState([]);

  useEffect(() => {
    fetch(
      "https://b9a10-server-side-shahin-hossain-dev.vercel.app/ask-questions"
    )
      .then((res) => res.json())
      .then((data) => {
        setAskQuestions(data);
      });
  }, []);
  return (
    <div>
      <div className="mt-12 md:mt-24 text-center space-y-4 md:w-1/2 mx-auto">
        <Slide delay={300} duration={1500}>
          <h2 className="text-2xl md:text-4xl font-bold font-exo">
            Frequently Ask Question
          </h2>
        </Slide>
        <Slide delay={300} duration={2000}>
          <p className="px-10">
            Get quick answers! Browse our FAQ section for insights on custom
            art, classes, tools, supplies, and membership perks.
          </p>
        </Slide>
      </div>
      <div className="join join-vertical w-full mt-12">
        {askQuestions.map((question) => (
          <div
            key={question._id}
            className="collapse collapse-arrow join-item border border-base-300"
          >
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-lg font-bold">
              {question.question}
            </div>
            <div className="collapse-content">
              <p>{question.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AskQuestions;
