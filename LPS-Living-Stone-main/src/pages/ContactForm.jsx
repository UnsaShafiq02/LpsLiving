import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles, MapPin, Phone } from 'lucide-react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Accounting and Business Tax',
    message: '',
    verify: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative overflow-hidden py-28 bg-gradient-to-br from-[#224C26] via-[#0b5c42] to-[#064635]">

      {/* glow */}
      <div className="absolute top-[-180px] left-[-160px] w-[520px] h-[520px] bg-white/10 blur-3xl rounded-full" />
      <div className="absolute bottom-[-180px] right-[-160px] w-[520px] h-[520px] bg-white/5 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16 text-white">

          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-xs uppercase tracking-[0.25em] backdrop-blur-xl">
            <Sparkles size={14} />
            Get in Touch
          </div>

          <h2 className="mt-6 text-4xl md:text-6xl font-black">
            Contact Our Experts
          </h2>

          <p className="mt-5 text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Fill out the form and our team will respond with professional guidance tailored to your business.
          </p>

        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-3 gap-12">

          {/* LEFT */}
          <motion.div className="space-y-6">

            {/* INFO */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-7 border border-white/20 text-white hover:scale-[1.02] transition">

              <h3 className="text-2xl font-black">LPS Livingstone</h3>

              <div className="mt-6 space-y-5 text-white/80">

                <div className="flex gap-3">
                  <MapPin className="text-white" />
                  <p>Wenzel House, Tolpits Lane, WD18 9AB</p>
                </div>

                <div className="flex gap-3">
                  <Phone className="text-white" />
                  <p className="font-medium">020 7278 0007</p>
                </div>

              </div>

              {/* SOCIAL */}
              <div className="mt-6 flex gap-3">

                {[FaFacebookF, FaTwitter].map((Icon, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-white/10 hover:bg-white/20 cursor-pointer transition"
                  >
                    <Icon className="text-white" />
                  </div>
                ))}

              </div>

            </div>

            {/* CTA */}
            <div className="bg-white text-[#224C26] rounded-3xl p-7 font-bold hover:scale-[1.02] transition">

              <h3 className="text-xl">Need Urgent Help?</h3>
              <p className="text-sm mt-2 text-[#0D2040] font-normal">
                Call us directly for fast accounting support.
              </p>

              <p className="mt-5 text-2xl font-black text-[#224C26]">
                020 7278 0007
              </p>

            </div>

          </motion.div>

          {/* FORM */}
          <motion.div className="lg:col-span-2 bg-white/10 backdrop-blur-xl rounded-[32px] border border-white/20 p-10 md:p-14">

            <div className="grid md:grid-cols-2 gap-7">

              {['name', 'email', 'phone'].map((field) => (
                <input
                  key={field}
                  name={field}
                  placeholder={field.toUpperCase()}
                  value={form[field]}
                  onChange={handleChange}
                  className="px-6 py-5 rounded-xl bg-white/10 text-white placeholder-white/60 border border-white/20 focus:ring-2 focus:ring-white outline-none"
                />
              ))}

              <select
                name="interest"
                value={form.interest}
                onChange={handleChange}
                className="px-6 py-5 rounded-xl bg-white/10 text-white border border-white/20 focus:ring-2 focus:ring-white"
              >
                <option>Accounting</option>
                <option>VAT</option>
                <option>Payroll</option>
              </select>

            </div>

            <textarea
              name="message"
              rows="6"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              className="w-full mt-7 px-6 py-5 rounded-xl bg-white/10 text-white placeholder-white/60 border border-white/20 focus:ring-2 focus:ring-white outline-none"
            />

            <div className="mt-8 grid md:grid-cols-2 gap-7">

              <input
                name="verify"
                placeholder="Verification"
                value={form.verify}
                onChange={handleChange}
                className="px-6 py-5 rounded-xl bg-white/10 text-white border border-white/20 focus:ring-2 focus:ring-white"
              />

              <button className="px-8 py-5 rounded-xl bg-white text-[#224C26] font-bold hover:bg-[#f0f0f0] transition flex items-center justify-center gap-2">

                Send Message
                <Send size={18} />

              </button>

            </div>

          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ContactForm;