import {FormContainer, RegistrationWrapper} from "./styled.ts";
import {Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField} from "@mui/material";
import {ChangeEvent, ReactNode, useState, MouseEvent} from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {useAppDispatch} from "../../../App/store/storeHooks.ts";
import {
    fetchRegistration,
    RequestRegistration
} from "../../../App/store/reducers/authReducer/services/fetchRegistration.ts";


export const Registration = () => {
    const dispatch = useAppDispatch();
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [passConfirm, setPassConfirm] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleLogin = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const valueLogin: string = e.target.value;
        setLogin(valueLogin)
    };
    const handleEmail = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const valueEmail: string = e.target.value;
        setEmail(valueEmail)

    };

    const handlePass = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const valuePass: string = e.target.value;
        if (valuePass.length <= 8) {
            setPass(valuePass);
        }
    };
    const handlePassConfirm = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const valuePassConfirm: string = e.target.value;
        if (valuePassConfirm.length <= 8) {
            setPassConfirm(valuePassConfirm);
        }
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleMouseUpPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);
    const handleMouseDownConfirmPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleMouseUpConfirmPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    const handleSubmit = () => {
        const requestParams: RequestRegistration = {
            login: login,
            email: email,
            password: pass,
        }
        dispatch(fetchRegistration(requestParams))
    }

    return (
        <RegistrationWrapper>
            <FormContainer>
                <h3>Регистрация</h3>
                <TextField
                    value={login}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleLogin(e)}
                    id="outlined-multiline-flexible"
                    label="Login"
                    sx={{width: '450px'}}
                />
                <TextField
                    value={email}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handleEmail(e)}
                    id="outlined-multiline-flexible"
                    label="Email"
                    sx={{width: '450px'}}
                />
                <FormControl sx={{width: '450px'}} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        value={pass}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handlePass(e)}
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
                                    <>{showPassword ? <VisibilityOffIcon/> : <VisibilityIcon/>}</>
                                </IconButton>
                            </InputAdornment> as ReactNode
                        }
                        label="Password"
                    />
                </FormControl>
                <FormControl sx={{width: '450px'}} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Confirm password</InputLabel>
                    <OutlinedInput
                        value={passConfirm}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => handlePassConfirm(e)}
                        id="outlined-adornment-password"
                        type={showConfirmPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label={
                                        showConfirmPassword ? 'hide the password' : 'display the password'
                                    }
                                    onClick={handleClickShowConfirmPassword}
                                    onMouseDown={handleMouseDownConfirmPassword}
                                    onMouseUp={handleMouseUpConfirmPassword}
                                    edge="end"
                                >
                                    <>{showConfirmPassword ? <VisibilityOffIcon/> : <VisibilityIcon/>}</>
                                </IconButton>
                            </InputAdornment> as ReactNode
                        }
                        label="Confirm password"
                    />
                </FormControl>
                <Button sx={{width: '450px', height: "50px"}}
                        variant="contained"
                        onClick={handleSubmit}
                >
                    Зарегистрироваться
                </Button>

            </FormContainer>
        </RegistrationWrapper>
    );
};
