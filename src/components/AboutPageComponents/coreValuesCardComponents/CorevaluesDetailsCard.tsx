type props = {
  iconImg: string;
  title: string;
  caption: string;
};
const CorevaluesDetailsCard: React.FC<props> = ({
  iconImg,
  title,
  caption,
}) => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-fit rounded-full border-4 border-orange-500 p-2 ">
          <img src={iconImg} alt="icon" className="w-[80px]"/>
        </div>
      </div>
      <div className="text-center px-4 lg:px-2">
        <p className="font-bold text-xl">{title}</p>
        <p className="text-gray-700 text-sm">{caption}</p>
      </div>
      <img />
    </div>
  );
};

export default CorevaluesDetailsCard;
