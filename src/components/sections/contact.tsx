function Contact() {
  return (
    <div id="contact" className="w-full px-4 py-12 md:py-24 lg:py-16 xl:py-24 md:px-8 lg:px-12 xl:px-16 2xl:px-[30rem] bg-secondary flex justify-center items-center">
      <div className=" w-full lg:max-w-5xl text-center">
        <h1 className="text-xl lg:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="mx-auto text-sm lg:text-xl lg:px-32 text-primary-content">
          Have questions or need support? We are here to help you navigate CBC
        </p>
        <div className="w-full max-w-md md:max-w-xl mt-8 py-6 mx-auto">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4 text-start">
              <label
                htmlFor="username"
                className="block text-primary-content text-sm font-medium mb-2"
              >
                Your name
              </label>
              <input
                type="text"
                id="username"
                className="shadow-sm appearance-none border border-primary-content/30 rounded w-full py-2 px-3 text-primary-content leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your name"
              />
            </div>

            <div className="mb-4 text-start">
              <label
                htmlFor="email"
                className="block text-primary-content text-sm font-medium mb-2"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm appearance-none border border-primary-content/30 rounded w-full py-2 px-3 text-primary-content leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your email"
              />
            </div>

            <div className="mb-4 text-start">
              <label
                htmlFor="role"
                className="block text-primary-content text-sm font-medium mb-2"
              >
                Your role
              </label>
              <select
                id="role"
                className="shadow-sm appearance-none border border-primary-content/30 rounded w-full py-2 px-3 text-primary-content leading-tight focus:outline-none focus:shadow-outline"
              >
                <option>Select role</option>
                <option>Teacher</option>
                <option>Parent</option>
                <option>Student</option>
                <option>School adminstrator</option>
                <option>Education Official</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mb-4 text-start">
              <label
                htmlFor="message"
                className="block text-primary-content text-sm font-medium mb-2"
              >
                How can we help you today?
              </label>
              <textarea
                id="message"
                rows={4}
                className="shadow-sm appearance-none border border-primary-content/30 rounded w-full py-2 px-3 text-primary-content leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your email"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-success w-full hover:bg-success-dark text-success-content font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
