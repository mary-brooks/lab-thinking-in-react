// SearchBar component receives 'handleSearchChange' as a prop
function SearchBar({ onSearchChange, onCheckBoxChange }) {
  // handleChange function is triggered on every keystroke in the input field
  const handleChange = (e) => {
    // extract current search text from the input field
    const searchText = e.target.value;
    // call the handleSearchChange function in ProductsPage
    // which will update the state with searchText
    onSearchChange(searchText);
  };

  const handleCheckBoxChange = (e) => {
    onCheckBoxChange();
  };

  // render the SearchBar component with an input field and an onChange event listener
  return (
    <div>
      <h2>Search</h2>
      <input
        id="searchbar"
        type="text"
        placeholder="Search..."
        onChange={handleChange}
      ></input>
      <form>
        <input
          id="in-stock-checkbox"
          type="checkbox"
          onChange={handleCheckBoxChange}
        ></input>
        <label for="in-stock-checkbox">Only show products in stock</label>
      </form>
    </div>
  );
}

export default SearchBar;
