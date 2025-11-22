import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const contactApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "" }),
    endpoints: (builder) => (
        {
            createContact: builder.mutation({
                query: (contact) => (
                    {
                        url: "/contact-me",
                        method: "POST",
                        body: contact,
                        headers: {

                        },
                    }
                ),
            }),
        }
    )
})
export const { useCreateContactMutation } = contactApi;