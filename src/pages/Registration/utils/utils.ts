// import type {Login} from "../ui/interface.ts";

// export const validLogin = (login: Login, setLogin: (value: Login) => void) => {
//     const valLogin = login.login?.length >= 4 && login.login?.length <= 10;
//     const hasNonLetters = /[^a-zA-Zа-яА-ЯёЁ]/.test(login.login);
//     if (!valLogin || hasNonLetters) {
//         setLogin({...login, errorLogin: 'Поле должно содержать от 4 до 10 сиволов и содержать только буквы'});
//     }
//     if (!valLogin && !hasNonLetters) {
//         setLogin({...login, errorLogin: 'Поле должно содержать от 4 до 10 сиволов'});
//     }
//     if (hasNonLetters && valLogin) {
//         setLogin({...login, errorLogin: 'Поле должно содержать только буквы'})
//     }
// }