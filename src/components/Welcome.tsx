import { Container, Subtitles } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";



const FONT_WEIGHTS = {
  subtitle : {min: 100, max: 400, default: 100},
  title : {min: 400, max: 900, default: 400},
};

const renderText = (text, className, baseWeight =400) => {
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

const setupTextHover = (container, type) =>{
  if(!container) return () => {};

  const letters = container.querySelectorAll("span");

  const {min, max, default: base} = FONT_WEIGHTS[type];

  const animateLetter = (letter, weight, duration = 0.25) => {
    return gsap.to(letter,
       {
        duration, 
        ease: "power2.out", 
        fontVariationSettings: `"wght" ${weight}`,
      }
    )
  };

    const handleMouseMove = (e) => {
      const {left, top} = container.getBoundingClientRect();
      const mouseX = e.clientX - left;

      letters.forEach((letter) => {
        const {left:l, width: w} = letter.getBoundingClientRect();
        const distance = Math.abs(mouseX - (l - left + w/2));
        const intensity = Math.exp(-(distance ** 2 ) / 2000);
        
        
        animateLetter(letter, min + (max - min) * intensity)
      });
    };

    const handleMouseLeave  = () => {
      letters.forEach((letter) => {
        animateLetter(letter, base, 0.25);
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
 
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
    
};

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    setupTextHover(titleRef.current, "title");
    setupTextHover(subtitleRef.current, "subtitle");
  }, []);

  return (
    <section id="Welcome" className="flex flex-col items-center justify-center min-h-screen text-center text-white">
      <p ref={subtitleRef}>
         {renderText(
          "Hi im Othmane! Welcome to my",
          "text-3xl  font-georama",
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