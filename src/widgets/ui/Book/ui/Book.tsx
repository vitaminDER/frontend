import image from '../../../../assets/krasnajkniga.jpg'
import {Link} from "react-router-dom";

interface BookProps {
    book: any;
    books: any;
    setBooks: (value) => void

}

export const Book = (props: BookProps) => {
    const {book, books, setBooks} = props;
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
            <div
                style={{
                    width: '240px',
                    minHeight: '370px',
                    borderRadius: '8px',
                    border: '2px solid green',
                    backgroundColor: '#df926582',
                    padding: '10px',
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'flex-start',
                }}
            >
                <div style={{
                    width: '215px',
                    height: '270px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '8px',
                    border: '2px solid #000',
                    backgroundColor: '#fff',
                }}>
                    <img src={image} width={210} height={260}/>
                </div>
                <div style={{
                    width: '215px',
                }}>
                    <div>Название: {book.title}</div>
                    <div>Автор: {book.author}
                    </div>
                </div>

            </div>
        </Link>
    );
};
