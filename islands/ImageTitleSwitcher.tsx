import { useState } from "preact/hooks";

export type BoxProps = {
  imageUrl: string;
  title: string;
  newTitle: string;
  newCaption: string;
};

export default function ImageTitleSwitcher({
  imageUrl,
  title,
  newTitle,
  newCaption,
}: BoxProps) {
  const [showNew, setShowNew] = useState(false);
  const [showImageTitle, setShowImageTitle] = useState(true);

  const handleClick = () => {
    setShowNew(!showNew);
    setShowImageTitle(!showImageTitle);
  };

  return (
    <div
      className={`w-64 h-64 p-4 border-2 border-gray-300 cursor-pointer ${
        showNew ? "bg-black" : ""
      }`}
      onClick={handleClick}
    >
      {!showImageTitle && !showNew && (
        <div className="flex justify-center items-center w-full h-32 bg-gray-200 rounded-md">
          <p className="text-lg text-gray-500">{title}</p>
        </div>
      )}
      {showImageTitle && (
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full bg-gray-200 mb-4">
            <img className="w-full h-full object-cover rounded-full" src={imageUrl} alt="Imagem" />
          </div>
          <p className="text-lg text-gray-500 mb-2">{title}</p>
        </div>
      )}
      {showNew && (
        <div>
          <p className="text-lg font-bold mb-2">{newTitle}</p>
          <p className="text-md text-gray-500">{newCaption}</p>
        </div>
      )}
    </div>
  );
}
