import PropTypes from 'prop-types';
const Button = ({ text }) => {
  return (
    <button
      type="button"
      className="text-white bg-card hover:bg-header-color  font-bold rounded-lg text-l px-5 py-2.5  mb-2 mt-5 "
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
