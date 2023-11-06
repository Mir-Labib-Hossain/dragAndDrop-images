import { faImages } from "@fortawesome/free-regular-svg-icons";
import { faSquareCheck, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, DeleteButton } from "./styled";

type Props = {
  handleUnSelectAll: () => void;
  handleDelete: () => void;
  totalSelected: number;
};

const Header = ({ totalSelected, handleUnSelectAll, handleDelete }: Props) => {
  return (
    <>
      <Container>
        {totalSelected > 0 ? (
          <>
            <h2>
              <FontAwesomeIcon icon={faSquareCheck} onClick={handleUnSelectAll} /> File{totalSelected > 1 && "s"} Selected
            </h2>
            <div>
              <DeleteButton onClick={handleDelete}>
                <FontAwesomeIcon icon={faTrashAlt} /> Delete file{totalSelected > 1 && "s"}
              </DeleteButton>
            </div>
          </>
        ) : (
          <h2>
            <FontAwesomeIcon icon={faImages} /> Gallery
          </h2>
        )}
      </Container>
    </>
  );
};

export default Header;
