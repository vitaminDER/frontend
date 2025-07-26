import {useEffect, useMemo} from "react";
import {useAppDispatch, useAppSelector} from "../../../App/store/storeHooks.ts";
import {getBooksSelector, getErrorBooksSelector} from "../../../App/store/reducers/booksReducer/selectors.ts";
import {fetchBooks} from "../../../App/store/reducers/booksReducer/services.ts";
import {BooksListContainer, BooksWrapper} from "./styles.ts";
import {Book} from '../../../widgets/ui/Book'

export const Books = () => {
    const dispatch = useAppDispatch();
    const allBooks = useAppSelector(getBooksSelector);
    const error = useAppSelector(getErrorBooksSelector);

    useEffect(() => {
        dispatch(fetchBooks());
    }, []);

    const booksList = useMemo(() => {
        return allBooks.map((el) => {
            return <Book key={el.id} book={el}/>;
        });
    }, [allBooks]);

    if (error) {
        return <div>{error}</div>
    }

    return (

        <BooksWrapper>
            <BooksListContainer>
                <>{booksList.length === 0 ? <div>нет книг</div> : booksList}</>
            </BooksListContainer>
        </BooksWrapper>
    );
};
