type IconProps = {
  className?: string;
};

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TelegramIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21.5 3.5 2.8 10.8c-.9.35-.88 1.62.04 1.92l4.7 1.55 1.8 5.55c.28.86 1.4 1.05 1.95.33l2.7-3.55 4.85 3.55c.75.55 1.8.14 2.05-.78L22.7 4.7c.28-1.02-.74-1.85-1.7-1.45l-.5.25z" />
      <path d="m7.5 14.3 9.8-6.6" />
    </svg>
  );
}

export function DirectIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5.5 19.5c1.6-3.2 4-4.8 6.5-4.8s4.9 1.6 6.5 4.8" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8.2 3.8c.5-.5 1.3-.6 1.9-.2l2 1.4c.55.38.72 1.12.4 1.7l-.9 1.65a1.2 1.2 0 0 0 .1 1.3l2.85 3.55c.3.38.82.52 1.28.35l1.85-.7c.6-.22 1.28.05 1.55.62l1.15 2.35c.32.65.1 1.42-.5 1.8-1.35.88-3.15 1.35-5.1.55-2.85-1.15-5.55-3.7-7.35-6.85-1.25-2.2-1.55-4.35-.65-6.15.35-.7.9-1.05 1.42-1.55z" />
    </svg>
  );
}
