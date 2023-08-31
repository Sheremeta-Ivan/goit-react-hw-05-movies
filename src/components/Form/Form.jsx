import { DebounceInput } from 'react-debounce-input';
import propTypes from 'prop-types';

const Form = ({ value, onChange }) => {
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="pl-6 pr-6 container text-center ml-auto mr-auto"
      >
        <h2 className="mb-10 mt-10 text-4xl font-bold tracking-tight text-white">
          Movie Search
        </h2>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <DebounceInput
            className="text-white block w-full p-4 pl-10 text-m border border-header-color rounded-lg bg-card mb-[40px]"
            type="text"
            debounceTimeout={500}
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder="Type here"
          />
        </div>
      </form>
    </>
  );
};
Form.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
};
export default Form;
