import { PanelLeft, ShieldHalf } from 'lucide-react';
import { WindowControls } from '../components/Index.js';
import WindowWrapper from '../hoc/WindowWrapper';
import { ChevronLeft, ChevronRight, RefreshCcw, Share2, Search, Share, Plus, Copy } from 'lucide-react';

const Safari = () => {
  return (
    <div className="w-full h-full flex flex-col bg-white rounded-xl overflow-hidden shadow-xl border border-gray-300/50">
      <div id="window-header" className="flex items-center px-4 py-2 border-b border-gray-200 bg-gray-100/90 backdrop-blur-md z-10 relative">
         <WindowControls target="safari"/>
         
         <div className="flex items-center ml-8 gap-4">
             <PanelLeft className="w-5 h-5 text-gray-500 hover:text-black cursor-pointer transition-colors"/>
             <div className="flex items-center gap-3">
                 <ChevronLeft className="w-5 h-5 text-gray-300 cursor-default"/>
                 <ChevronRight className="w-5 h-5 text-gray-300 cursor-default"/>
             </div>
         </div>

        <div className="flex-1 flex justify-center px-4">
            <div className="flex items-center w-full max-w-xl bg-white border border-gray-300/60 rounded-md px-3 py-1 shadow-sm gap-2">
                <ShieldHalf className="w-4 h-4 text-gray-400"/>
                <Search className="w-4 h-4 text-gray-400" />
                <input 
                    type="text" 
                    placeholder="Search or enter website name" 
                    className="flex-1 outline-none bg-transparent text-sm text-center font-medium text-gray-700 placeholder-gray-400"
                    defaultValue="portfolio.othmane.dev"
                />
                <RefreshCcw className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"/>
            </div>
        </div>
        
        <div className="flex items-center gap-4 text-gray-500">
            <Share className="w-5 h-5 hover:text-black cursor-pointer transition-colors"/>
            <Plus className="w-5 h-5 hover:text-black cursor-pointer transition-colors"/>
            <Copy className="w-5 h-5 hover:text-black cursor-pointer transition-colors"/>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="flex-1 bg-white flex items-center justify-center relative">
          <div className="text-center">
              <h1 className="text-4xl font-semibold text-gray-200 tracking-tight">Safari</h1>
          </div>
      </div>
    </div>
    );
};

const SafariWindow = WindowWrapper(Safari, 'safari');

export default SafariWindow;