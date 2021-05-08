import { useState } from "react";
import data from "../data/section3";
const Section3 = () => {
  const [cards] = useState(data);
  return (
    <section className="section-2 md:grid grid-cols-2 xl:grid-cols-4 xl:mx-20">
      {cards.map((card) => {
        const { id, image, title, desc, link } = card;

        return (
          <article key={id} className="p-8">
            <div>
              <img src={image} alt="card" />
              <h3 className="font-semibold text-xl mt-2 mb-1">{title}</h3>
              <p>{desc}</p>
              <button className="cursor-pointer text-red-600 font-semibold">
                {link}
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Section3;
