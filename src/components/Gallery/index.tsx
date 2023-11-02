import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import img1 from "../../assets/image-1.webp";
import AddImageCard from "../AddImageCard";
import ImageCard from "../ImageCard";
import { Body, Container, Header } from "./styled";
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
        <ImageCard image={img1} />
        <ImageCard image={img1} />
        <ImageCard image={img1} />
        <ImageCard image={img1} />
        <ImageCard image={img1} />
        <ImageCard image={img1} />
        <ImageCard image={img1} />
        <ImageCard image={img1} />
        <ImageCard image={img1} />
        <ImageCard image={img1} />
        <ImageCard image={img1} />
        <ImageCard image={img1} />
        <ImageCard image={img1} />
        <ImageCard image={img1} />
        <ImageCard image={img1} />
        <ImageCard image={img1} />
        <ImageCard image={img1} />
        <ImageCard image={img1} />
        <AddImageCard />
      </Body>
    </Container>
  );
};

export default Gallery;
