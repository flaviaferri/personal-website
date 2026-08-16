export default function Leaf({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* A small sprig — the site's signature motif */}
      <path
        d="M12 22V7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M12 12C12 12 8.5 11.6 6.8 9.4C5.1 7.2 5.6 3.5 5.6 3.5C5.6 3.5 9.3 4 11 6.2C12.7 8.4 12 12 12 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 15C12 15 15.5 14.6 17.2 12.4C18.9 10.2 18.4 6.5 18.4 6.5C18.4 6.5 14.7 7 13 9.2C11.3 11.4 12 15 12 15Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
