import * as React from 'react';

export interface SearchBoxProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  value: string;
}

export const SearchBox: React.FC<SearchBoxProps> = (props) => {
  const { disabled, onChange, value } = props;
  const [inputValue, setInputValue] = React.useState(value);

  return (
    <form>
      <input
        disabled={disabled}
        type="text"
        name="search"
        placeholder="Search product"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        disabled={disabled || !inputValue.length}
        type="button"
        onClick={() => onChange(inputValue)}
      >
        Search
      </button>
    </form>
  );
};
