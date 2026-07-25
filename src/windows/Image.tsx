import React from 'react';
import WindowWrapper from '../hoc/WindowWrapper.js';
import useWindowStore from '../store/window.js';
import { WindowControls } from '../components/Index.js';

const Image = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile?.data;

    if (!data) return null;

    return (
        <div className="w-full h-full flex flex-col bg-white overflow-hidden text-black shadow-lg rounded-lg border border-gray-200">
            <div id="window-header" className="flex items-center px-4 py-2 border-b border-gray-200 bg-gray-100">
                <WindowControls target="imgfile" />
                <h2 className="flex-1 text-center font-semibold text-sm truncate">{data.name}</h2>
                <div className="w-16"></div> {/* Spacer for centering the title */}
            </div>
            
            <div className="flex-1 bg-[#1e1e1e] flex items-center justify-center overflow-hidden">
                {data.imageUrl && (
                    <img 
                        src={data.imageUrl} 
                        alt={data.name} 
                        className="max-w-full max-h-full object-contain drop-shadow-md" 
                    />
                )}
            </div>
        </div>
    );
};

const ImageWindow = WindowWrapper(Image, 'imgfile');
export default ImageWindow;
