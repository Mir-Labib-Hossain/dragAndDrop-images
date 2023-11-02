import { faImages } from "@fortawesome/free-regular-svg-icons";
import { faSquareCheck, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { images as data } from "../../utils/data";
import AddImageCard from "../AddImageCard";
import ImageCard from "../ImageCard";
import { DeleteButton, GridContainer, Header, Main } from "./styled";

const Gallery = () => {
  const [images, setImages] = useState<IImage[]>(data);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const handleSelectIds = (id: number) => {
    const index = selectedIds.indexOf(id);
    const newArray = [...selectedIds];
    if (index !== -1) {
      newArray.splice(index, 1);
    } else {
      newArray.push(id);
    }
    setSelectedIds(newArray);
  };

  const handleAddImage = (url: string) => {
    setImages((prev) => [
      ...prev,
      {
        id: Math.random(),
        img: url,
      },
    ]);
  };

  const handleDelete = () => {
    setImages(images.filter((img) => !selectedIds.includes(img.id)));
    setSelectedIds([]);
  };

  return (
    <Main>
      <Header>
        {selectedIds.length > 0 ? (
          <>
            <h2>
              <FontAwesomeIcon icon={faSquareCheck} onClick={() => setSelectedIds([])} /> File{selectedIds.length > 1 && "s"} Selected
            </h2>
            <DeleteButton onClick={handleDelete}>
              <FontAwesomeIcon icon={faTrashAlt} /> Delete file{selectedIds.length > 1 && "s"}
            </DeleteButton>
          </>
        ) : (
          <h2>
            <FontAwesomeIcon icon={faImages} /> Gallery
          </h2>
        )}
      </Header>

      <GridContainer>
        {images.map((image) => (
          <ImageCard image={image} key={`grid-item-${image.id}`} onClick={handleSelectIds} selected={selectedIds.includes(image.id)} />
        ))}
        <AddImageCard handleAddImage={handleAddImage} />
      </GridContainer>
    </Main>
  );
};

export default Gallery;
