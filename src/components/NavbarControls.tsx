import { Monitor, Tablet, Smartphone } from 'lucide-react';

export type ViewportMode = 'desktop' | 'tablet' | 'mobile';
export type ViewType = 'home' | 'post' | 'category' | 'search' | 'error' | 'about';

interface NavbarControlsProps {
  viewport: ViewportMode;
  onViewportChange: (mode: ViewportMode) => void;
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
  brandColor?: string;
  onBrandColorChange?: (color: string) => void;
  onOpenXmlModal?: () => void;
  onOpenGuideModal?: () => void;
  onOpenAddModal?: () => void;
}

export function NavbarControls({
  viewport,
  onViewportChange,
  currentView,
  onViewChange,
  brandColor = '#DB2777',
}: NavbarControlsProps) {
  return (
    <header className="sticky top-0 z-40 bg-slate-900 border-b border-slate-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4 flex-wrap">
        {/* Left: Branding & Status */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span
              className="w-4 h-4 rounded-md transition-colors"
              style={{ backgroundColor: brandColor }}
            />
            <span className="font-bold text-sm tracking-tight text-white whitespace-nowrap">
              AI Tools Hub
            </span>
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30 whitespace-nowrap">
              Blogger Theme Preview
            </span>
          </div>
        </div>

        {/* Center: View Mode Tabs & Viewport Switcher */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* View mode toggle */}
          <div className="flex items-center bg-slate-800/90 rounded-lg p-0.5 border border-slate-700/80 text-xs font-medium">
            <button
              onClick={() => onViewChange('home')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                currentView === 'home'
                  ? 'bg-slate-700 text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onViewChange('post')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                currentView === 'post'
                  ? 'bg-slate-700 text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Single Review
            </button>
            <button
              onClick={() => onViewChange('category')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                currentView === 'category'
                  ? 'bg-slate-700 text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Category
            </button>
            <button
              onClick={() => onViewChange('about')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                currentView === 'about'
                  ? 'bg-slate-700 text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              About
            </button>
            <button
              onClick={() => onViewChange('error')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                currentView === 'error'
                  ? 'bg-slate-700 text-white shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              404 Page
            </button>
          </div>

          {/* Viewport device switcher */}
          <div className="hidden sm:flex items-center bg-slate-800/90 rounded-lg p-0.5 border border-slate-700/80">
            <button
              onClick={() => onViewportChange('desktop')}
              title="Desktop View (1280px)"
              className={`p-1.5 rounded-md transition-colors ${
                viewport === 'desktop'
                  ? 'bg-slate-700 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onViewportChange('tablet')}
              title="Tablet View (768px)"
              className={`p-1.5 rounded-md transition-colors ${
                viewport === 'tablet'
                  ? 'bg-slate-700 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Tablet className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onViewportChange('mobile')}
              title="Mobile View (390px)"
              className={`p-1.5 rounded-md transition-colors ${
                viewport === 'mobile'
                  ? 'bg-slate-700 text-white'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
