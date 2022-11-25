import { useState } from 'react';

export const Form = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const handleChange = event => {
    const value = event.target.value.toLowerCase().trim();
    setQuery(value);
  };

  const reset = () => {
    setQuery('');
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (!query) {
      return;
    }
    onSubmit(query);
    reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        autoFocus
        autoComplete="off"
        name="search"
        value={query}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};
