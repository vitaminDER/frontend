import {Link} from "react-router-dom";
import {IBooks} from "@/App/store/reducers/booksReducer/booksScheme.ts";
import {BookImage} from "@/widgets/ui/BookImage";

interface BookProps {
    book: IBooks;

}

export const Book = (props: BookProps) => {
    const {book} = props;
    return (
        <Link to={`/book/:${book.id}`} style={{
            color: 'black',
            textDecoration: 'none'
        }}>
            <BookImage bookName={book.title} author={book.author}/>
        </Link>
    );
};
