import { FormEventHandler, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useSignUpMutation } from "../../features/apiSlice";
// import { changeStatus, getChatList } from "./redux/chatListReducer";
import { setToken } from "../../redux/authSlice";

export const useHook = () => {
    const [signUp, { data, error, isLoading }] = useSignUpMutation();

    // let cachedChat = useSelector((state) => state.chatAndMessages);
    // let activeChatId = useSelector((state) => state.activeChat);

    let dispatch = useDispatch();
    // let getChatTab = useGetChatTabQuery();
    // const { data, isLoading, refetch } = useChat();
    console.log(data, "salom bu data");
    
    const handleSignUp = async (formData: FormEventHandler<HTMLFormElement>) => {
        signUp(formData);
    }
    useEffect(() => {
        dispatch(setToken(data?.token))
    }, [data])

    return { data, isLoading, handleSignUp };
};