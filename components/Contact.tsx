import React from "react";

export const Contact = () => {
  return (
    <main className="my-20 mx-0 px-3 py-11">
      <div className="text-center text-[3em] my-3" id="contact">
        Contact
      </div>
      <form
        action=""
        className="flex bg-black p-6 rounded flex-col sm:w-3/5 lg:w-1/2 m-auto "
      >
        <label htmlFor="first-name">First Name</label>
        <input type="text" name="first-name" required />
        <label htmlFor="last-name">Last Name</label>
        <input type="text" name="first-name" required />
        <label htmlFor="email">Email</label>
        <input type="email" name="first-name" required />
        <label htmlFor="first-name">Message</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Message..."
          required
        />
        <button
          type="submit"
          className="mt-2 mb-3 mx-24 px-4 py-2 border rounded-lg"
        >
          Send message
        </button>
      </form>
    </main>
  );
};
