/* eslint-disable react/prop-types */

const Content = ({ text }) => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)] font-inter font-semibold text-3xl text-center">
      {text}
    </div>
  );
};

export default Content;
