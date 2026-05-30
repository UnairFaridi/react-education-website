function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center p-5 mt-10">
      <h2 className="text-xl font-bold mb-2">EduLearn</h2>

      <p>Learn modern skills with experienced teachers.</p>

      <div className="flex justify-center gap-4 mt-3">
        <p className="hover:text-blue-400 cursor-pointer">Facebook</p>
        <p className="hover:text-pink-400 cursor-pointer">Instagram</p>
        <p className="hover:text-blue-300 cursor-pointer">Twitter</p>
      </div>

      <p className="mt-4 text-sm">
        © 2026 EduLearn. Muhammad Unair Faridi.
      </p>
    </footer>
  );
}

export default Footer;