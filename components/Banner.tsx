"use client";
import { useState, useEffect } from "react";

export const Banner = () => {
  const toRotate = ["Web Designer", "Web Developer", "Software Developer"];
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let titles = toRotate[i];
    let updatedText = isDeleting
      ? titles.substring(0, text.length - 1)
      : titles.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (
      !isDeleting &&
      updatedText === titles &&
      titles !== toRotate[toRotate.length - 1]
    ) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <>
      <main id="home" className="min-w-full">
        <span className="tagline">Welcome to my Portfolio</span>
        <div className="flex flex-col lg:flex-row justify-cetner">
          <div className="order-2 lg:order-1">
            <h1 className="text-[3em]">
              {`Hi, I'm Michelle `}
              <span className="flex flex-wrap text-[.75em]">{text}</span>
            </h1>
            <button className="btn" onClick={() => console.log("lets connect")}>
              {" "}
              Let's connect (arrow)
            </button>
          </div>
          <div className="order-1 lg:order-2">
            <img src="" alt="michelle" />
          </div>
        </div>
      </main>
    </>
  );
};
