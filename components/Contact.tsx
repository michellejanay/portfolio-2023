import React from "react";

export const Contact = () => {
  return (
    <main className="my-32">
      <div className="text-center text-[3em] my-3" id="contact">
        Contact
      </div>
      <form action="" className="flex flex-col sm:w-3/5 lg:w-1/2 m-auto ">
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
      </form>
    </main>
  );
};
