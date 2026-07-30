export function Logo() {
  return (
    <div className="logo" aria-hidden="true">
      <svg
        className="logo__svg"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="CASENEST monogram"
      >
        <defs>
          <linearGradient id="ringGrad" x1="10%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="25%" stopColor="#D0D0D0" />
            <stop offset="50%" stopColor="#8E8E8E" />
            <stop offset="75%" stopColor="#E8E8E8" />
            <stop offset="100%" stopColor="#A8A8A8" />
          </linearGradient>
          <linearGradient id="monoGrad" x1="20%" y1="5%" x2="80%" y2="95%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="28%" stopColor="#C8C8C8" />
            <stop offset="52%" stopColor="#8A8A8A" />
            <stop offset="78%" stopColor="#E6E6E6" />
            <stop offset="100%" stopColor="#B8B8B8" />
          </linearGradient>
          <filter id="monoShadow" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="2" stdDeviation="1.8" floodColor="#000" floodOpacity="0.65" />
          </filter>
        </defs>

        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth="3.5"
        />

        <g filter="url(#monoShadow)" fill="url(#monoGrad)">
          {/* Open C ring */}
          <path d="M68.5 28.5c-17.8-3.2-34.2 8.6-37.4 26.4-3.2 17.8 8.6 34.2 26.4 37.4 8.2 1.5 16.2-.2 22.5-4.2l-4.8-8.2c-4.2 2.5-9.2 3.5-14.2 2.6-11.5-2.1-19.2-12.8-17.1-24.3 2.1-11.5 12.8-19.2 24.3-17.1 5 .9 9.4 3.5 12.5 7.2l6.5-7.2c-4.8-5.2-11.4-8.8-18.7-10.1z" />
          {/* N interlocking */}
          <path d="M58 36h11.2v22.5L90.5 36H104v48H92.8V61.2L71.5 84H58V36z" />
        </g>
      </svg>
    </div>
  );
}
