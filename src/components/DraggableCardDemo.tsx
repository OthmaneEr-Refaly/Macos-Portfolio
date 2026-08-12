import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export function DraggableCardDemo() {
  const items = [
    {
      title: "Moroccan Gaming Expo",
      image:
        "../images/IMG_9110.HEIC",
        // Othmane-1.JPG
      className: "absolute top-6 left-[12%] rotate-[-5deg]",
    },
    {
      title: "1337",
      image:"../images/Othmane-1.JPG",
      className: "absolute top-28 left-[18%] rotate-[-7deg]",
    },
    {
      title: "UM6P-1337 Orientation Day",
      image:
        "../images/gallery-photo4.jpeg",
      className: "absolute top-4 left-[36%] rotate-[8deg]",
    },
    {
      title: "X-bition",
      image:
        "../images/IMG_6731.JPG",
      className: "absolute top-24 left-[52%] rotate-[10deg]",
    },
    {
      title: "Me",
      image:
        "../images/IMG_4878.JPG",
      className: "absolute top-14 right-[18%] rotate-[2deg]",
    },
    {
      title: "1337",
      image:
        "../images/IMG_6757.HEIC",
      className: "absolute top-20 left-[40%] rotate-[-7deg]",
    },
    {
      title: "StartGate",
      image:
        "../images/IMG_4481.HEIC",
      className: "absolute top-8 left-[26%] rotate-[4deg]",
    },
  ];

  return (
    <DraggableCardContainer className="relative flex h-full w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-xs -translate-y-3/4 text-center text-xl font-black text-neutral-400 md:text-2xl dark:text-neutral-800">
        You are now viewing a collection of moments from my life, and hopefully, you are having fun too.
      </p>
      {items.map((item) => (
        <DraggableCardBody
          key={item.title}
          className={`min-h-52 w-44 p-3 ${item.className}`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-40 w-full object-cover"
          />
          <h3 className="mt-2 text-center text-sm font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
