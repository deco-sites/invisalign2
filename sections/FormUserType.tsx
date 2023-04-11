import ImageTitleChanger from "../islands/ImageTitleSwitcher.tsx";
import {useState} from 'preact/hooks'

export type BoxProps = {
  imageUrl: string;
  title: string;
  newTitle: string;
  newCaption: string;
};

export default function FormUserType({ contentBoxes }: { contentBoxes: BoxProps[] }) {
  const [selectedBoxIndex, setSelectedBoxIndex] = useState(-1);

  const handleBoxClick = (index: number) => {
    setSelectedBoxIndex(index);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {contentBoxes.map((box, index) => (
        <div key={index} onClick={() => handleBoxClick(index)}>
          <ImageTitleChanger
            imageUrl={box.imageUrl}
            title={box.title}
            newTitle={box.newTitle}
            newCaption={box.newCaption}
          />
        </div>
      ))}
    </div>
  );
}