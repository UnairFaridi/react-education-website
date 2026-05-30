function TeacherCard(props) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5 text-center hover:scale-105 transition duration-300">
      <img
        src={props.image}
        alt=""
        className="w-32 h-32 rounded-full mx-auto object-cover"
      />

      <h2 className="text-2xl font-bold mt-4">
        {props.name}
      </h2>

      <p className="text-gray-600 mt-2">
        Subject: {props.subject}
      </p>

      <p className="text-gray-600">
        Experience: {props.experience}
      </p>
    </div>
  );
}

export default TeacherCard;