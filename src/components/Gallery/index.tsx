import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ImageCard from "../ImageCard";
import { Body, Container, Header } from "./styled";
const Gallery = () => {
  return (
    <Container>
      <Header>
        <h2>Gallery</h2>
        <p>
          <FontAwesomeIcon icon={faTrashAlt} />
          Delete
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
        <ImageCard />
      </Body>
    </Container>
  );
};

export default Gallery;
