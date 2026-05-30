function Home() {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-24 px-6">
        <h1 className="text-5xl font-bold mb-5">
          Welcome to EduLearn
        </h1>

        <p className="text-xl mb-6">
          Improve your skills with modern online courses.
        </p>

        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition">
          Explore Courses
        </button>
      </div>

      <div className="p-10">
        <h2 className="text-4xl font-bold text-center mb-10">
          Featured Courses
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold mb-3">
              Web Development
            </h3>

            <p>
              Learn HTML, CSS, JavaScript and React.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold mb-3">
              Graphic Design
            </h3>

            <p>
              Master Photoshop and Illustrator tools.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <h3 className="text-2xl font-bold mb-3">
              App Development
            </h3>

            <p>
              Build Android applications from scratch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;