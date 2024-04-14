import { atom, selector } from "recoil";

export const login_UserRecoil = atom({
    key: "login_UserRecoil",
    default: null,
});

export const currentChatContactRecoil = atom({
    key: "currentChatContactRecoil",
    default: null,
});
