import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">EduLearn</h1>

        <div className="flex gap-5 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-300" : "hover:text-yellow-200"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive ? "text-yellow-300" : "hover:text-yellow-200"
            }
          >
            Courses
          </NavLink>

          <NavLink
            to="/teachers"
            className={({ isActive }) =>
              isActive ? "text-yellow-300" : "hover:text-yellow-200"
            }
          >
            Teachers
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "text-yellow-300" : "hover:text-yellow-200"
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-yellow-300" : "hover:text-yellow-200"
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;