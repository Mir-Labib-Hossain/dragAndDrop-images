import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "./styled";

type Props = { image: IImage; selected?: boolean; onClick: (id: number) => void };

const ImageCard = ({ image, selected, onClick }: Props) => {
  return (
    <Card image={image.img} selected={selected} onClick={() => onClick(image.id)}>
      <FontAwesomeIcon icon={selected ? faSquareCheck : faSquare} />
    </Card>
  );
};

export default ImageCard;
