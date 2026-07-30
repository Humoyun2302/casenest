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
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="5.25" />
      <circle cx="12" cy="12" r="4.15" />
      <circle cx="17.35" cy="6.65" r="0.95" fill="currentColor" stroke="none" />
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
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21.2 4.2 3.55 11.05c-.85.33-.82 1.55.05 1.82l4.55 1.42 1.95 5.85c.28.84 1.38 1.02 1.92.3l2.85-3.75 4.95 3.55c.72.52 1.72.12 1.95-.78L22.55 5.4c.26-.98-.72-1.78-1.65-1.4l.3.2z" />
      <path d="m8.2 14.35 10.15-7.05" />
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
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="8.1" r="3.35" />
      <path d="M5.2 19.4c1.55-3.05 3.85-4.55 6.8-4.55s5.25 1.5 6.8 4.55" />
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
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8.35 3.9c.45-.45 1.2-.55 1.75-.2l1.85 1.3c.5.35.65 1.02.35 1.55l-.85 1.55c-.2.35-.18.78.05 1.1l2.7 3.4c.28.35.75.48 1.18.32l1.7-.65c.55-.2 1.18.05 1.42.58l1.05 2.2c.3.6.08 1.32-.48 1.68-1.28.82-3 1.25-4.85.48-2.7-1.1-5.3-3.55-7.05-6.55-1.2-2.1-1.48-4.15-.6-5.85.32-.65.82-.98 1.28-1.4z" />
    </svg>
  );
}
