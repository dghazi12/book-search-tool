import "./dropdown.css";

const Dropdown = ({ setChange }) => {
  return (
    <div data-testid="dropdown">
      <label className="sort-label">Sort by:</label>
      <select onChange={setChange} className="dropdown-menu">
        <option data-testid="option1" value="title">
          Title
        </option>
        <option data-testid="option2" value="publication">
          Publication
        </option>
      </select>
    </div>
  );
};

export default Dropdown;
