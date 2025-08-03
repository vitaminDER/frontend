import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../App/store/storeHooks.ts";
import {useEffect} from "react";
import {fetchItemBook} from "../../../../App/store/reducers/bookItemReducer/services/fetchItemBook.ts";
import {getItemBookSelector} from "../../../../App/store/reducers/bookItemReducer/selectors.ts";
import {ButtonBlock, ButtonContainer, InfoBook, InfoBookContainer, InfoBookWrapper} from "./styles.ts";
import {BookImage} from "../../BookImage";
import {Rating} from "../../Rating/ui/Rating.tsx";
import {PATH} from "../../../../constants.ts";
import {deleteItemBook} from "../../../../App/store/reducers/bookItemReducer/services/deleteItemBook.ts";
import {Accordion} from "../../Accordion";
import {Button} from "@mui/material";

export const BookItem = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {book, errorBooks} = useAppSelector(getItemBookSelector)
    const bookId = id && id.slice(1);
    const year = book?.year ? `${book.year} г.` : '';

    const genreList = book?.genre.map((el, index) => {
        const isLast = index === book?.genre.length - 1 ? '.' : ', '
        return <span key={el.id}>{el.name.toUpperCase()}{isLast}</span>
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
        <InfoBookWrapper>
            <InfoBookContainer style={{color: '#000'}}>
                <BookImage author={book?.author} bookName={book?.title}/>
                <InfoBook>
                    <Rating rating={book ? book.rating : 0}/>
                    <h3> {book?.title.toUpperCase()}</h3>
                    <div>Автор: {book?.author}</div>

                    <div>Год издания: {year}</div>
                    <div>Описание: {book?.description}</div>
                    <div> Жанр: {genreList}</div>
                    <div>Рейтинг: {book?.rating}</div>
                </InfoBook>
            </InfoBookContainer>
            <ButtonBlock>
                <ButtonContainer>
                    <Button variant="outlined"
                            onClick={() => deleteHandler(bookId)}>Удалить</Button>
                </ButtonContainer>
                <ButtonContainer>
                    <Button variant="outlined">Читать</Button>
                </ButtonContainer>
            </ButtonBlock>
            <Accordion id={bookId}/>
        </InfoBookWrapper>
    );
};
