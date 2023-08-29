import { useState, useEffect } from "react";
import { BiDownload, BiRightArrowAlt } from "react-icons/bi";

export const Banner = () => {
  const toRotate: string[] = [
    "Web Designer",
    "Web Developer",
    "Software Developer",
  ];
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const period: number = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i: number = loopNum % toRotate.length;
    let titles: string = toRotate[i];
    let updatedText: string = isDeleting
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
      <main id="home" className="min-w-full md:my-20">
        <h1 className="text-xl my-3 mx-3 text-center md:text-left">
          {"Welcome to my Portfolio"}
        </h1>
        <div className="flex flex-col lg:flex-row justify-center items-center justify-between">
          <div className="order-2 lg:order-1 mx-3">
            <h1 className="text-[4em]">
              {`I'm Michelle `}
              <span className="flex flex-wrap text-[.75em]">{text}</span>
            </h1>
            <div className="flex my-3">
              <button
                className="flex justify-center content-center border px-6 py-2 rounded-lg"
                onClick={() => console.log("lets connect")}
              >
                {"CV "} <BiDownload size="1.3em" className="mx-2" />
              </button>
              <button
                className="flex justify-center content-center mx-6 px-6 py-2 border rounded-lg"
                onClick={() => console.log("lets connect")}
              >
                {"Let's connect "} <BiRightArrowAlt size="1.5em" />
              </button>
            </div>
          </div>
          <div className="order-1 lg:order-2 mx-3">
            <img src="hi.png" alt="michelle" className="relative w-96" />
            <div className="w-72 h-72 bg bg-white rounded-full absolute mt-[-18.75rem] z-[-1]"></div>
          </div>
        </div>
      </main>
    </>
  );
};
