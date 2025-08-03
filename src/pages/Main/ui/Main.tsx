import {Link} from "react-router-dom";
import {PATH} from "@/constants.ts";

export const Main = () => {
    return (
        <div>
            <h3>Книжные новинки</h3>
            <Link to={PATH.BOOKS}>Все книги</Link>
        </div>
    );
};
