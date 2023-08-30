import React, { useState, useEffect } from "react";
import { config } from "dotenv";
config();

interface Errors {
  fullName?: boolean;
  email?: boolean;
  subject?: boolean;
  message?: boolean;
}

export const Contact: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    let tempErrors: Errors = {};
    let isValid: boolean = true;

    if (fullName.length <= 0) {
      tempErrors["fullName"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    return isValid;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      try {
        const res = await fetch(
          `https://portfolio-2023-p4p3kebh4-michellejanay.vercel.app/api/sendgrid`,
          {
            body: JSON.stringify({
              fullName: fullName,
              from: process.env.FROM || "",
              email: email,
              subject: subject,
              message: message,
            }),
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
          }
        );

        if (res.ok) {
          setFullName("");
          setEmail("");
          setMessage("");
          setSubject("");
          console.log("Email sent successfully");
        } else {
          setFullName("");
          setEmail("");
          setMessage("");
          setSubject("");
          console.error("Failed to send email");
          return;
        }
      } catch (error) {
        console.error("Error: ", error);
      }
    }

    setFullName("");
    setEmail("");
    setMessage("");
    setSubject("");
  };

  return (
    <main className="my-20 mx-0 px-3 py-11">
      <div className="text-center text-[3em] my-3" id="contact">
        Contact
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex p-6 rounded flex-col sm:w-3/5 lg:w-1/2 m-auto "
      >
        <label htmlFor="first-name">Full Name *</label>
        <input
          type="text"
          name="full-name"
          className="text-black"
          required
          onChange={(e) => {
            setFullName(e.target.value);
          }}
        />
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          name="email"
          className="text-black"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="Subject">Subject</label>
        <input
          type="subject"
          name="subject"
          className="text-black"
          required
          onChange={(e) => {
            setSubject(e.target.value);
          }}
        />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          className="text-black"
          cols={30}
          rows={10}
          placeholder="Message..."
          required
          onChange={(e) => {
            setMessage(e.target.value);
          }}
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
