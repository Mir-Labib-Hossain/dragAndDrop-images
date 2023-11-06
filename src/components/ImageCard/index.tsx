import { faSquare,faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "./styled";

type Props = { image: IImage; selected?: boolean; onClick: (e: React.MouseEvent<SVGSVGElement, MouseEvent>, id: number) => void };

const ImageCard = ({ image, selected, onClick }: Props) => {
  return (
    <Card image={image.img} selected={selected}>
      <FontAwesomeIcon icon={selected ? faSquareCheck : faSquare} onClick={(e) => onClick(e, image.id)} />
    </Card>
  );
};

export default ImageCard;
