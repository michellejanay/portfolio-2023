import { useState } from "react";

interface IconProps {
  icon: React.ElementType;
}

export const Spinner: React.FC<IconProps> = ({ icon: Icon }) => {
  const [isSpinning, setIsSpinning] = useState(false);

  let spinStyle = isSpinning ? "animate-spin" : "animate-none";

  const spin = () => {
    setIsSpinning(!isSpinning);
  };
  return (
    <div  className={`flex justify-center m-0 p-0`}>
      <Icon onClick={spin} size="9em" className={spinStyle} />
    </div>
  );
};

export default Spinner;
