import React from "react";

export const Banner = () => {
  return (
    <>
      <main id="home">
        <div className="flex justify-cetner">
          <div className="col">
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{`Hi I'm Michelle`} <span className="flex flex-wrap">web developer</span></h1>
          </div>
        </div>
      </main>
    </>
  );
};
