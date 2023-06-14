import React, { useState } from "react";

interface SearchbarProps {
  handleSubmit(query: string): void;
}

export const Searchbar = ({ handleSubmit }: SearchbarProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(inputValue);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={onSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onInput={handleInput}
        />
      </form>
    </header>
  );
};
