export function Logo() {
  return (
    <div className="logo" aria-hidden="true">
      <svg
        className="logo__svg"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="CASENEST CN monogram"
      >
        <defs>
          <linearGradient id="cnMetal" x1="15%" y1="5%" x2="85%" y2="95%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="38%" stopColor="#D0D0D0" />
            <stop offset="68%" stopColor="#A6A6A6" />
            <stop offset="100%" stopColor="#F0F0F0" />
          </linearGradient>
        </defs>

        <circle
          cx="60"
          cy="60"
          r="54.5"
          fill="none"
          stroke="url(#cnMetal)"
          strokeWidth="2.35"
        />

        <g fill="url(#cnMetal)">
          {/*
            Letter C — open ring facing right.
            Built as outer arc minus inner arc (evenodd).
          */}
          <path
            fillRule="evenodd"
            d="
              M 74 27.5
              A 33.5 33.5 0 1 0 74 92.5
              L 74 82.5
              A 23.5 23.5 0 1 1 74 37.5
              Z
            "
          />

          {/*
            Letter N — classic geometric N sitting in the C opening.
          */}
          <path d="M55 33h12v30L91 33h14v54H93V57L69 87H55V33Z" />
        </g>
      </svg>
    </div>
  );
}
