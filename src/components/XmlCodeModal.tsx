import { useState } from 'react';
import { COMPLETE_BLOGGER_XML } from '../data/xmlTemplate';
import { Check, Copy, Download, X, Code2, AlertCircle } from 'lucide-react';

interface XmlCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  brandColor: string;
}

export function XmlCodeModal({ isOpen, onClose, brandColor }: XmlCodeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Replace default brand color if customized
  const customizedXml = COMPLETE_BLOGGER_XML.replace(
    /--brand:#DB2777;/g,
    `--brand:${brandColor};`
  ).replace(
    /content='#DB2777'/g,
    `content='${brandColor}'`
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(customizedXml);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([customizedXml], { type: 'text/xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ai-tools-hub-blogger-theme.xml';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-pink-100 text-pink-600 flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Complete Blogger XML Theme (100% Valid)</h3>
              <p className="text-xs text-slate-500">Ready to copy & paste into Blogger Theme &gt; Edit HTML</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              Download .xml
            </button>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-pink-600 rounded-lg hover:bg-pink-700 transition-colors shadow-xs"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Copy Full XML
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60 transition-colors ml-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Info Banner */}
        <div className="px-6 py-2.5 bg-amber-50 border-b border-amber-200 flex items-center gap-2 text-xs text-amber-800">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>Fixed & Completed:</strong> Your original snippet was truncated at line 282. This file contains the complete, closed XML tags, full responsive CSS, widgets, 404 handler, stats, and footer.
          </span>
        </div>

        {/* Code Viewer */}
        <div className="flex-1 overflow-auto p-4 bg-slate-950 text-slate-200 font-mono text-xs leading-relaxed select-all">
          <pre className="whitespace-pre">
            <code>{customizedXml}</code>
          </pre>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>Format: Blogger XML Layouts Version 3 · Widgets v2</span>
          <span className="font-mono text-slate-400">{customizedXml.split('\n').length} lines · {(customizedXml.length / 1024).toFixed(1)} KB</span>
        </div>
      </div>
    </div>
  );
}
