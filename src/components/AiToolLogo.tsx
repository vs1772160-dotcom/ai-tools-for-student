export function AiToolLogo({ type, className = 'w-10 h-10' }: { type?: string; className?: string }) {
  switch (type) {
    case 'chatgpt':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M22.28 12.16a6.83 6.83 0 0 0-.54-5.32 6.94 6.94 0 0 0-4.82-3.4 6.88 6.88 0 0 0-5.76 1.48 6.87 6.87 0 0 0-4.46.22 6.93 6.93 0 0 0-3.6 4.38 6.87 6.87 0 0 0 .9 5.86 6.83 6.83 0 0 0 .54 5.32 6.94 6.94 0 0 0 4.82 3.4 6.88 6.88 0 0 0 5.76-1.48 6.87 6.87 0 0 0 4.46-.22 6.93 6.93 0 0 0 3.6-4.38 6.87 6.87 0 0 0-.9-5.86Zm-8.48 8.94a5.3 5.3 0 0 1-3.23-1.1l.16-.09 3.8-2.19a.8.8 0 0 0 .4-.69v-5.36l1.6.93v4.44a5.32 5.32 0 0 1-2.73 4.06Zm-7.7-3.32a5.33 5.33 0 0 1-.69-3.35l.16.1 3.8 2.19a.8.8 0 0 0 .8 0l4.64-2.68v1.85l-3.85 2.22a5.34 5.34 0 0 1-4.86-.33ZM4.44 9.1a5.32 5.32 0 0 1 2.54-2.25v4.56a.8.8 0 0 0 .4.69l4.64 2.68-1.6.93-3.85-2.22A5.33 5.33 0 0 1 4.44 9.1Zm12.44 3.02-4.64-2.68 1.6-.93 3.85 2.22a5.32 5.32 0 0 1 2.13 4.38 5.33 5.33 0 0 1-2.54 2.25v-4.56a.8.8 0 0 0-.4-.68Zm1.96-3.89-.16-.09-3.8-2.19a.8.8 0 0 0-.8 0l-4.64 2.68V6.78l3.85-2.22a5.33 5.33 0 0 1 5.55.53 5.3 5.3 0 0 1 .69 3.35v.01l-.69-.23Zm-8.64-4.84a5.3 5.3 0 0 1 3.23 1.1l-.16.09-3.8 2.19a.8.8 0 0 0-.4.69v5.36l-1.6-.93V8.04a5.32 5.32 0 0 1 2.73-4.65Zm1.16 6.37 2.12-1.22 2.12 1.22v2.45l-2.12 1.23-2.12-1.23v-2.45Z" />
        </svg>
      );

    case 'gemini':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z" />
        </svg>
      );

    case 'claude':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 3c.5 4 3 6.5 7 7-4 .5-6.5 3-7 7-.5-4-3-6.5-7-7 4-.5 6.5-3 7-7zm0 3c-.4 2.6-2.4 4.6-5 5 2.6.4 4.6 2.4 5 5 .4-2.6 2.4-4.6 5-5-2.6-.4-4.6-2.4-5-5z" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      );

    case 'cursor':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" fill="currentColor" fillOpacity="0.2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );

    case 'perplexity':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 2v8M12 14v8M2 12h8M14 12h8M4.93 4.93l5.66 5.66M13.41 13.41l5.66 5.66M4.93 19.07l5.66-5.66M13.41 10.59l5.66-5.66" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'midjourney':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" fill="currentColor" fillOpacity="0.15" />
          <path d="M6 6h10" />
          <path d="M6 10h10" />
          <path d="M6 14h6" />
          <polygon points="12 8 16 12 12 16 12 8" fill="currentColor" />
        </svg>
      );

    case 'v0':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M2 19.5 12 3l10 16.5H2Z" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      );
  }
}
