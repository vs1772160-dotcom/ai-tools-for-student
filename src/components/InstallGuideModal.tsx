import { X, CheckCircle, ExternalLink, ArrowRight } from 'lucide-react';

interface InstallGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenXml: () => void;
}

export function InstallGuideModal({ isOpen, onClose, onOpenXml }: InstallGuideModalProps) {
  if (!isOpen) return null;

  const steps = [
    {
      num: '01',
      title: 'Copy the Theme XML',
      desc: 'Click the "Copy Full XML" button in the toolbar or download the .xml file to your computer.',
      action: {
        label: 'View & Copy XML',
        onClick: () => {
          onClose();
          onOpenXml();
        },
      },
    },
    {
      num: '02',
      title: 'Open your Blogger Dashboard',
      desc: 'Go to blogger.com and log in with your Google account. Select your blog from the top-left blog selector.',
      link: 'https://www.blogger.com',
    },
    {
      num: '03',
      title: 'Navigate to "Theme" in the Sidebar',
      desc: 'In the left sidebar menu, click on "Theme". You will see your currently active blog theme.',
    },
    {
      num: '04',
      title: 'Click the Arrow next to "Customize"',
      desc: 'Next to the orange/grey "Customize" button, click the small down arrow (⌄) to reveal the options menu.',
    },
    {
      num: '05',
      title: 'Select "Edit HTML"',
      desc: 'Click "Edit HTML". Blogger will open the full source code editor of your template.',
    },
    {
      num: '06',
      title: 'Select All & Paste',
      desc: 'Press Ctrl+A (Windows) or Cmd+A (Mac) to select all existing code, delete it, and paste your new XML theme code.',
    },
    {
      num: '07',
      title: 'Save & View Blog',
      desc: 'Click the Save icon (floppy disk) in the top-right corner. Once saved, click "View Blog" at the bottom of the sidebar to see your live site!',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div>
            <h3 className="text-base font-bold text-slate-900">How to Install in Blogger (Step-by-Step)</h3>
            <p className="text-xs text-slate-500">Fast 2-minute setup guide to apply this theme to any Blogger blog</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-auto p-6 space-y-4">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-slate-50 transition-colors">
              <span className="shrink-0 w-8 h-8 rounded-lg bg-pink-100 text-pink-700 font-bold text-xs flex items-center justify-center">
                {step.num}
              </span>
              <div className="flex-1">
                <h4 className="text-sm font-bold text-slate-900 mb-1">{step.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                {step.action && (
                  <button
                    onClick={step.action.onClick}
                    className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold text-pink-600 hover:text-pink-700 hover:underline"
                  >
                    {step.action.label}
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
                {step.link && (
                  <a
                    href={step.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold text-pink-600 hover:text-pink-700 hover:underline"
                  >
                    Open Blogger.com
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}

          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-start gap-3">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold mb-0.5">Tip for Best Results:</p>
              <p className="text-emerald-700">
                In Blogger Settings &gt; Search Preferences, enable "Description" to let each post have an automatic snippet. Add tags to your posts as "Labels" (e.g. "Dev Tools", "Chatbots") and they will instantly populate the category chips!
              </p>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
          >
            Got it, Let's Preview!
          </button>
        </div>
      </div>
    </div>
  );
}
