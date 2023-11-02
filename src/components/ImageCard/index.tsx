import { Card } from "./srtled";

type Props = { image: string,selected?:boolean };

const ImageCard = ({ image }: Props) => {
  return <Card image={image}>
    <input type="checkbox"/>
  </Card>;
};

export default ImageCard;
