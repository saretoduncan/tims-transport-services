import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";

type featuresCardProps = {
  featureImg: string;
  featureTitle: string;
  featureCaption: string;
};
const FeaturesCard: React.FC<featuresCardProps> = ({
  featureImg,
  featureTitle,
  featureCaption,
 
}) => {
  return (
    <>
      <figure className="space-y-4 shadow shadow-orange-200 p-1 rounded-md">
        <div
          className="relative h-[200px] w-full bg-cover  "
          style={{
            backgroundImage: "url(" + "'" + featureImg + "'" + ")",
          }}
        >
      
        </div>

        <figcaption className="px-2 ">
          <div className="w-8 h-1 bg-orange-500"></div>
          <p className="text-xl font-bold">{featureTitle}</p>
          <p>{featureCaption}</p>
        </figcaption>
      </figure>
    </>
  );
};

export default FeaturesCard;
