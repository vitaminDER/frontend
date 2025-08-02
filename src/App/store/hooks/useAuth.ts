import {useAppSelector} from "../storeHooks.ts";
import {getAuth} from "../reducers/authReducer/authSelectors.ts";

export const useAuth = () => {
    const {id, email, login, isAuth, isRegistration, role} = useAppSelector(getAuth);
    return {
        id, email, login, isAuth, isRegistration, role
    }
}