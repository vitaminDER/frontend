import image from '../../../../assets/krasnajkniga.jpg'
import {Link} from "react-router-dom";
import type {IBooks} from "../../../../App/store/reducers/booksReducer/booksSheme.ts";
import {BookContainer, ImgContainer, InfoBook} from "./styles.ts";

interface BookProps {
    book: IBooks;

}

export const Book = (props: BookProps) => {
    const {book} = props;
    const deleteHandler = (id) => {
        fetch(`http://localhost:8081/api/book/${id}`, {
            method: 'DELETE',
        }).then(res => {
            if (res.status === 200) {
                console.log(res, 'удалена')
            } else {
                console.log('кака то хуйня')
            }
        }).catch((err) => {
            console.log('кака то хуйня')
        })
        // const newBook = books.filter(el => el.id !== id);
        // setBooks(newBook);

    }
    return (
        <Link to={`/book/:${book.id}`} style={{
            color: 'black',
            textDecoration: 'none'
        }}>
            <BookContainer>
                <ImgContainer>
                    <img src={image} width={210} height={260}/>
                </ImgContainer>
                <InfoBook>
                    <div>Название: {book.title.toUpperCase()}</div>
                    <div>Автор: {book.author}
                    </div>
                </InfoBook>

            </BookContainer>
        </Link>
    );
};
