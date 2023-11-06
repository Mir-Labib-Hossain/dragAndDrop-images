import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { images as data } from "../../utils/data";
import Header from "../Header";
import Npm from "./Npm";
import RawJS from "./RawJS";
import { Body, Github, Main, TypeToggler } from "./styled";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Gallery = () => {
  const [images, setImages] = useState<IImage[]>(data);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  //
  //// common functions
  //

  const handleSelectIds = (event: React.MouseEvent<SVGSVGElement | HTMLDivElement, MouseEvent>, id: number) => {
    event.stopPropagation();
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

  const [showRawGallery, setShowRawGallery] = useState(true);

  return (
    <Main>
      <TypeToggler onClick={() => setShowRawGallery((prev) => !prev)}>
        {showRawGallery ? (
          <>
            <FontAwesomeIcon icon={faToggleOn} /> Showing DnD with Raw JS
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faToggleOff} /> Showing DnD using NPM
          </>
        )}
      </TypeToggler>
      <Github href="https://github.com/Mir-Labib-Hossain/dragAndDrop-images" target="_blank"><FontAwesomeIcon icon={faGithub} /></Github>
      {/* //// HEADER */}
      <Header totalSelected={selectedIds.length} handleDelete={handleDelete} handleUnSelectAll={() => setSelectedIds([])} />
      <Body>
        {/* //// PLACEHOLDER grid-items with border only*/}
        <div className="grid-container">
          {images.map((image) => (
            <div key={`grid-item-${image.id}`}></div>
          ))}
          <div className="dummy-button-placeholder"></div>
        </div>

        {/* //// BODY */}
        {showRawGallery ? <RawJS images={images} selectedIds={selectedIds} handleSelectIds={handleSelectIds} handleAddImage={handleAddImage} updateArray={(newArr) => setImages(newArr)} /> : <Npm images={images} selectedIds={selectedIds} handleSelectIds={handleSelectIds} handleAddImage={handleAddImage} updateArray={(newArr) => setImages(newArr)} />}
      </Body>
      
    </Main>
  );
};

export default Gallery;
