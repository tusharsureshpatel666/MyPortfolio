import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const renderText = (text, className, baseWeight = 400) => {
  return [...text].map((char, index) => (
    <span
      key={index}
      className={className}
      style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const animateLetters = (element) => {
      const letters = element.querySelectorAll("span");

      const handleMove = (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        letters.forEach((letter) => {
          const dx = x - (letter.offsetLeft + letter.offsetWidth / 2);
          const dy = y - (letter.offsetTop + letter.offsetHeight / 2);

          const dist = Math.sqrt(dx * dx + dy * dy);
          const mapped = gsap.utils.mapRange(
            0,
            300,
            700,
            900,
            Math.min(dist, 300)
          );

          gsap.to(letter, {
            x: dx * 0.05,
            y: dy * 0.05,
            duration: 0.3,
            ease: "power2.out",
            fontVariationSettings: `'wght' ${mapped}`,
          });
        });
      };

      const handleLeave = () => {
        letters.forEach((letter) =>
          gsap.to(letter, {
            x: 0,
            y: 0,
            duration: 0.4,
            ease: "power3.out",
            fontVariationSettings: `'wght' 400`,
          })
        );
      };

      element.addEventListener("mousemove", handleMove);
      element.addEventListener("mouseleave", handleLeave);

      return () => {
        element.removeEventListener("mousemove", handleMove);
        element.removeEventListener("mouseleave", handleLeave);
      };
    };

    if (subtitleRef.current) animateLetters(subtitleRef.current);
    if (titleRef.current) animateLetters(titleRef.current);
  }, []);

  return (
    <section id="welcome">
      <p ref={subtitleRef}>
        {renderText(
          "Hey, I'm Tushar! Welcome to my",
          "text-3xl font-georama",
          100
        )}
      </p>

      <h1 ref={titleRef} className="mt-7">
        {renderText("Portfolio", "text-9xl font-georama italic", 700)}
      </h1>

      <div className="small-screen">
        <p>This Portfolio is designed for desktop/tablet screens only</p>
      </div>
    </section>
  );
};

export default Welcome;
