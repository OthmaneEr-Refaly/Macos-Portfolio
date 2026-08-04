import { WindowControls } from "../components/Index.js";
import WindowWrapper from "../hoc/WindowWrapper.js";
import { DraggableCardDemo } from "@/components/DraggableCardDemo";

const Gallery = () => {
  return (
    <>
      <div id="window-header" data-window-drag className="cursor-grab active:cursor-grabbing">
        <WindowControls target="photos" />
        <h2>Gallery</h2>
      </div>
      <div className="h-[calc(100%-2.75rem)] overflow-hidden bg-neutral-100">
        <DraggableCardDemo />
      </div>
    </>
  );
};

const GalleryWindow = WindowWrapper(Gallery, "photos", {
  dragHandle: "[data-window-drag]",
});
export default GalleryWindow;
