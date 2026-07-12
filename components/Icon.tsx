const defaultClassName = "h-6 w-6";

export function Icon({ name, className = defaultClassName }: { name: string; className?: string }) {
  switch (name) {
    case "WiFi":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M2 8.82A16 16 0 0 1 22 8.8" />
          <path d="M5 12.86a11 11 0 0 1 14 0" />
          <path d="M8.5 16.89a6 6 0 0 1 7 0" />
          <circle cx="12" cy="20" r="1.25" fill="currentColor" stroke="none" />
        </svg>
      );
    case "Bolt":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M13 2 5 13h5l-1 9 8-11h-5l1-9Z" />
        </svg>
      );
    case "Leaf":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M5 21c8 0 14-6 14-14V3h-4C7 3 3 7 3 15v2a4 4 0 0 0 4 4Z" />
          <path d="M7 17c3-3 6-5 11-7" />
        </svg>
      );
    case "Flame":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M12 2s4 4 4 8a4 4 0 0 1-8 0c0-2 1-4 4-8Z" />
          <path d="M8 14a6 6 0 1 0 8 0c0 3-2 5-4 5s-4-2-4-5Z" />
        </svg>
      );
    case "Phone":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <rect x="7" y="2.5" width="10" height="19" rx="2" />
          <path d="M10 5h4" />
          <circle cx="12" cy="18.5" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      );
    case "Plane":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M2 13 22 4l-5 16-4-5-5 3 1-6-7 1Z" />
        </svg>
      );
    case "Car":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M5 16 7 9h10l2 7" />
          <path d="M3 16h18v3H3z" />
          <circle cx="7" cy="19" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="17" cy="19" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "Banknote":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <circle cx="12" cy="12" r="2.5" />
          <path d="M7 9h.01M17 15h.01" />
        </svg>
      );
    case "Sun":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
        </svg>
      );
    case "Shield":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M12 3 5 6v5c0 4.5 2.9 8.6 7 10 4.1-1.4 7-5.5 7-10V6l-7-3Z" />
        </svg>
      );
    case "Heart":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="m12 20-1.4-1.3C5.4 14 2 10.9 2 7.1 2 4.9 3.8 3 6 3c1.5 0 3 .7 4 1.9C11 3.7 12.5 3 14 3c2.2 0 4 1.9 4 4.1 0 3.8-3.4 6.9-8.6 11.6Z" />
        </svg>
      );
    case "Home":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 9.5V21h14V9.5" />
          <path d="M10 21v-6h4v6" />
        </svg>
      );
    case "Briefcase":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
          <path d="M3 12h18" />
        </svg>
      );
    case "PiggyBank":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M5 13a7 7 0 0 1 7-7h2a5 5 0 0 1 5 5v4a3 3 0 0 1-3 3h-1l-1 2h-2l-.7-2H9.5L9 20H7l-.7-2H5a2 2 0 0 1-2-2v-1a3 3 0 0 1 2-2Z" />
          <circle cx="16" cy="10" r="0.8" fill="currentColor" stroke="none" />
          <path d="M10 9h3" />
        </svg>
      );
    case "CreditCard":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 10h18" />
          <path d="M7 15h3" />
        </svg>
      );
    case "Instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "TikTok":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M14 3c.5 2.4 2.1 4 4 4.5V11a8 8 0 0 1-4-1.2V16a5 5 0 1 1-5-5" />
        </svg>
      );
    case "YouTube":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <rect x="2.5" y="6" width="19" height="12" rx="4" />
          <path d="m10 9 5 3-5 3Z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "Facebook":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <path d="M14 8h3V4h-3a5 5 0 0 0-5 5v3H6v4h3v5h4v-5h3l1-4h-4V9a1 1 0 0 1 1-1Z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}
