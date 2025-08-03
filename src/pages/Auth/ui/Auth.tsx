import {Link, Navigate} from "react-router-dom";
import {ChangeEvent, ReactNode, useCallback, useState} from "react";
import {Button, IconButton, InputAdornment, TextField} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {useAppDispatch, useAppSelector} from "@/App/store/storeHooks.ts";
import {getAuth} from "@/App/store/reducers/authReducer/authSelectors.ts";
import {FormStates} from "@/pages/Registration/ui/interface.ts";
import {fetchAuth, RequestAuth} from "@/App/store/reducers/authReducer/services/fetchAuth.ts";
import {PATH} from "@/constants.ts";
import {AuthWrapper, FormContainer} from "@/pages/Auth/ui/styled.ts";

export const Auth = () => {
    const {isAuth} = useAppSelector(getAuth);
    const dispatch = useAppDispatch();

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

    const validateForm = useCallback(() => {
        const valLogin = login.value?.length >= 4 && login.value?.length <= 10;
        const hasNonLetters = !/[^a-zA-Zа-яА-ЯёЁ]/.test(login.value);
        const valPass = !!pass.value && pass.value.length === 8

        if (!valLogin || !hasNonLetters) {
            setLogin({...login, error: 'Логин должен содержать от 4 до 10 символов и содержать только буквы'});
        }
        if (!valLogin && hasNonLetters) {
            setLogin({...login, error: 'Логин должен содержать от 4 до 10 символов'});
        }
        if (!hasNonLetters && valLogin) {
            setLogin({...login, error: 'Логин должен содержать только буквы'});
        }

        if (pass.value.length !== 8) {
            setPass({...pass, error: 'Пароль должен содержать 8 символов'});
        }


        const isValidForm = hasNonLetters && valLogin && valPass;

        if (isValidForm) {
            const requestParams: RequestAuth = {
                login: login.value,
                password: pass.value,
            }
            dispatch(fetchAuth(requestParams));
        }
    }, [dispatch, login, pass,]);

    if (isAuth) {
        return <Navigate to={PATH.BASE}/>
    }

    return (
        <AuthWrapper>
            <FormContainer>
                <h3>Авторизация</h3>
                <TextField
                    value={login.value}
                    helperText={login.error}
                    error={!!login.error}
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
                        onClick={validateForm}
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