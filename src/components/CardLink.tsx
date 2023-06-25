import { FC } from "react";
import { Link } from "react-router-dom";

interface ImageCardsProps {
  imagePath: string;
  linkPath: string;
  text: string;
  className?: string;
}

const CardLink: FC<ImageCardsProps> = ({
  imagePath,
  linkPath,
  text,
  className,
}) => {
  return (
    <div className={`relative ${className}`}>
      <img src={imagePath} alt={text} className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
        <h2 className="text-2xl">{text}</h2>
        <Link to={linkPath} className="mt-2 underline">
          See Projects
        </Link>
      </div>
    </div>
  );
};

export default CardLink;
