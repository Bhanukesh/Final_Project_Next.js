import CourseCard from "./CourseCard";

const Pricing = () => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-8 lg:px-20">
      <h2 className="text-4xl md:text-4xl font-bold text-center mb-12 capitalize">
        Courses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <CourseCard
          title="CSS"
          level="For beginners"
          levelColor="text-white"
          description="Learn the basics of CSS and how to style your web pages."
          buttonColor="bg-white hover:bg-gray-200"
           textColor="text-black"
        />
        <CourseCard
          title="JavaScript"
          level="For beginners"
          levelColor="text-white"
          description="Learn the basics of JavaScript and how to add interactivity to your web pages."
          buttonColor="bg-white hover:bg-gray-200"
          textColor="text-black"
        />
        <CourseCard
          title="ReactJS"
          level="For beginners"
          levelColor="text-white"
          description="Learn the basics of ReactJS and how to build dynamic user interfaces."
          buttonColor="bg-white hover:bg-gray-200"
          textColor="text-black"
        />
        <CourseCard
          title="NextJS"
          level="For beginners"
          levelColor="text-white"
          description="Learn the basics of NextJS and how to build server-side rendered applications."
          buttonColor="bg-white hover:bg-gray-200"
          textColor="text-black"
        />
      </div>
    </section>
  );
};

export default Pricing;