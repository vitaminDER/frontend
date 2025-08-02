import {PATH} from "../../../constants.ts";
import {Link} from "react-router-dom";

export const Main = () => {
    return (
        <div>
            <h3>Книжные новинки</h3>
            <Link to={PATH.BOOKS}>Все книги</Link>
        </div>
    );
};
