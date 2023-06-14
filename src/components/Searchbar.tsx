import React from "react";

interface SearchbarProps {
  handleSubmit(query: string): void;
}
interface State {
  inputValue: string;
}

class Searchbar extends React.Component<SearchbarProps, State> {
  constructor(props: SearchbarProps) {
    super(props);
  }
  handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.currentTarget.value });
  };
  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.handleSubmit(this.state.inputValue);
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onInput={this.handleInput}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
