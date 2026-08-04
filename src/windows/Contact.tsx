import { useRef, useEffect } from "react";
import { WindowControls } from "../components/Index.js";
import useWindowStore from "../store/window.js";
import WindowWrapper from "../hoc/WindowWrapper.js";
import { socials } from "../constants";
import gsap from "gsap";
import { Send } from "lucide-react"; // Using Lucide icon for the email button

const Contact = () => {
    const cardRef = useRef(null);
    const reflectRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        // Respect motion/hover preferences
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const canHover = window.matchMedia('(hover: hover)').matches;

        // if (prefersReducedMotion || !canHover) return;

        // Initialize hue Custom Property
        gsap.set(card, { '--hue': 230 });

        // GSAP setters for performance
        const setRotX = gsap.quickTo(card, 'rotationX', { duration: 0.5, ease: 'power2.out' });
        const setRotY = gsap.quickTo(card, 'rotationY', { duration: 0.5, ease: 'power2.out' });
        const setHue = gsap.quickTo(card, '--hue', { duration: 0.5, ease: 'power2.out' });

        const handleMouseMove = (e) => {
            const rect = card.getBoundingClientRect();

            // Calculate center
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Calculate distance from center (-1 to 1)
            const mouseX = (e.clientX - centerX) / (rect.width / 2);
            const mouseY = (e.clientY - centerY) / (rect.height / 2);

            // Tilt the card
            setRotX(-mouseY * 12);
            setRotY(mouseX * 12);

            // Update hue based on X position
            setHue(230 + mouseX * 45);

            // Reflection effect
            const ref = reflectRef.current;
            if (ref) {
                const rx = ((e.clientX - rect.left) / rect.width) * 100;
                const ry = ((e.clientY - rect.top) / rect.height) * 100;
                ref.style.background = `radial-gradient(circle at ${rx}% ${ry}%, hsla(var(--hue, 230), 90%, 80%, 0.25) 0%, transparent 60%)`;
            }
        };

        const handleMouseLeave = () => {
            setRotX(0);
            setRotY(0);
            setHue(230);
            const ref = reflectRef.current;
            if (ref) {
                ref.style.background = 'transparent';
            }
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    // Filter to just Github and LinkedIn as requested
    const displaySocials = socials.filter(s => s.text.toLowerCase() === 'github' || s.text.toLowerCase() === 'linkedin');

    return (
        <div style={{ perspective: '1000px' }} className="w-full h-full flex items-center justify-center p-4">
            
            {/* SVG Filter for Liquid Warp */}
            <svg className="absolute w-0 h-0 pointer-events-none">
                <filter id="liquidWarp">
                    <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
                </filter>
            </svg>

            <div
                ref={cardRef}
                className="relative flex flex-col items-center w-[320px] rounded-[32px] p-6 text-white will-change-transform"
                style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    // Highlighting the rim and casting an ambient colored drop shadow
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4), 0 25px 50px -12px hsla(var(--hue, 230), 60%, 20%, 0.5)',
                    transformStyle: 'preserve-3d',
                    // '--hue': 10000,
                    // Optional subtle liquid warp effect
                    // filter: 'url(#liquidWarp)' // Uncomment to apply liquid distortion
                }}
            >
                {/* Moving reflection layer */}
                <div
                    ref={reflectRef}
                    className="absolute inset-0 pointer-events-none transition-none rounded-[32px] z-0 overflow-hidden"
                />

                {/* macOS Close button floating top left */}
                <div className="absolute top-5 left-5 z-20 flex gap-2">
                    <WindowControls target="contact" />
                </div>

                {/* Content wrapper for 3D pop effect */}
                <div ref={contentRef} className="relative z-10 flex flex-col items-center w-full" style={{ transform: 'translateZ(30px)' }}>

                    {/* Profile Picture */}
                    <div className="relative mt-2 mb-4">
                        <div className="absolute inset-0 rounded-full bg-white/20 blur-md animate-pulse"></div>
                        <img
                            src="/images/Othmane-Piano.JPG"
                            alt="Othmane"
                            className="relative w-32 h-32 rounded-full object-cover border border-white/40 shadow-lg"
                        />
                    </div>

                    {/* Name and Description */}
                    <h2 className="text-xl font-bold mb-1 tracking-wide">Othmane Er-Refaly</h2>
                    <p className="text-sm text-center text-white/70 mb-6 px-2 leading-relaxed font-light">
                        Full-Stack Developer who creates delightful digital experiences.
                    </p>

                    {/* Social Buttons Grid */}
                    <div className="grid grid-cols-2 gap-3 w-full mb-6">
                        {displaySocials.map(({id, link, icon, text}) => (
                            <a
                                key={id}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 transition-all hover:scale-105 active:scale-95"
                            >
                                <img src={icon} alt={text} className="w-5 h-5 brightness-0 invert opacity-90" />
                                <span className="text-sm font-medium">{text}</span>
                            </a>
                        ))}
                    </div>

                    {/* Contact Bottom Button */}
                    <a
                        href="mailto:Othmanerefaly@gmail.com"
                        className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-white text-blue-600 hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 shadow-md font-semibold"
                    >
                        <Send size={18} />
                        <span>Email Me</span>
                    </a>

                </div>
            </div>
        </div>
    );
};

const ContactWindow = WindowWrapper(Contact, 'contact');
export default ContactWindow;