import { useState } from "preact/hooks";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

type Props = {
  desktop: LiveImage;
  title: string;
  newTitle: string;
  newCaption: string;
};

export default function ImageTitleSwitcher({
  desktop,
  title,
  newTitle,
  newCaption,
  
}: Props) {
  const [showNew, setShowNew] = useState(false);
  const [showImageTitle, setShowImageTitle] = useState(true);

  const handleClick = () => {
    setShowNew(!showNew);
    setShowImageTitle(!showImageTitle);
  };

  return (
    <div
      className={`w-[345px] h-[220px] p-4 cursor-pointer flex items-center justify-center ${
        showNew ? "bg-blue" : ""
      }`}
      onClick={handleClick}
    >
      {!showImageTitle && !showNew && (
        <div className="flex justify-center items-center w-full h-32 bg-gray-200 rounded-md">
          <p className="text-lg text-gray-500">{title}</p>
        </div>
      )}
      {showImageTitle && (
        <div className="flex flex-col items-center justify-center">
          <div className="w-44 h-44">
            <img src={desktop} class="w-full h-full" />
          </div>
          <p className="text-lg text-gray-500 mb-2">{title}</p>
        </div>
      )}
      {showNew && (
        <div class="flex flex-col items-center pt-[15px]">
          <p className="text-lg font-bold mb-2 text-default-inverse">{newTitle}</p>
          <p className="text-md text-default-inverse">{newCaption}</p>
        </div>
      )}
    </div>
  );
}
