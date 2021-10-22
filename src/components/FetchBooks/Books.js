import React, { useState, useEffect, useCallback } from "react";
import Results from "../ResultsCard/Results";
import Search from "../SearchBook/Search";
import Dropdown from "../Dropdown/Dropdown";
import axios from "axios";

const Books = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [sortedData, setSortedData] = useState([]);
  const [sortCategory, setSortCategory] = useState("");

  const fetchBooks = (e) => {
    e.preventDefault();
    setAllBooks([]);
    setSortCategory("");
    axios
      .get(`https://openlibrary.org/search.json?title=${inputValue}`)
      .then((response) => {
        response.data.docs.map((doc) => {
          let bookResults = {
            img: doc.cover_i,
            title: doc.title,
            author: doc.author_name,
            publication: doc.first_publish_year,
          };
          setAllBooks((allBooks) => [...allBooks, bookResults]);
        });
        setSortCategory("title");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const sortResults = (category) => {
      const categories = {
        title: "title",
        publication: "publication",
      };
      const sortCategory = categories[category];
      const sorted = [...allBooks].sort(
        (a, b) => b[sortCategory] - a[sortCategory]
      );
      setSortedData(sorted);
    };
    sortResults(sortCategory);
  }, [sortCategory]);

  return (
    <div className="App">
      <Search
        value={inputValue}
        setChange={(e) => setInputValue(e.target.value)}
        onClick={fetchBooks}
      />

      <Dropdown setChange={(e) => setSortCategory(e.target.value)} />

      <div>
        {sortedData.map((item, index) => (
          <div key={index}>
            <Results
              image={item.img}
              title={item.title}
              author={item.author}
              publication={item.publication}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
