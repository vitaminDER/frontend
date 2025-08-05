import {LinkContainer, NavContainer, NavWrapper, RightContainer} from "./styles.ts";
import {Button, Tooltip} from "@mui/material";
import {JSX} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "@/App/store/hooks/useAuth.ts";
import {PATH} from "@/constants.ts";
import {UserRole} from "@/App/store/reducers/authReducer/authSchema.ts";
import {BooksSvg} from "@/assets/BooksSvg.tsx";


export const Nav = (): JSX.Element => {
    const {isAuth, role} = useAuth();

    const navigate = useNavigate();

    return (
        <NavWrapper>
            <NavContainer>
                <LinkContainer>
                    <Tooltip color={'#fff'} title="На главную" placement="right-start" arrow>
                        <Link to={PATH.BASE}>
                            <BooksSvg/>
                        </Link>
                    </Tooltip>
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
                    {isAuth && role.includes(UserRole.ADMIN) && <Link to={PATH.ADMIN}>Admin</Link>}
                </RightContainer>
            </NavContainer>
        </NavWrapper>
    );
};
