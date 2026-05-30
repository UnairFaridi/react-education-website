import CourseCard from "../components/CourseCard";

function Courses() {
  const courses = [
    {
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      name: "Web Development",
      instructor: "Ali Ahmed",
      duration: "3 Months",
      price: 120,
    },

    {
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      name: "React JS",
      instructor: "Sara Khan",
      duration: "2 Months",
      price: 100,
    },

    {
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      name: "JavaScript",
      instructor: "Usman Ali",
      duration: "1.5 Months",
      price: 80,
    },
  ];

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10">
        Our Courses
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            image={course.image}
            name={course.name}
            instructor={course.instructor}
            duration={course.duration}
            price={course.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;