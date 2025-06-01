'use client';

import React, { useState } from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus(data.error || 'Failed to send message');
      }
    } catch (err) {
      setStatus('Error sending message');
    }
  };

  return (
    <div id="contact" className="pt-32 container">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-8">
          <h2 className="text-5xl" data-aos="zoom-in-up">Get in touch</h2>
          <p className="text-white text-[18px] pt-2" data-aos="zoom-in-up">
            Drop me a line, give me a call, or send me a message by submitting a form.
          </p>
          <div className="flex gap-3 items-center" data-aos="zoom-in-up">
            <AiOutlineMail size={30} /> daraibarafique8627@gmail.com
          </div>
          <div className="flex gap-3 items-center" data-aos="zoom-in-up">
            <BsTelephone size={30} /> 0330-2194367
          </div>
        </div>
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={form.name}
              onChange={handleChange}
              className="h-[40px] bg-transparent border border-accent"
              required
            />
          </div>
          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              className="h-[40px] bg-transparent border border-accent"
              required
            />
          </div>
          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={8}
              value={form.message}
              onChange={handleChange}
              className="bg-transparent border border-accent"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-accent p-2 px-6"
            data-aos="zoom-in-up"
          >
            Send
          </button>
          {status && <p className="text-white mt-2">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
