import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ImageCard from "../ImageCard";
import { Body, Container, Header } from "./styled";
import AddImageCard from "../AddImageCard";
const Gallery = () => {
  return (
    <Container>
      <Header>
        <h2>Gallery</h2>
        <p>
          <FontAwesomeIcon icon={faTrashAlt} />
          Delete file
        </p>
      </Header>

      <Body>
        <ImageCard large />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <AddImageCard />
      </Body>
    </Container>
  );
};

export default Gallery;
