import RLDD from "react-list-drag-and-drop/lib/RLDD";
import ImageCard from "../ImageCard";

type Props = {
  images: IImage[];
  selectedIds: number[];
  handleSelectIds: (event: React.MouseEvent<SVGSVGElement | HTMLDivElement, MouseEvent>, id: number) => void;
  updateArray: (newArr: IImage[]) => void;
  handleAddImage: (url: string) => void;
};

const Npm = ({ images, handleSelectIds, selectedIds, handleAddImage, updateArray }: Props) => {
  const itemRenderer = (image: IImage, index: number): JSX.Element => {
    return <ImageCard image={image} index={index} onClick={handleSelectIds} selected={selectedIds.includes(image.id)} className="item" />;
  };

  const handleRLDDChange = (reorderedItems: Array<IImage>) => {
    updateArray(reorderedItems);
  };

  return <RLDD cssClasses="grid-container" layout="horizontal" items={images} itemRenderer={itemRenderer} onChange={handleRLDDChange} />;
};

export default Npm;
