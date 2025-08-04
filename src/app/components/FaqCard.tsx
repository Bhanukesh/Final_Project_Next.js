type FaqCardProps = {
  question: string;
  answer: string;
};

const FaqCard = ({ question, answer }: FaqCardProps) => {
  return (
    <div className="p-6 rounded-xl bg-black shadow-md hover:shadow-xl transition-all duration-300 border border-gray-800">
      <h3 className="text-xl font-semibold mb-3 text-white">{question}</h3>
      <p className="text-gray-300 leading-relaxed">{answer}</p>
    </div>
  );
};

export default FaqCard;
