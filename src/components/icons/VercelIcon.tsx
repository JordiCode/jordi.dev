const VercelIcon = ({ classes }: { classes?: string }) => {
  return (
    <span className={classes}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <g fill="none">
          <rect width={256} height={256} fill="#1b1b1b" rx={60}></rect>
          <path fill="#fff" d="m128 34l95 164.853H33z"></path>
        </g>
      </svg>
    </span>
  );
};

export default VercelIcon;
