import React from 'react';
import useWindowStore from '../store/window.js';
import WindowWrapper from '../hoc/WindowWrapper.js';
import { WindowControls } from '../components/Index.js';

const Image = () => {
  const { windows } = useWindowStore();
  const imgfile = windows.imgfile;

  if (!imgfile?.data) return null;

  const { name, imageUrl } = imgfile.data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>
      <div className="flex items-center justify-center p-5 h-[calc(100%-2rem)] bg-[#1e1e1e]">
        {imageUrl && (
          <img 
            src={imageUrl} 
            alt={name} 
            className="max-w-full max-h-full object-contain shadow-lg" 
          />
        )}
      </div>
    </>
  );
};

const ImageWindow = WindowWrapper(Image, 'imgfile');
export default ImageWindow;
