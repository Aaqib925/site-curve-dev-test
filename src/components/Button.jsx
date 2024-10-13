/* eslint-disable react/prop-types */

const Button = ({ buttonText, styles }) => {
  return (
    <button
      className={`font-inter px-4 py-2 text-md rounded-[6px] transition duration-300 ease-in-out tracking-wide ${styles}`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
