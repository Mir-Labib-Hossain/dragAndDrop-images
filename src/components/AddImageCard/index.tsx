import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "./srtled";
type Props = { large?: boolean };

const AddImageCard = ({ large }: Props) => {
  console.log(large);
  return (
    <Card>
      <FontAwesomeIcon icon={faImage} style={{ fontSize: "25px" }} />
      <p>Add image</p>
    </Card>
  );
};

export default AddImageCard;
