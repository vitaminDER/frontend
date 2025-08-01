import {FormContainer, RegistrationWrapper} from "./styled.ts";
import {Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField} from "@mui/material";
import {ChangeEvent, ReactNode, useMemo, useState, MouseEvent} from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const Registration = () => {
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleLogin = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const valueLogin: string = e.target.value;
        const regex = /^[a-zA-Zа-яА-ЯёЁ]+$/;
        if (valueLogin.length <= 10 && regex.test(valueLogin)) {
            setLogin(valueLogin)
        }
    };

    const handlePass = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const valuePass: string = e.target.value;
        if (valuePass.length <= 8) {
            setPass(valuePass);
        }
    }

    const errorPass = useMemo(() => {
        return pass.length !== 8;
    }, [pass.length])


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <RegistrationWrapper>
            <FormContainer>
                <h3>Регистрация</h3>
                <TextField
                    value={login}
                    onChange={(e) => handleLogin(e)}
                    id="outlined-multiline-flexible"
                    label="login"
                    sx={{width: '450px'}}
                />
                <FormControl sx={{width: '450px'}} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        value={pass}
                        onChange={(e) => handlePass(e)}
                        error={errorPass}
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
                        label="Confirm password"
                    />
                </FormControl>
                <Button sx={{width: '450px'}}
                        variant="contained"
                        onClick={() => {
                        }}
                >
                    Зарегистрироваться
                </Button>

            </FormContainer>
        </RegistrationWrapper>
    );
};
