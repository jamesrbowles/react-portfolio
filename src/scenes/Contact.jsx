import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const Contact = () => {
  const [nameValue, setNameValue] = useState(false);
  const [emailValue, setEmailValue] = useState(false);
  const [messageValue, setMessageValue] = useState(false);

  const handleNameValue = (e) => {
    setNameValue(e.target.value);
  };
  const handleEmailValue = (e) => {
    setEmailValue(e.target.value);
  };
  const handleMessageValue = (e) => {
    setMessageValue(e.target.value);
  };

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section
      id="contact"
      className="pt-24"
    >
      {/* HEADINGS */}
      <motion.div
        className="flex justify-end w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-leagueSpartan font-semibold sm:text-5xl text-4xl">
            <span className="text-green">GET IN</span> TOUCH
          </p>

          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          className="basis-1/2 flex justify-center items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img
            className="saturate-0 object-contain max-w-lg rounded-md min-w-0"
            src={`${process.env.PUBLIC_URL + '/assets/unnamed.jpg'}`}
            alt="contact"
          />
        </motion.div>

        <motion.div
          className="basis-1/2 mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/bbac15d4813f8e4bb1f41f54b271307b"
            method="POST"
          >
            <div className="input-group">
              <div
                className={
                  nameValue
                    ? 'text-grey input-group__label font-montserrat'
                    : 'input-group__label font-montserrat'
                }
                htmlFor="nameInput"
              >
                Name
              </div>
              <input
                onInput={handleNameValue}
                id="nameInput"
                className="input-group__input font-montserrat"
                type="text"
                {...register('name', {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="text-red mt-1">
                  {errors.name.type === 'required' && 'This field is required.'}
                  {errors.name.type === 'maxLength' &&
                    'Max length is 100 characters.'}
                </p>
              )}
            </div>

            <div className="input-group">
              <div
                className={
                  emailValue
                    ? 'text-grey input-group__label font-montserrat'
                    : 'input-group__label font-montserrat'
                }
                htmlFor="emailInput"
              >
                Email
              </div>
              <input
                onInput={handleEmailValue}
                id="emailInput"
                className="input-group__input font-montserrat"
                type="text"
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="text-red mt-1">
                  {errors.name.type === 'required' && 'This field is required.'}
                  {errors.name.type === 'pattern' && 'Invalid email address.'}
                </p>
              )}
            </div>

            <div className="input-group">
              <div
                className={
                  messageValue
                    ? 'text-grey input-group__label font-montserrat'
                    : 'input-group__label font-montserrat'
                }
                htmlFor="messageInput"
              >
                Message
              </div>
              <textarea
                onInput={handleMessageValue}
                id="messageInput"
                className="input-group__input font-montserrat"
                type="text"
                rows="4"
                cols="50"
                {...register('message', {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="text-red mt-1">
                  {errors.name.type === 'required' && 'This field is required.'}
                  {errors.name.type === 'maxLength' &&
                    'Max length is 2000 characters.'}
                </p>
              )}
            </div>

            <div className="flex justify-center md:justify-start">
              <button
                type="submit"
                className="py-3 md:px-7 px-16 rounded-sm border-2 font-leagueSpartan text-xl md:text-2xl border-green/50 bg-dark-grey hover:bg-bg-shade hover:border-green  font-semibold mt-5 transition duration-500 tracking-wider text-center"
              >
                SEND ME A MESSAGE
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
