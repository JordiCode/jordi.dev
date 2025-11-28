const MailIcon = ({
  classes = "size-5",
  gClasses,
}: {
  classes?: string;
  gClasses?: string;
}) => {
  return (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={classes}
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className={gClasses}
        >
          <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <path d="m3 7l9 6l9-6"></path>
        </g>
      </svg>
    </span>
  );
};

export default MailIcon;
