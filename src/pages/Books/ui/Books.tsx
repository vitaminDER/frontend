import {useEffect, useMemo} from "react";
import {useAppDispatch, useAppSelector} from "@/App/store/storeHooks.ts";
import {getBooksSelector, getErrorBooksSelector} from "@/App/store/reducers/booksReducer/selectors.ts";
import {fetchBooks} from "@/App/store/reducers/booksReducer/services.ts";
import {BooksListContainer, BooksWrapper} from "@/pages/Books/ui/styles.ts";
import {BookImage} from "@/widgets/ui/BookImage";
import {Link} from "react-router-dom";
import {ErrorComponent} from "@/widgets/ui/ErrorComponent";

export const Books = () => {
    const dispatch = useAppDispatch();
    const allBooks = useAppSelector(getBooksSelector);
    const error = useAppSelector(getErrorBooksSelector);

    useEffect(() => {
        dispatch(fetchBooks());
    }, []);

    const booksList = useMemo(() => {
        return allBooks.map((el) => {
            return <Link key={el.id} to={`/book/:${el.id}`} style={{
                color: 'black',
                textDecoration: 'none'
            }}>
                <BookImage bookName={el.title} author={el.author}/>
            </Link>
        });
    }, [allBooks]);

    if (error) {
        return <ErrorComponent title={error} image={'bug'}/>
    }

    return (

        <BooksWrapper>
            <BooksListContainer>
                <>{booksList.length === 0 ? <ErrorComponent>Список книг пуст</ErrorComponent> : booksList}</>
            </BooksListContainer>
        </BooksWrapper>
    );
};
