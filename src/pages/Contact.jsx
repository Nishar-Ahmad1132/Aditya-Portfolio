import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully! I’ll get back to you soon.");
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("Something went wrong. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0b0f1a] via-[#0e1324] to-black flex items-center">
      <div className="max-w-4xl mx-auto px-6 py-20 w-full">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-cyan-400 uppercase tracking-widest text-sm">
            Contact
          </h2>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            Let’s Work Together
          </h1>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Have a question, collaboration idea, or opportunity? Drop a message
            and I’ll respond as soon as possible.
          </p>
        </div>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="text-gray-300 text-sm">Your Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="mt-2 w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-gray-300 text-sm">Your Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="john@email.com"
                className="mt-2 w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mt-6">
            <label className="text-gray-300 text-sm">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Write your message here..."
              className="mt-2 w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
            ></textarea>
          </div>

          {/* Hidden Time Field */}
          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleString()}
          />

          {/* Button */}
          <div className="mt-8 flex flex-col items-center">
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 rounded-md bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition shadow-lg disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Status */}
            {status && (
              <p className="mt-4 text-sm text-cyan-400 text-center">{status}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
