import React from 'react';
import WindowWrapper from '../hoc/WindowWrapper.js';
import useWindowStore from '../store/window.js';
import { WindowControls } from '../components/Index.js';

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile?.data;

    if (!data) return null;

    return (
        <div className="w-full h-full flex flex-col bg-white overflow-hidden text-black h-full">
            <div id="window-header" className="flex items-center px-4 py-2 border-b border-gray-200 bg-gray-100">
                <WindowControls target="txtfile" />
                <h2 className="flex-1 text-center font-semibold text-sm">{data.name}</h2>
                <div className="w-16"></div> {/* Spacer for centering the title */}
            </div>
            
            <div className="flex-1 overflow-y-auto p-8">
                {data.image && (
                    <img 
                        src={data.image} 
                        alt={data.name} 
                        className="w-full max-w-sm mx-auto rounded-lg mb-6 shadow-md object-cover" 
                    />
                )}
                
                {data.subtitle && (
                    <h3 className="text-xl font-bold mb-6 text-center">{data.subtitle}</h3>
                )}
                
                <div className="max-w-2xl mx-auto space-y-4">
                    {data.description && data.description.map((paragraph, index) => (
                        <p key={index} className="text-gray-700 leading-relaxed text-base">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

const TextWindow = WindowWrapper(Text, 'txtfile');
export default TextWindow;
