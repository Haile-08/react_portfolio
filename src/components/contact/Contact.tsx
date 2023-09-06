import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { object, string, minLength, email } from "valibot";
import error from "../../assets/error.png";
import "./Contact.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

interface IFormInputs {
  from_email: string;
  from_name: string;
  message_html: string;
}

const schema = object({
  from_email: string("Your email must be a string.", [
    minLength(1, "Please enter your email."),
    email("The email address is badly formatted."),
  ]),
  from_name: string("email subject is required", [
    minLength(3, "Needs to be at least 3 characters"),
  ]),
  message_html: string("email body is required", [
    minLength(3, "Needs to be at least 3 characters"),
  ]),
});

function Contact() {
  const [formData, setFormData] = useState<IFormInputs>({
    from_email: "",
    from_name: "",
    message_html: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: valibotResolver(schema),
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    emailjs
      .send(
        "service_53inu7j",
        "template_hc7bmfc",
        formData,
        "mnCv-JDF0vzNhJ77q"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <p>Contact me</p>
      </div>
      <div className="contact-body">
        <p>SAY HI</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="contact-top">
            <div className="input-box">
              <input
                className={
                  "contact-email-" + (errors?.from_email ? "show" : "hidden")
                }
                placeholder="Email"
                {...register("from_email")}
                onChange={handleChange}
              />
              {errors?.from_email && typeof errors.from_email !== "string" && (
                <p className="error">
                  <img src={error} alt="error" />
                  {errors.from_email?.message}
                </p>
              )}
            </div>
            <div className="input-box">
              <input
                className={
                  "contact-subject-" + (errors?.from_name ? "show" : "hidden")
                }
                placeholder="Subject"
                {...register("from_name")}
                onChange={handleChange}
              />
              {errors?.from_name && typeof errors.from_name !== "string" && (
                <p className="error">
                  <img src={error} alt="error" />
                  {errors.from_name?.message}
                </p>
              )}
            </div>
          </div>
          <div className="input-box">
            <textarea
              className={
                "contact-input-body-" +
                (errors?.message_html ? "show" : "hidden")
              }
              placeholder="Body"
              {...register("message_html")}
              onChange={handleChange}
            />
            {errors?.message_html &&
              typeof errors.message_html !== "string" && (
                <p className="error-text">
                  <img src={error} alt="error" />
                  {errors.message_html?.message}
                </p>
              )}
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Send
          </motion.button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
