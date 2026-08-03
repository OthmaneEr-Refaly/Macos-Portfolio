import React from 'react'
import WindowWrapper from '../hoc/WindowWrapper';
import {techStack} from "../constants";
import { Check, Flag } from 'lucide-react';
import {WindowControls} from '../components/Index.js';
 

const Terminal = () => {
  return( <>
        <div id="window-header">
            <WindowControls target="terminal" />
            <h2>Tech Stack</h2>
        </div>

        <div className="techstack bg-black">
            <p className="text-white">
                <span className="font-bold text-white">@ DESKTOP: ~/Othmane% </span>
                show tech stack 
            </p>
            <div className="label">

                <p className="w-48 text-white">Categories</p>
                <p className="text-white">  Technologies</p>
            </div>


            <ul className="content text-white">
                {techStack.map(({category, items}) => (
                  <li className="flex items-center" key={category}>
                    <Check className="check" size="20"/>
                    <h3>{category}</h3>
                    <ul>
                        {items.map((item, i) => 
                        <li key={i}>{item} {i < items.length -1 ? ',' : ''}</li>)}
                    </ul>
                  </li>
                ))}
            </ul>

            <div className="footnote">
                <p>
                    <Check size={20} className="check"/>
                    <p>Total of 5 Categories found</p>
                </p>
                <p className="text-white">
                    <Flag size={15} fill="black"/>
                    Render time: 0.3s
                </p>
            </div>
        </div>
    </>
    );
};

const TerminalWindow = WindowWrapper(Terminal, 'terminal');

export default TerminalWindow;

