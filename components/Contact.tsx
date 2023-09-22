import React, { FormEvent, useState } from "react";

export const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onContactFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          message,
        }),
        headers: {
          "content-type": "application/json",
        },
      });

      if (res.ok) {
        console.log("success");
        setSubmitted(true);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return submitted ? (
    <main className="p-4 m4">
      <h1 className="text-center text-[3em]">Thank you</h1>
      <p className="text-center">For your submission</p>
      <p className="text-center">I will be in contact with you soon</p>
    </main>
  ) : (
    <main className="my-20 mx-0 px-3 py-11">
      <div className="text-center text-[3em] my-3" id="contact">
        Contact
      </div>
      <form
        onSubmit={onContactFormSubmit}
        className="flex p-6 rounded flex-col sm:w-3/5 lg:w-1/2 m-auto"
      >
        <label htmlFor="first-name">First name</label>
        <input
          className="text-black"
          type="text"
          name="first-name"
          required
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="last-name">Last Name</label>
        <input
          className="text-black"
          type="text"
          name="last-name"
          required
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          className="text-black"
          type="email"
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="message">Message</label>
        <textarea
          className="text-black"
          name="message"
          id="message"
          cols={30}
          rows={10}
          placeholder="Message..."
          required
          onChange={(e) => setMessage(e.target.value)}
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
