import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message Sent Successfully!");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-lg">
        <h1 className="text-4xl font-bold text-center mb-8">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border w-full p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border w-full p-3 rounded-lg"
          />

          <textarea
            placeholder="Enter Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border w-full p-3 rounded-lg h-32"
          ></textarea>

          <button className="bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-800">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;