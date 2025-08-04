type CourseCardProps = {
  title: string;
  level: string;
  levelColor: string;
  description: string;
  buttonColor: string;
  textColor?: string;
};

const CourseCard = ({
  title,
  level,
  levelColor,
  description,
  buttonColor,
  textColor = "text-white",
}: CourseCardProps) => {
  return (
    <div className="bg-[#0e0e0e] border border-neutral-800 rounded-2xl p-6 flex flex-col items-start hover:scale-[1.02] 
    hover:shadow-2xl transition-transform duration-300">
      <h3 className="text-2xl font-semibold mb-2 capitalize text-white">{title}</h3>
      <p className={`text-sm uppercase ${levelColor} mb-2`}>{level}</p>
      <p className="text-base text-white mb-6">{description}</p>
      <button
        className={`mt-auto ${buttonColor} ${textColor} py-2 px-4 rounded-xl text-sm font-medium transition-colors duration-200`}
      >
        Buy now $50
      </button>
    </div>
  );
};

export default CourseCard;