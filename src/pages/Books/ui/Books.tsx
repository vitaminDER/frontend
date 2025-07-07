import {useEffect, useMemo} from "react";
import {Book} from "../../../Book.tsx";
import {useAppDispatch, useAppSelector} from "../../../App/store/storeHooks.ts";
import {getBooksSelector, getErrorBooksSelector} from "../../../App/store/reducers/booksReducer/selectors.ts";
import {fetchBooks} from "../../../App/store/reducers/booksReducer/services.ts";

export const Books = () => {
    const dispatch = useAppDispatch();
    const allBooks = useAppSelector(getBooksSelector);
    const error = useAppSelector(getErrorBooksSelector);

    useEffect(() => {
        dispatch(fetchBooks());
    }, []);

    const booksList = useMemo(() => {
        return allBooks.map((el) => {
            return <Book key={el.id} book={el} books={allBooks}/>;
        });
    }, [allBooks]);

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div>
            <div style={{color: "#000"}}>
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
                {booksList.length === 0 ? 'нет книг' : booksList}
            </div>
        </div>
    );
};
