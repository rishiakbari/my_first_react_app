import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    company: "",
    query: "",
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    // remove error while typing
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  // Validate & Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.mobile.trim()) newErrors.mobile = "Mobile number is required";
    if (!form.email.trim()) newErrors.email = "Email address is required";
    if (!form.company.trim()) newErrors.company = "Company name is required";
    if (!form.query.trim()) newErrors.query = "Query cannot be empty";

    setErrors(newErrors);

    // If errors exist → stop submit
    if (Object.keys(newErrors).length > 0) return;

    // If valid → Submit action
    alert("Form Submitted Successfully!");
  };

  return (
    <section className="w-full flex justify-center py-20 px-4 mt-10">
      <div
        className="max-w-6xl w-full bg-[#0f0e1f] border border-purple-500 rounded-3xl p-10 shadow-[0_0_40px_rgba(128,0,255,0.5)]"
        data-aos="fade-right"
      >
        <h2 className="text-center text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
          Contact Us
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                onChange={handleChange}
                className={`w-full bg-black/40 border ${
                  errors.name ? "border-red-500" : "border-purple-700"
                } text-white p-4 rounded-lg focus:outline-none`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1 text-left">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <input
                name="mobile"
                type="text"
                placeholder="Mobile Number"
                onChange={handleChange}
                className={`w-full bg-black/40 border ${
                  errors.mobile ? "border-red-500" : "border-purple-700"
                } text-white p-4 rounded-lg focus:outline-none`}
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm mt-1 text-left">
                  {errors.mobile}
                </p>
              )}
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                onChange={handleChange}
                className={`w-full bg-black/40 border ${
                  errors.email ? "border-red-500" : "border-purple-700"
                } text-white p-4 rounded-lg focus:outline-none`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 text-left">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <input
                name="company"
                type="text"
                placeholder="Company Name"
                onChange={handleChange}
                className={`w-full bg-black/40 border ${
                  errors.company ? "border-red-500" : "border-purple-700"
                } text-white p-4 rounded-lg focus:outline-none`}
              />
              {errors.company && (
                <p className="text-red-500 text-sm mt-1 text-left">
                  {errors.company}
                </p>
              )}
            </div>
          </div>

          {/* Query */}
          <div>
            <textarea
              name="query"
              rows="5"
              placeholder="Your Query"
              onChange={handleChange}
              className={`w-full bg-black/40 border ${
                errors.query ? "border-red-500" : "border-purple-700"
              } text-white p-4 rounded-lg focus:outline-none`}
            ></textarea>
            {errors.query && (
              <p className="text-red-500 text-sm mt-1 text-left">
                {errors.query}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:opacity-90 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
