import React from "react";

const Disclaimer = () => {
  return (
    <div
      className="max-w-4xl mx-auto py-16 px-6"
      style={{
        backgroundColor: "#ffffff",
        color: "#000000",
        zIndex: 9999,
        position: "relative",
      }}
    >
      <h1 className="text-3xl font-bold mb-8">Disclaimer</h1>

      <p className="mb-4">
        The data and information external to the company, though they are based
        on sources believed to be reliable, no representation is made on their
        accuracy or comprehensiveness.
      </p>

      <p className="mb-4">
        Further, though utmost care has been taken to ensure that the statements
        made by the management herein contain their perceptions on most of the
        important trends having a material impact on the company’s operations,
        no representation is made that this represents an exhaustive coverage on
        and of all issues related to the same.
      </p>

      <p className="mb-4">
        The statements made herein may contain certain forward-looking
        statements in the current scenario, which is extremely dynamic, and
        increasingly fraught with risks and uncertainties. Actual results,
        performances, achievements or sequence of events may be materially
        different from the views expressed herein. Readers are hence cautioned
        not to place undue reliance on these statements, and are advised to
        conduct their own investigation and analysis of the information
        contained or referred to in this section before taking any action with
        regard to their own specific objectives.
      </p>

      <p className="mb-4">
        The company undertakes no obligation to publicly update or revise any of
        the data or forward-looking statements expressed in this statement,
        consequent to new information, future events, or otherwise.
      </p>
    </div>
  );
};

export default Disclaimer;
