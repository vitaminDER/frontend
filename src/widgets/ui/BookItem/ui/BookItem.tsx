import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../App/store/storeHooks.ts";
import {useEffect} from "react";
import {fetchItemBook} from "../../../../App/store/reducers/bookItemReducer/services/fetchItemBook.ts";
import {getItemBookSelector} from "../../../../App/store/reducers/bookItemReducer/selectors.ts";
import {InfoBook, PageWrapper} from "./styles.ts";
import {BookImage} from "../../BookImage";
import {Rating} from "../../Rating/ui/Rating.tsx";
import DeleteIcon from '@mui/icons-material/Delete';
import {PATH} from "../../../../constants.ts";
import {deleteItemBook} from "../../../../App/store/reducers/bookItemReducer/services/deleteItemBook.ts";

export const BookItem = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {book, errorBooks} = useAppSelector(getItemBookSelector)
    const bookId = id && id.slice(1);

    console.log(bookId);
    const ganreList = book?.genre.map(el => {
        return <span key={el.id}>{el.name}, </span>
    })
    const deleteHandler = (id) => {
        dispatch(deleteItemBook(id))
        navigate(PATH.BOOKS)
    }

    useEffect(() => {
        dispatch(fetchItemBook({id: bookId}))
    }, []);

    if (errorBooks) {
        return <div>{errorBooks}</div>
    }

    return (
        <PageWrapper style={{color: '#000'}}>
            <BookImage author={book?.author} bookName={book?.title}/>
            <InfoBook>
                <Rating rating={book ? book.rating : 0}/>
                <h3> {book?.title.toUpperCase()}</h3>
                <div>Автор: {book?.author}</div>
                <div>Год издания: {book?.year}г.</div>
                <div>Описание: {book?.description}</div>
                <div> Жанр: {ganreList}</div>
                <DeleteIcon onClick={() => deleteHandler(bookId)}/>
            </InfoBook>
        </PageWrapper>
    );
};
