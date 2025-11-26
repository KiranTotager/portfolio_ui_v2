import { api } from "./createApi";

const HeroService=api.injectEndpoints({
    endpoints:(build)=>({
        getHeroSectionData:build.query<any,void>({
            query:()=>({
                url:"LandingPageDetail/get-landing-page-details",
                method:"get"
            })
        })
    })
})
export const {useGetHeroSectionDataQuery}=HeroService;