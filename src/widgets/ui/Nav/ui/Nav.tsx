import {LinkContainer, NavContainer, NavWrapper, RightContainer} from "./styles.ts";
import {Button} from "@mui/material";
import {JSX} from "react";
import {Link, useNavigate} from "react-router-dom";
import {PATH} from "../../../../constants.ts";
import {BooksSvg} from "../../../../assets/BooksSvg.tsx";

export const Nav = (): JSX.Element => {

    const navigate = useNavigate();

    return (
        <NavWrapper>
            <NavContainer>
                <LinkContainer>
                    {/*<Avatar sx={{bgcolor: "rgba(6,227,234,0.12)"}}>*/}
                    {/*    <LibLogo/>*/}
                    {/*</Avatar>*/}
                    {/*<BooksSvg/>*/}
                    <Link to={PATH.BASE}><BooksSvg/></Link>
                    <Link to={PATH.BOOKS}>Книги</Link>
                </LinkContainer>
                <RightContainer><Button
                    sx={{width: '100px'}}
                    variant="outlined"
                    size="small"
                    onClick={() => {
                        navigate(PATH.AUTH)
                    }}
                >
                    Вход
                </Button>
                    <Link to={PATH.PROFILE}>Профиль</Link>
                </RightContainer>
            </NavContainer>
        </NavWrapper>
    );
};
