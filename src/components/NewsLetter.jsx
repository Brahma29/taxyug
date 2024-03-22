import React from "react";

export const NewsLetter = () => {
  return (
    <section className="bg-black py-20 bg-newsletter bg-no-repeat bg-cover">
      <div className="flex max-w-7xl px-10 mx-auto flex-col justify-center items-center gap-8 text-center">
        <h3 className="md:text-6xl text-4xl font-bold text-primary">
          Subscribe to our newsletter
        </h3>
        <p className="text-white md:text-lg opacity-70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          aperiam exercitationem quasi neque unde itaque in!
        </p>

        <form className="md:w-1/3 flex">
          <input
            type="email"
            required
            className="py-2 px-4 flex-grow"
            placeholder="Enter your email"
          />
          <button type="submit" className="py-2 px-6 bg-primary text-white">
            Subscribe
          </button>
        </form>

        <p className="text-white">We promise to not spam you!</p>
      </div>
    </section>
  );
};
