import { api } from "./createApi";
export const contactApi = api.injectEndpoints({
    endpoints: (build) => ({
        createContactUs: (build).mutation({
            query: (body) => ({
                url: "contact-me",
                method: "post",
                data: body,
            }),
        }),
        getContactUs: (build).query({
            query: () => ({
                url:"",
                method:"get",
            })
        })
    })
})
export const {useCreateContactUsMutation}=contactApi;