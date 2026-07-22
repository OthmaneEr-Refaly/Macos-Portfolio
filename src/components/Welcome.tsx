import { useRef } from "react";

const renderText = (text, className, baseWeight = 400) => {
  return [...text].map((char, index) => (
    <span
      key={index}
      className={className}
      style={{
        fontVariationSettings: `"wght" ${baseWeight}`,
      }}>
      {char === ' ' ? '\u00A0' : char}
    </span>
  ))
}

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  return (
    <section id="Welcome" className="flex flex-col items-center justify-center min-h-screen text-center text-white">
      <p ref={subtitleRef}>
         {renderText(
          "Hi im Othmane! Welcome to my portfolio!",
          "text-3xl font-georama",
          100,
        )}

      </p>
      <h1 ref={titleRef} className="mt-7">
        {renderText(
          "Portfolio",
          "text-9xl font-georama italic",
        )
        }
      </h1>

      <div className="block md:hidden mt-8 text-sm opacity-80">
        <p>This portfolio is made for desktop/tablet users only.</p>
      </div>

    </section>
  );
};

export default Welcome;