import React, { useRef, useState } from "react";
import AddImageCard from "../AddImageCard";
import ImageCard from "../ImageCard";

type Props = {
  selectedIds: number[];
  images: IImage[];
  handleSelectIds: (event: React.MouseEvent<SVGSVGElement | HTMLDivElement, MouseEvent>, id: number) => void;
  handleAddImage: (url: string) => void;
  updateArray: (newArr: IImage[]) => void;
};

const RawJS = ({ selectedIds, images, handleAddImage, handleSelectIds, updateArray }: Props) => {
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

      updateArray(newSortedImages);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const detectMouseLeftClick = (e: any) => {
    e = e || window.event;
    if ("buttons" in e) {
      return e.buttons === 1;
    }

    const button = e.which || e.button;
    return button === 1;
  };

  return (
    <div className="grid-container" ref={dragContainerRef}>
      {images.map((image, index) => (
        <ImageCard image={image} onClick={handleSelectIds} selected={selectedIds.includes(image.id)} key={`grid-item-${image.id}`} dataObject={JSON.stringify(image)} onPointerDown={(e, i) => dragStart(e, i)} index={index} className={isDragging === index ? "dragging" : ""} />
      ))}
      <AddImageCard handleAddImage={handleAddImage} />
    </div>
  );
};

export default RawJS;
