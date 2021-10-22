import "./search.css";

const Search = ({ value, setChange, onClick }) => {
  return (
    <div className="main-container">
      <h1 className="main-header">Book Search Tool - Open Library</h1>
      <div>
        <input
          title="Search For Books"
          type="search"
          placeholder="Search Title"
          value={value}
          onChange={setChange}
          required
          className="bar-style"
        />
        <button
          onClick={onClick}
          type="submit"
          value="Search"
          className="search-button"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
