import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

const Contact = () => {
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
          className="basis-1/2 flex justify-center"
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
            className="saturate-100 hover:saturate-50 object-contain max-w-lg rounded-sm min-w-0"
            src="../assets/unnamed.jpg"
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
            <input
              className="w-full bg-bg-shade font-montserrat font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="Name"
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

            <input
              className="w-full bg-bg-shade font-montserrat font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="Email"
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
            <textarea
              className="w-full bg-bg-shade font-montserrat font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="Message"
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
            <div className="flex justify-center md:justify-start">
              <button
                type="submit"
                className="py-3 md:px-7 px-16 rounded-sm border-2 font-leagueSpartan text-xl md:text-2xl border-bg-shade bg-dark-grey font-semibold mt-5 hover:bg-white hover:text-dark-grey/75 transition duration-500 tracking-wider text-center "
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
