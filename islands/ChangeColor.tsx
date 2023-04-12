import { useState } from "preact/hooks";

type ColorProps = {
  legenda: string;
};

export default function ChangeColor({
  legenda  
}: ColorProps) {
  const [showColor, setShowColor] = useState(false);
  const handleClick = () => {
    setShowColor(!showColor);
  };

  return (
    <span
      className={`inline-block w-[350px] p-4 border-1 border-blue cursor-pointer ${
        showColor ? "bg-blue text-white" : ""
      }`}
      onClick={handleClick}
    >
      {legenda}
    </span>
  );
}
