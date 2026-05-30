import TeacherCard from "../components/TeacherCard";

function Teachers() {
  const teachers = [
    {
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Ahmed Ali",
      subject: "React JS",
      experience: "5 Years",
    },

    {
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Sara Khan",
      subject: "Graphic Design",
      experience: "4 Years",
    },

    {
      image:
        "https://randomuser.me/api/portraits/men/75.jpg",
      name: "Usman Tariq",
      subject: "JavaScript",
      experience: "6 Years",
    },
  ];

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10">
        Our Teachers
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {teachers.map((teacher, index) => (
          <TeacherCard
            key={index}
            image={teacher.image}
            name={teacher.name}
            subject={teacher.subject}
            experience={teacher.experience}
          />
        ))}
      </div>
    </div>
  );
}

export default Teachers;