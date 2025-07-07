import { useEffect, useMemo, useState } from "react";
import { Book } from "../../../Book.tsx";
import { useAppSelector } from "../../../App/store/storeHooks.ts";
import { getBooks } from "../../../App/store/reducers/booksReducer/selectors.ts";

export const Books = () => {
  const bbb = useAppSelector(getBooks);
  const [books, setBooks] = useState([]);

  const getBookHandler = () => {
    fetch("http://localhost:8081/api/book")
      .then((response) => response.json())
      .then((json) => {
        setBooks(json);
      });
  };
  useEffect(() => {
    // fetch('http://localhost:8081/api/book')
    //     .then(response => response.json())
    //     .then(json => {
    //         setBooks(json)
    //     })
  }, []);

  const booksList = useMemo(() => {
    return books.map((el) => {
      return <Book key={el.id} book={el} books={books} setBooks={setBooks} />;
    });
  }, [books]);

  return (
    <div>
      <div>{bbb[0]}</div>
      <div style={{ color: "#000" }}>
        <button onClick={getBookHandler}> получить книги</button>
        <button
          onClick={() => {
            setBooks([]);
          }}
        >
          очистить книги
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "5px",
          color: "#000",
          flexWrap: "wrap",
        }}
      >
        {booksList}
      </div>
    </div>
  );
};
