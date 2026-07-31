import React from 'react';
import useWindowStore from '../store/window.js';
import WindowWrapper from '../hoc/WindowWrapper.js';
import { WindowControls } from '../components/Index.js';

const Text = () => {
  const { windows } = useWindowStore();
  const txtfile = windows.txtfile;

  if (!txtfile?.data) return null;

  const { name, image, subtitle, description } = txtfile.data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>
      <div className="p-5 overflow-y-auto h-[calc(100%-2rem)]">
        {image && <img src={image} alt={name} className="mb-4 rounded" />}
        {subtitle && <h3 className="mb-2 font-semibold">{subtitle}</h3>}
        {description && description.map((para, index) => (
          <p key={index} className="mb-2">{para}</p>
        ))}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, 'txtfile');
export default TextWindow;