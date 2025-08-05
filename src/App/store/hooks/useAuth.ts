import {useAppSelector} from "@/App/store/storeHooks.ts";
import {getAuth} from "@/App/store/reducers/authReducer/authSelectors.ts";

export const useAuth = () => {
    const {id, login, isAuth, isRegistered, role} = useAppSelector(getAuth);
    return {
        id, login, isAuth, isRegistered, role,
    }
}