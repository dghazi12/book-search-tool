import "./dropdown.css";

const Dropdown = ({ setChange }) => {
  return (
    <div>
      <label className="sort-label">Sort by:</label>
      <select onChange={setChange} className="dropdown-menu">
        <option value="title">Title</option>
        <option value="publication">Publication</option>
      </select>
    </div>
  );
};

export default Dropdown;
