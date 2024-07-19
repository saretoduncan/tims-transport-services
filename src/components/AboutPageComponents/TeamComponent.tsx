type teamProp={
    imgSrc : string;
    name:string;
    title:string
}
 const TeamComponent:React.FC<teamProp> = ({imgSrc, name,title}) => {
  return (
    <figure className=" grid py-2 rounded-lg shadow-lg space-y-2 bg-white">
      <img
        src={imgSrc}
        alt=""
        className="size-[250px] rounded-full border-2 border-orange-500 justify-self-center"
      />
      <figcaption className="text-center">
        <p className="font-bold">{name}</p>
        <small className="italic text-gray-500 font-bold">{title}</small>
      </figcaption>
    </figure>
  );
};

export default TeamComponent;
