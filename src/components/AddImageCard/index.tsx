import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "./styled";

type Props = { handleAddImage: (url: string) => void };

const AddImageCard = ({ handleAddImage }: Props) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleAddImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div>
      <input id="contained-button-file" accept=".png, .jpg, .jpeg" type="file" hidden onChange={onChange} />
      <Card>
        <label htmlFor="contained-button-file">
          <FontAwesomeIcon icon={faImage} style={{ fontSize: "25px" }} />
          <p>Add image</p>
        </label>
      </Card>
    </div>
  );
};

export default AddImageCard;
