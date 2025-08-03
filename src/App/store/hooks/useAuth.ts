import {useAppSelector} from "@/App/store/storeHooks.ts";
import {getAuth} from "@/App/store/reducers/authReducer/authSelectors.ts";

export const useAuth = () => {
    const {id, email, login, isAuth, isRegistered, role} = useAppSelector(getAuth);
    return {
        id, email, login, isAuth, isRegistered, role
    }
}