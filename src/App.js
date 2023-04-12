import React, { useState } from "react";
import { getSubjects, searchBooks } from "./api";
import  "./App.css";

function App() {
  const [subjects, setSubjects] = useState([]);
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    searchBooks(query).then((data) => {
      setBooks(data);
    });
  };

  const handleSubjectClick = (subject) => {
    searchBooks(subject).then((data) => {
      setBooks(data);
    });
  };

  // useState(() => {
  //   getSubjects().then((data) => {
  //     setSubjects(data);
  //   });
  // }, []);

  return (
  
    <div>
      <div className="body"></div>
      <h1 className="header"> Books Library App</h1>
      
      <input 
       className="input"
        type="text"
        placeholder="Search Books"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button  className="button"onClick={handleSearch}>Search</button>
      <h2 className="h2">Subjects</h2>
      <ul className="ul">
        {subjects.map((subject, index) => (
          <li key={index} onClick={() => handleSubjectClick(subject)}>
            {subject}
          </li>
        ))}
      </ul>
      <h2 className="h2">Books</h2>
      <ul>
        {books.map((book) => (
          <li  classname="li"key={book.key}>
            <p>Title: {book.title}</p><br></br>
            <p>Author: {book.author_name}</p><br></br>
            <p>Published Date: {book.first_publish_year}</p><br></br>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;