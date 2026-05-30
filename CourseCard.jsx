function CourseCard(props) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition duration-300">
      <img
        src={props.image}
        alt=""
        className="w-full h-52 object-cover"
      />

      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{props.name}</h2>

        <p className="text-gray-600 mb-1">
          Instructor: {props.instructor}
        </p>

        <p className="text-gray-600 mb-1">
          Duration: {props.duration}
        </p>

        <p className="text-blue-600 font-bold text-lg">
          ${props.price}
        </p>
      </div>
    </div>
  );
}

export default CourseCard;