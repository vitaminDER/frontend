import {AuthWrapper, FormContainer} from "./styled.ts";
import {Link, Navigate} from "react-router-dom";
import {useState} from "react";
import {Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {PATH} from "../../../constants.ts";
import {useAppSelector} from "../../../App/store/storeHooks.ts";
import {getAuth} from "../../../App/store/reducers/authReducer/authSelectors.ts";

export const Auth = () => {
    const {isAuth} = useAppSelector(getAuth);


    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    if (isAuth) {
        return <Navigate to={PATH.BASE}/>
    }

    return (
        <AuthWrapper>
            <FormContainer>
                <h3>Авторизация</h3>
                <TextField
                    id="outlined-multiline-flexible"
                    label="login"
                    multiline
                    maxRows={4}
                    sx={{width: '450px'}}
                />
                <FormControl sx={{m: 1, width: '450px'}} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label={
                                        showPassword ? 'hide the password' : 'display the password'
                                    }
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOffIcon/> : <VisibilityIcon/>}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>

                <Button sx={{width: '450px'}}
                        variant="contained"
                        onClick={() => {
                        }}
                >
                    Войти
                </Button>

                <div onClick={() => {
                }}>Если вы еще не зарегистрированы пройдите <Link style={{color: 'blue'}}
                                                                  to={PATH.REGISTRATION}>регистрацию</Link>
                </div>
            </FormContainer>
        </AuthWrapper>
    );
};