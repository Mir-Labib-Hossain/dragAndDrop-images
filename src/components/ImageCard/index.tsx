import { Card } from "./srtled";

type Props = { large?: boolean };

const ImageCard = ({ large }: Props) => {
  return <Card large={large}>ImageCard</Card>;
};

export default ImageCard;
