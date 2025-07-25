import {useParams} from "react-router-dom";

export const BookItem = () => {
    const {id} = useParams();
    return (
        <div style={{color: '#000'}}>
            BookItem {id}
        </div>
    );
};
