import { faSquare, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "./styled";

type Props = { index: number; image: IImage; selected?: boolean; onClick: (e: React.MouseEvent<SVGSVGElement, MouseEvent>, id: number) => void; onPointerDown?: (e: React.PointerEvent<HTMLDivElement>, index: number) => void; className?: string; dataObject?: string };

const ImageCard = ({ image, selected, onClick, onPointerDown, className, index, dataObject }: Props) => {
  return (
    <Card image={image.img} className={className} selected={selected} onPointerDown={(e) => onPointerDown && onPointerDown(e, index)} data-object={dataObject}>
      <FontAwesomeIcon icon={selected ? faSquareCheck : faSquare} onClick={(e) => onClick(e, image.id)} />
    </Card>
  );
};

export default ImageCard;
