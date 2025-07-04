import image from './assets/krasnajkniga.jpg'
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
        const newBook = books.filter(el => el.id !== id);
        setBooks(newBook);

    }
    return (
        <div
            key={book.id}
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
            onClick={() => {
                console.log(book.id);
                deleteHandler(book.id);
            }}>
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
                display: 'flex', flexDirection: 'column',
                alignItems: 'flex-start', overflow: 'hidden',whiteSpace: 'nowrap',
                 textOverflow: 'ellipsis'
            }}>
                <div>Название: {book.title}</div>
                <div>Год издания: {book.year}</div>
                <div style={{
                    textOverflow: 'ellipsis'
                }}>Описание: {book.description}</div>
            </div>
        </div>
    );
};
