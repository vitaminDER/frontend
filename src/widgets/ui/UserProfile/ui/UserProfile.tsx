import {
    AvatarContainer, AvatarLink, ProfileLinksContainer,
    UserProfileLeftContainer,
    UserProfileRightContainer,
    UserProfileWrapper
} from "@/widgets/ui/UserProfile/ui/styles.ts";
import {Divider, Typography} from "@mui/material";
import {MaleAvatar} from "@/assets/MaleAvatar.tsx";
import {FemaleAvatar} from "@/assets/FemaleAvatar.tsx";
import {PATH} from "@/constants.ts";
import {useEffect, useState} from "react";
import {useAppDispatch} from "@/App/store/storeHooks.ts";
import {setLogout} from "@/App/store/reducers/authReducer/authSlice.ts";
import {AuthData} from "@/App/store/reducers/authReducer/authSchema.ts";
import {fetchProfile} from "@/App/store/reducers/profileReducer/services/fetchProfile.ts";
import {useAuth} from "@/App/store/hooks/useAuth.ts";
// import {getProfile} from "@/App/store/reducers/profileReducer/selectors.ts";

const profile = {
    id: '1231',
    login: 'NameUser',
    sex: 'female'
}


interface ITab {
    id: string;
    name: string;
}

const tabOptions: ITab[] = [
    {
        id: '1',
        name: 'Профиль',
    },
    {
        id: '2',
        name: 'Вход и безопасность',
    },
]

export const UserProfile = () => {
    const dispatch = useAppDispatch();
    const {id, isAuth} = useAuth();
    // const { profile} = useAppSelector(getProfile);

    const [tab, setTab] = useState<ITab>(tabOptions[0])

    const tabItems = () => {
        switch (tab.id) {
            case '1': {
                return <div>{tab.name}</div>
            }
            case '2': {
                return <div>{tab.name}</div>
            }
            default: {
                return <div>{tab.name}</div>
            }
        }
    }
    const handleLogout = () => {
        const initAuth: AuthData = {
            id: '',
            login: '',
            role: [],
            isAuth: false,
            isRegistered: false,
        }
        dispatch(setLogout(initAuth));
    };

    useEffect(() => {
        if (isAuth) {
            dispatch(fetchProfile({userId: id}));
        }
    }, [dispatch, id, isAuth]);


    return (
        <UserProfileWrapper>
            <UserProfileLeftContainer>
                <AvatarContainer>
                    <>{profile.sex === 'male' ?
                        <MaleAvatar width={'80px'} height={'80px'}/> :
                        <FemaleAvatar width={'80px'} height={'80px'}/>}</>
                    <Typography variant="button" gutterBottom>{profile.login}</Typography>
                </AvatarContainer>
                <ProfileLinksContainer><AvatarLink to={PATH.BASE} style={{textDecoration: 'none'}}>
                    <Typography variant="button" gutterBottom>Главная</Typography></AvatarLink>
                </ProfileLinksContainer>
                <ProfileLinksContainer onClick={() => setTab(tabOptions[0])}>
                    <Typography variant="button" gutterBottom>Профиль</Typography>
                </ProfileLinksContainer>
                <ProfileLinksContainer onClick={() => setTab(tabOptions[1])}>
                    <Typography variant="button" gutterBottom>Вход и безопасность</Typography>
                </ProfileLinksContainer>
                <ProfileLinksContainer onClick={handleLogout}>
                    <Typography variant="button" gutterBottom>Выход</Typography>
                </ProfileLinksContainer>
            </UserProfileLeftContainer>
            <Divider orientation="vertical" variant="middle" flexItem/>
            <UserProfileRightContainer><>{tabItems()}</>
            </UserProfileRightContainer>
        </UserProfileWrapper>
    );
};
