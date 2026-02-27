import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

const fields = [
  { id: 'name', label: 'Full Name', type: 'text' },
  { id: 'email', label: 'Work Email', type: 'email' },
  { id: 'message', label: 'Project Details', type: 'textarea' },
];

const ContactSection = () => (
  <section id="contact" className="section-shell">
    <SectionHeading
      eyebrow="Contact"
      title="Let’s Build Something Scalable"
      subtitle="Open to full-time roles, consulting, and architecture-focused collaborations."
    />

    <motion.form
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="glass mx-auto max-w-3xl rounded-3xl p-6 sm:p-8"
    >
      <div className="grid gap-5">
        {fields.map((field) => (
          <label key={field.id} className="group relative">
            {field.type === 'textarea' ? (
              <textarea
                id={field.id}
                name={field.id}
                rows={5}
                required
                placeholder=" "
                className="peer w-full rounded-xl border border-white/15 bg-slate-900/60 px-4 pb-3 pt-6 text-sm text-slate-100 outline-none transition focus:border-sky-300 focus:shadow-glow"
              />
            ) : (
              <input
                id={field.id}
                name={field.id}
                type={field.type}
                required
                placeholder=" "
                className="peer w-full rounded-xl border border-white/15 bg-slate-900/60 px-4 pb-3 pt-6 text-sm text-slate-100 outline-none transition focus:border-sky-300 focus:shadow-glow"
              />
            )}
            <span className="pointer-events-none absolute left-4 top-4 text-xs text-slate-400 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs peer-focus:text-sky-200">
              {field.label}
            </span>
          </label>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <Button type="submit">Send Message</Button>
      </div>
    </motion.form>
  </section>
);

export default ContactSection;
