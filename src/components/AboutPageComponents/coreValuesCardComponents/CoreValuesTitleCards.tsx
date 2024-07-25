type coreCardTitleProps = {
  firstWord: string;
  lastWord: string;
};
const CoreValuesTitleCards: React.FC<coreCardTitleProps> = ({
  firstWord,
  lastWord,
}) => {
  return (
    <div className="bg-gray-800 p-9 text-4xl font-bold space-y-2">
      <p className="text-white">{firstWord}</p>
      <p className="text-white bg-orange-600 w-fit p-2">{lastWord}</p>
    </div>
  );
};

export default CoreValuesTitleCards;
