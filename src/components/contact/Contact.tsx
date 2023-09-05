import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { object, string, minLength, email } from "valibot";
import error from "../../assets/error.png";
import "./Contact.css";

interface IFormInputs {
  email: string;
  subject: string;
  body: string;
}

const schema = object({
  email: string("Your email must be a string.", [
    minLength(1, "Please enter your email."),
    email("The email address is badly formatted."),
  ]),
  subject: string("email subject is required", [
    minLength(3, "Needs to be at least 3 characters"),
  ]),
  body: string("email body is required", [
    minLength(3, "Needs to be at least 3 characters"),
  ]),
});

const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: valibotResolver(schema),
  });

  return (
    <div className="contact">
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
                  "contact-email-" + (errors?.email ? "show" : "hidden")
                }
                placeholder="Email"
                {...register("email")}
              />
              {errors?.email && (
                <p className="error">
                  <img src={error} alt="error" />
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="input-box">
              <input
                className={
                  "contact-subject-" + (errors?.subject ? "show" : "hidden")
                }
                placeholder="Subject"
                {...register("subject")}
              />
              {errors.subject && (
                <p className="error">
                  <img src={error} alt="error" />
                  {errors.subject.message}
                </p>
              )}
            </div>
          </div>
          <div className="input-box">
            <textarea
              className={
                "contact-input-body-" + (errors?.body ? "show" : "hidden")
              }
              placeholder="Body"
              {...register("body")}
            />
            {errors.body && (
              <p className="error-text">
                {" "}
                <img src={error} alt="error" />
                {errors.body.message}
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
