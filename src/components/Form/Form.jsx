import { DebounceInput } from 'react-debounce-input';
import propTypes from 'prop-types';

const Form = ({ value, onChange }) => {
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Movie Search</h2>
      <DebounceInput
        type="text"
        debounceTimeout={500}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Type here"
      />
    </form>
  );
};
Form.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
};
export default Form;
