import React from "react";
import "./output.css";
import { SendansCartSvg } from "./componets/SendansCartSvg";
import { LuxuryCartSvg } from "./componets/LuxuryCartSvg";
import { SUVSCartSvg } from "./componets/SUVSCartSvg";

const Bright_orange = "hsl(31,77%,52%)";
const Dark_cyan = "hsl(184,100%,22%)";
const Very_dark_cyan = "hsl(179,100%,13%)";

const data = [
  {
    bg: Bright_orange,
    icon: <SendansCartSvg className="mb-8" />,
    heading: "Sedans",
    para: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
  },
  {
    bg: Dark_cyan,
    icon: <LuxuryCartSvg className="mb-8" />,
    heading: "Luxury",
    para: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
  },
  {
    bg: Very_dark_cyan,
    icon: <SUVSCartSvg className="mb-8" />,
    heading: "SUVs",
    para: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
  },
];

function App() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-10 text-white">
      {data.map((item, index) => (
        <section
          key={index}
          style={{ background: item.bg }}
          className="w-[260px] py-8 px-10 mx-2 "
        >
          {item.icon}
          <h2 className="uppercase font-bold text-3xl mb-8">{item.heading}</h2>
          <p className="text-sm leading-relaxed mb-12 font-sans">{item.para}</p>
          <button
            style={{ color: item.bg }}
            className="px-6 bg-white rounded-full hover:ring-1 hover:!text-white hover:bg-inherit py-2 hover:ring-white transition-all"
          >
            Learn More
          </button>
        </section>
      ))}
    </div>
  );
}

export default App;
