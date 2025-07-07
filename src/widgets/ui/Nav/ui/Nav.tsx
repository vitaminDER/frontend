import {LinkContainer, NavContainer, NavWrapper} from "./styles.ts";
import {Avatar, Button} from "@mui/material";
import {JSX, useState} from "react";
import {Link} from "react-router-dom";
import {PATH} from "../../../../constants.ts";
import {LibLogo} from "../../../../assets/LibLogo.tsx";

export const Nav = (): JSX.Element => {
    const [isAuth, setIsAuth] = useState(true);

    return (
        <NavWrapper>
            <NavContainer>
                <LinkContainer>
                    <Avatar sx={{bgcolor: "rgba(6,227,234,0.12)"}}>
                        <LibLogo/>
                    </Avatar>
                    <Link to={PATH.BASE}>Главная</Link>
                    <Link to={PATH.TEST_PAGER}>TestPage</Link>
                </LinkContainer>
                {isAuth ? (
                    <Button
                        variant="outlined"
                        size="small"
                        onClick={() => {
                            setIsAuth((pref) => !pref);
                        }}
                    >
                        Вход
                    </Button>
                ) : (
                    <Button
                        variant="outlined"
                        size="small"
                        onClick={() => {
                            setIsAuth((pref) => !pref);
                        }}
                    >
                        Регистрация
                    </Button>
                )}
            </NavContainer>
        </NavWrapper>
    );
};
