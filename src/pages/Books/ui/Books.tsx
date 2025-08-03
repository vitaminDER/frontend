import {useEffect, useMemo} from "react";
import {Book} from '../../../widgets/ui/Book'
import {useAppDispatch, useAppSelector} from "@/App/store/storeHooks.ts";
import {getBooksSelector, getErrorBooksSelector} from "@/App/store/reducers/booksReducer/selectors.ts";
import {fetchBooks} from "@/App/store/reducers/booksReducer/services.ts";
import {BooksListContainer, BooksWrapper} from "@/pages/Books/ui/styles.ts";
import {BookImage} from "@/widgets/ui/BookImage";
import {Link} from "react-router-dom";

export const Books = () => {
    const dispatch = useAppDispatch();
    const allBooks = useAppSelector(getBooksSelector);
    const error = useAppSelector(getErrorBooksSelector);

    useEffect(() => {
        dispatch(fetchBooks());
    }, []);

    const booksList = useMemo(() => {
        return allBooks.map((el) => {
            // return <Book key={el.id} book={el}/>;
            return <Link key={el.id} to={`/book/:${el.id}`} style={{
                color: 'black',
                textDecoration: 'none'
            }}>
                <BookImage bookName={el.title} author={el.author}/>
            </Link>
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
