import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { store } from "../redux/store";
export const apiSlice = createApi({
    reducerPath: "apiSlice",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BASE_URL,
        prepareHeaders: (headers) => {
            headers.set("Content-Type", "application/json");
            // headers.set("ApiKey", "mGXWZKWNIDa5BEm8QvpTg+36AIpAA+6HfitgGTZHYus=");

            const token = store.getState()?.auth?.token;
            headers.set("Authorization", "Bearer " + token);
            return headers;
        },
    }),
    tagTypes: ["Post"],
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (formData) => ({
                url: "auth/sign-up",
                method: "POST",
                body: formData
            }),
        }),
        signIn: builder.mutation({
            query: ({ email, password }) => ({
                url: "auth/login",
                method: "POST",
                body: {
                    email,
                    password
                }
            }),
        }),
        getAppointments: builder.query({
            query: () => ({
                url: "appointments",
            }),
        }),
        // getChatTab: builder.query({
        //     query: () => ({
        //         url: "/api/chats",
        //     }),
        //     // refetchOnMountOrArgChange: true,
        // }),
        // deleteChatTabAPI: builder.mutation({
        //     query: (payload) => ({
        //         url: `/api/chats/${payload}`,
        //         method: "DELETE",
        //     }),
        // }),
        // getMessages: builder.mutation({
        //     query: (payload) => ({
        //         url: `/api/chats/${payload}/messages`,
        //     }),
        // }),
        // generateChatTabName: builder.mutation({
        //     query: (payload) => ({
        //         url: `/api/chats/${payload}/generate-name`,
        //         method: "PUT",
        //     }),
        // }),
        // updateChatTab: builder.mutation({
        //     query: (payload) => ({
        //         url: `/api/chats/${payload.id}`,
        //         method: "PUT",
        //         body: payload.changedData,
        //     }),
        // }),
        // pinMessage: builder.mutation({
        //     query: (payload) => ({
        //         url: `/api/chats/${payload.chatId}/messages/${payload.id}`,
        //         method: "PUT",
        //         body: payload.body,
        //     }),
        // }),
        // unpinMessage: builder.mutation({
        //     query: (payload) => ({
        //         url: `/api/chats/${payload.chatId}/messages/${payload.id}`,
        //         method: "PUT",
        //         body: payload.body,
        //     }),
        // }),
        // deleteMessage: builder.mutation({
        //     query: (payload) => ({
        //         url: `/api/chats/${payload.chatId}/messages/batch`,
        //         method: "DELETE",
        //         body: payload.body,
        //     }),
        // }),
    }),
});

export const {
    useSignInMutation,
    useSignUpMutation,
    useGetAppointmentsQuery,
} = apiSlice;