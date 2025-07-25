import {useParams} from "react-router-dom";

export const BookItem = () => {
    const {id} = useParams();
    return (
        <div>
            BookItem {id}
        </div>
    );
};
