import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import {ButtonBlock, ButtonContainer, InfoBook, InfoBookContainer, InfoBookWrapper} from "./styles.ts";
import {Button} from "@mui/material";
import {useAppDispatch, useAppSelector} from "@/App/store/storeHooks.ts";
import {getItemBookSelector} from "@/App/store/reducers/bookItemReducer/selectors.ts";
import {deleteItemBook} from "@/App/store/reducers/bookItemReducer/services/deleteItemBook.ts";
import {PATH} from "@/constants.ts";
import {fetchItemBook} from "@/App/store/reducers/bookItemReducer/services/fetchItemBook.ts";
import {BookImage} from "@/widgets/ui/BookImage";
import {Accordion} from "@/widgets/ui/Accordion";
import {Rating} from "@/widgets/ui/Rating/ui/Rating.tsx";
import {ErrorComponent} from "@/widgets/ui/ErrorComponent";

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
        return <ErrorComponent title={errorBooks}/>
    }

    return (
        <InfoBookWrapper>
            <InfoBookContainer style={{color: '#000'}}>
                {/*<BookImage author={book?.author} bookName={book?.title}/>*/}
                <>{book?.image ? <img src={book.image} width={200} height={300}/> :
                    <BookImage bookName={book?.title} author={book?.author}/>
                }</>

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
