import { FormEvent, FocusEvent } from "react";
import { HeadingPrimary } from "@/app/components/Headings";
import { FaUser, FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";
import { Button } from "@nextui-org/react";

const Contact = () => {
  const handleFocus = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.parentNode?.classList.add("focus");
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.value === "") {
      e.target.parentNode?.classList.remove("focus");
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="section-container mb-6 md:mb-36">
      <HeadingPrimary
        title="Contact"
        subtitle="Get in Touch"
        context={<Button variant="bordered" color="primary" className="font-medium">Feel Free to Reach Out</Button>}
      />

      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.75fr_2fr] justify-items-center items-center gap-16 order-2 md:order-1">
          <div className="hidden md:block">
            <img src="/images/contact.svg" alt="Contact Illustration" className="h-72 w-[480px]" />
          </div>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="space-y-4 mb-4">
              <div className="grid md:grid-cols-2 gap-4">
                {/* Name Input */}
                <InputField label="Name" name="name" type="text" placeholder="John Doe" onFocus={handleFocus} onBlur={handleBlur} required />
                {/* Email Input */}
                <InputField label="Email" name="email" type="email" placeholder="example@mail.com" onFocus={handleFocus} onBlur={handleBlur} required />
              </div>
              {/* Project Input */}
              <InputField label="Project" name="project" type="text" placeholder="What's the topic?" onFocus={handleFocus} onBlur={handleBlur} required />
              {/* Message Textarea */}
              <TextareaField label="Message" name="message" placeholder="Feel free to share your thoughts..." onFocus={handleFocus} onBlur={handleBlur} required />
            </div>
            {/* Submit Button */}
            <div className="form-submit">
              <Button color="primary" variant="shadow" type="submit">Send Message</Button>
            </div>
          </form>
        </div>
        <ContactInfo />
      </div>
    </section>
  );
};

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
  onFocus: (e: FocusEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
}

const InputField = ({ label, name, type, placeholder, required, onFocus, onBlur }: InputFieldProps) => (
  <div className="relative">
    <input
      type={type}
      className="input w-full px-5 py-2 border-2 border-solid border-foreground/40 bg-transparent text-base rounded-xl"
      name={name}
      id={name}
      onFocus={onFocus}
      onBlur={onBlur}
      maxLength={35}
      autoComplete={name}
      placeholder={placeholder}
      required={required}
    />
    <label htmlFor={name} className="input-label font-medium absolute left-6 pointer-events-none translate-y-[.65rem]">
      {label}
    </label>
  </div>
);

interface TextareaFieldProps {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  onFocus: (e: FocusEvent<HTMLTextAreaElement>) => void;
  onBlur: (e: FocusEvent<HTMLTextAreaElement>) => void;
}

const TextareaField = ({ label, name, placeholder, required, onFocus, onBlur }: TextareaFieldProps) => (
  <div className="relative">
    <textarea
      className="input px-6 py-2 min-h-24 border-2 border-solid border-foreground/40 w-full bg-transparent text-base rounded-xl resize-y"
      name={name}
      id={name}
      onFocus={onFocus}
      onBlur={onBlur}
      maxLength={500}
      autoComplete={name}
      placeholder={placeholder}
      required={required}
    ></textarea>
    <label htmlFor={name} className="input-label font-medium absolute left-6 pointer-events-none translate-y-[.65rem]">
      {label}
    </label>
  </div>
);

const ContactInfo = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 order-1 md:order-2">
    {contactDetails.map(({ icon: Icon, title, detail }, index) => (
      <div key={index} className="flex items-center gap-x-4 bg-white shadow px-4 py-2 rounded-xl">
        <Icon className="text-4xl text-primary" />
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-sm">{detail}</p>
        </div>
      </div>
    ))}
  </div>
);

const contactDetails = [
  { icon: FaUser, title: "Freelance", detail: "Available Right Now" },
  { icon: FaEnvelope, title: "Email", detail: "saqeibrayza@gmail.com" },
  { icon: FaPhone, title: "Phone", detail: "+991 1234 567890" },
  { icon: FaLocationDot, title: "Address", detail: "Dhaka, Bangladesh" },
];

export default Contact;
