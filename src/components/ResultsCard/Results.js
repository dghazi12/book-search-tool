import "./results.css";
import NotFound from "../../images/no-image-found.jpeg";

const Results = ({ image, title, author, publication }) => {
  return (
    <div className="results-container">
      <div className="img-container">
        <img
          alt={`${title} cover`}
          className="image-style"
          src={
            image
              ? `http://covers.openlibrary.org/b/id/${image}-M.jpg`
              : NotFound
          }
        />
      </div>

      <div className="info-container">
        <h2 className="book-title">{title} </h2>
        <p className="book-info">Author: {author}</p>
        <p className="book-info">Publication: {publication} </p>
      </div>
    </div>
  );
};

export default Results;
