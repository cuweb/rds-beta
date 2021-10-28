const Icon = (props) => {
  const { icon, size, svg, className, onClick } = props;

  if (svg) return svg;

  const icons = {
    alert: (
      <path d='M13.339 1.75a1.54 1.54 0 0 0-1.33-.75c-.551 0-1.055.285-1.33.75L.206 19.749a1.47 1.47 0 0 0 0 1.502c.29.465.795.751 1.33.751h20.946c.55 0 1.056-.285 1.315-.75.265-.465.27-1.033.015-1.503L13.34 1.75zm.2 17.246H10.48v-3.005h3.059v3.005zm0-4.506H10.48V8.48h3.059v6.01z' />
    ),
    arrowDown: <path d='M16.8 9.6V0H7.2v9.6H0L12 24 24 9.6z' />,
    github: (
      <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z' />
    ),
    info: (
      <path d='M10.8 8.074a1.615 1.615 0 0 1-.48-1.2c0-.48.154-.891.48-1.2.326-.308.72-.48 1.2-.48s.891.155 1.2.48c.309.326.48.72.48 1.2s-.154.892-.48 1.2a1.714 1.714 0 0 1-1.2.515c-.48 0-.891-.189-1.2-.515zm2.914 3.943a1.866 1.866 0 0 0-.531-1.183c-.343-.325-.72-.514-1.183-.531h-1.714c-.463.034-.823.223-1.183.531a1.748 1.748 0 0 0-.532 1.183h1.715v5.143c.034.463.188.857.531 1.183.343.343.72.531 1.183.531h1.714c.463 0 .823-.188 1.183-.531.343-.326.514-.72.532-1.183h-1.715V12v.017zM12 2.263c-5.383 0-9.771 4.354-9.771 9.737S6.617 21.771 12 21.771c5.383 0 9.771-4.371 9.771-9.771S17.383 2.246 12 2.246v.017zM12 0c6.617 0 12 5.383 12 12s-5.383 12-12 12S0 18.651 0 12 5.383 0 12 0z' />
    ),
    plus: <path d='M24 14H14v10h-4V14H0v-4h10V0h4v10h10z' />,
    verified: (
      <path d='M23.503 10.598l-1.62-2.01a2.25 2.25 0 0 1-.463-1.155l-.285-2.547A2.265 2.265 0 0 0 19.14 2.89l-2.548-.285c-.45-.045-.84-.239-1.17-.494L13.416.494a2.256 2.256 0 0 0-2.817 0l-2.01 1.62a2.25 2.25 0 0 1-1.155.465l-2.547.285a2.264 2.264 0 0 0-1.995 1.993l-.285 2.549c-.045.45-.238.84-.493 1.17L.494 10.58a2.256 2.256 0 0 0 0 2.817l1.62 2.01c.255.33.42.72.465 1.155l.285 2.547a2.264 2.264 0 0 0 1.993 1.995l2.549.285c.45.045.84.238 1.17.493l2.008 1.62a2.255 2.255 0 0 0 2.817 0l2.01-1.62c.33-.255.72-.42 1.155-.465l2.547-.285a2.264 2.264 0 0 0 1.995-1.993l.285-2.549c.045-.45.238-.84.493-1.17l1.62-2.008a2.256 2.256 0 0 0 0-2.817l-.003.002zM9.758 18L4.51 12.756l2.25-2.25 2.997 3 7.495-7.495L19.5 8.334l-9.743 9.667z' />
    ),
    x: (
      <path d='M15.396 12L24 20.604 20.604 24 12 15.396 3.396 24 0 20.604 8.604 12 0 3.396 3.396 0 12 8.604 20.604 0 24 3.396z' />
    ),
  };

  return (
    <svg
      className='c-icon'
      viewBox={`0 0 24 24`}
      width={size || 16}
      height={size || 16}
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      className={className}
      onClick={(e) => onClick(e)}
    >
      {icons[icon] || null}
    </svg>
  );
};
export default Icon;
