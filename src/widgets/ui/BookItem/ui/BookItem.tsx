import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../App/store/storeHooks.ts";
import {useEffect} from "react";
import {fetchItemBook} from "../../../../App/store/reducers/bookItemReducer/services.ts";
import {getItemBookSelector} from "../../../../App/store/reducers/bookItemReducer/selectors.ts";

export const BookItem = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const {book, loadingBooks, errorBooks} = useAppSelector(getItemBookSelector)
    const bookId = id && id.slice(1);

    console.log(bookId);

    useEffect(() => {
        dispatch(fetchItemBook({id: bookId}))
    }, []);

    if (errorBooks) {
        return <div>{errorBooks}</div>
    }

    return (
        <div style={{color: '#000'}}>
            <div>Название :{book?.title}</div>
            <div>Автор : {book?.author}</div>
            <div>Год издания : {book?.year}</div>
            <div>Описание : {book?.description}</div>
            <div>Рейтинг : {book?.rating}</div>
        </div>
    );
};
