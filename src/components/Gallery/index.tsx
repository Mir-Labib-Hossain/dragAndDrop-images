import { useRef, useState } from "react";
import { images as data } from "../../utils/data";
import AddImageCard from "../AddImageCard";
import Header from "../Header";
import ImageCard from "../ImageCard";
import { Body, GridContainer, Main } from "./styled";

const Gallery = () => {
  const [images, setImages] = useState<IImage[]>(data);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  //
  //// common functions
  //
  const handleSelectIds = (event: React.MouseEvent<SVGSVGElement | HTMLDivElement, MouseEvent>, id: number) => {
    event.stopPropagation();
    console.log("asd");

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

  //
  //// drag&drop functions
  //

  const dragContainerRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState<number | undefined>();

  const dragStart = (e: React.PointerEvent<HTMLDivElement>, index: number) => {
    const container = dragContainerRef.current;

    e.stopPropagation();
    if (!detectMouseLeftClick(e) || container === null) return;
    setIsDragging(index);
    const items = [...container.childNodes] as HTMLInputElement[];
    const dragItem = items[index];
    const dragBoundingRect = dragItem.getBoundingClientRect(); // got the position of dragging item
    const regularBoundingRect = items[2].getBoundingClientRect(); // got the position of dragging item
    const notDragItems = items.filter((_, i) => i !== index);

    // styles for drag item
    dragItem.style.zIndex = "9999";
    dragItem.style.position = "fixed";
    dragItem.style.width = regularBoundingRect.width + "px";
    dragItem.style.height = regularBoundingRect.height + "px";
    dragItem.style.top = dragBoundingRect.top + "px";
    dragItem.style.left = dragBoundingRect.left + "px";

    // now let's crate a placeholder for floating item
    const placeholderItem = document.createElement("div");
    placeholderItem.id = "placeholder-item";

    // now lets insert the placeholder inside the container
    container.insertBefore(placeholderItem, dragItem);

    // getting mouse pointer location
    const x = e.clientX;
    const y = e.clientY;

    //// This 3 is created for reducing glitchy swapping & not to swapped between same items
    let count = 0; // detects number of time pointer was while overlapping
    let prevIndex = 0; // last index of our pointer overlapped
    let swapped = false; // did we swapped ?

    //// lets call the function on :hover
    const dragMove = (ev: PointerEvent) => {
      const posX = ev.clientX - x;
      const posY = ev.clientY - y;
      dragItem.style.transform = `translate(${posX}px, ${posY}px)`;

      const itemsWithPlaceholder = (dragContainerRef.current ? [...dragContainerRef.current.childNodes] : []) as HTMLInputElement[];
      const dragItemIndex = Array.from(itemsWithPlaceholder).indexOf(dragItem) - 1;

      //// swap position
      notDragItems.forEach((item, idx) => {
        const rect1 = dragItem.getBoundingClientRect();
        const rect2 = item.getBoundingClientRect();
        const isOverLapping = !(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom);

        if (isOverLapping) {
          if (prevIndex === idx) {
            count++;

            if (count === 10 && prevIndex === idx && swapped === false) {
              //// SWAPPED

              // update placeholder's position
              container?.removeChild(placeholderItem);
              if (idx === 0) {
                // dragItem.style.width = regularBoundingRect.width * 2 + "px";
                // dragItem.style.height = regularBoundingRect.height * 2 + "px";
                // dragItem.style.top = dragBoundingRect.top + "px";
                // dragItem.style.left = dragBoundingRect.left + "px";
                container.insertBefore(placeholderItem, item);
              } else {
                container.insertBefore(placeholderItem, dragItemIndex < idx ? item.nextSibling : item);
              }

              // update dragged item's position
              container?.removeChild(dragItem);
              container.insertBefore(dragItem, dragItemIndex < idx ? item.nextSibling : item);
            }
          } else {
            count = 0;
            swapped = false;
            prevIndex = idx;
          }
        }
      });
      return null;
    };
    //// when dragging
    document.onpointermove = (e) => dragMove(e);

    //// when dragging ends
    document.onpointerup = dragEnd;
    function dragEnd() {
      document.onpointerup = null;
      document.onpointerdown = null;
      document.onpointermove = null;
      setIsDragging(undefined);

      // removing the styles we set when dragging ends
      dragItem.removeAttribute("style");

      // now lets remove the placeholder
      container?.removeChild(placeholderItem);

      // not lets update our imagesState
      const newSortedImages: IImage[] = [];
      ((container ? [...container.childNodes] : []) as HTMLInputElement[]).map((itm) => {
        itm.getAttribute("data-object") && newSortedImages.push(JSON.parse(itm.getAttribute("data-object") || ""));
      });
      setImages(newSortedImages);
    }
  };

  const detectMouseLeftClick = (e: React.PointerEvent<HTMLDivElement>) => {
    e = e || window.event;
    if ("buttons" in e) {
      return e.buttons === 1;
    }

    const button = (e as any).which || (e as any).button;
    return button === 1;
  };

  return (
    <Main>
      <Header totalSelected={selectedIds.length} handleDelete={handleDelete} handleUnSelectAll={() => setSelectedIds([])} />
      <Body>
        {/* //// background grid-items with border only*/}
        <GridContainer ref={dragContainerRef}>
          {images.map((image) => (
            <div key={`grid-item-${image.id}`}></div>
          ))}
          <div className="dummy-button-placeholder"></div>
        </GridContainer>

        {/* //// real grid-items with border only*/}
        <GridContainer ref={dragContainerRef}>
          {images.map((image, index) => (
            <div key={`grid-item-${image.id}`} data-object={JSON.stringify(image)} onPointerDown={(e) => dragStart(e, index)} className={isDragging === index ? "dragging" : ""}>
              <ImageCard image={image} onClick={handleSelectIds} selected={selectedIds.includes(image.id)} />
            </div>
          ))}
          <AddImageCard handleAddImage={handleAddImage} />
        </GridContainer>
      </Body>
    </Main>
  );
};

export default Gallery;
