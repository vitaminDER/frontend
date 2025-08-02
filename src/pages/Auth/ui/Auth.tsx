import {AuthWrapper, FormContainer} from "./styled.ts";
import {Link, Navigate} from "react-router-dom";
import {ChangeEvent, ReactNode, useState} from "react";
import {Button, IconButton, InputAdornment, TextField} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {PATH} from "../../../constants.ts";
import {useAppSelector} from "../../../App/store/storeHooks.ts";
import {getAuth} from "../../../App/store/reducers/authReducer/authSelectors.ts";
import type {FormStates} from "../../Registration/ui/interface.ts";

export const Auth = () => {
    const {isAuth} = useAppSelector(getAuth);

    const [login, setLogin] = useState<FormStates>({value: '', error: ''});
    const [pass, setPass] = useState<FormStates>({value: '', error: ''});

    const handleLogin = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const valueLogin: string = e.target.value;
        setLogin({...login, value: valueLogin, error: ''})
    };

    const handlePass = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const valuePass: string = e.target.value;
        if (valuePass.length <= 8) {
            setPass({...pass, value: valuePass, error: ''});
        }
    };

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
                    value={login.value}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleLogin(e)}
                    id="outlined-multiline-flexible"
                    label="Login"
                    sx={{width: '500px'}}
                />
                <TextField
                    type={showPassword ? 'text' : 'password'}
                    value={pass.value}
                    helperText={pass.error}
                    error={!!pass.error}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handlePass(e)}
                    id="outlined-multiline-flexible"
                    label="Password"
                    sx={{width: '500px'}}
                    slotProps={{
                        input: {
                            endAdornment: <InputAdornment position="end">
                                <IconButton
                                    aria-label={
                                        showPassword ? 'hide the password' : 'display the password'
                                    }
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    edge="end"
                                >
                                    <>{showPassword ? <VisibilityOffIcon/> : <VisibilityIcon/>}</>
                                </IconButton>
                            </InputAdornment> as ReactNode,
                        },
                    }}
                />
                <Button sx={{width: '500px', height: '50px'}}
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