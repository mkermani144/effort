const Button = ({ children, classes, ...props }) => (
  <button
    className={`text-sm md:text-base font-bold rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-base text-black px-3 md:px-6 py-1 md:py-2 ${classes?.join(
      " "
    )}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
