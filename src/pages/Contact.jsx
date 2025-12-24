import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_PUBLIC_KEY")
      .then(
        () => {
          setLoading(false);
          setStatus("Message sent successfully!");
          setFormData({ from_name: "", from_email: "", message: "" });
        },
        () => {
          setLoading(false);
          setStatus("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0b0f1a] via-[#0e1324] to-black flex items-center">
      <div className="max-w-4xl mx-auto px-6 py-24 w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-cyan-400 uppercase tracking-widest text-sm">
            Contact
          </h2>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            Get In Touch
          </h1>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Have a question, opportunity, or just want to say hello? Drop a
            message and I’ll get back to you.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-6"
        >
          <div>
            <label className="block text-gray-300 mb-1">Name</label>
            <input
              type="text"
              name="from_name"
              required
              value={formData.from_name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-md text-white focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="from_email"
              required
              value={formData.from_email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-md text-white focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Message</label>
            <textarea
              name="message"
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-md text-white focus:outline-none focus:border-cyan-400 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-cyan-400 text-black font-semibold rounded-md hover:bg-cyan-300 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="text-center text-sm mt-2 text-gray-300">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
