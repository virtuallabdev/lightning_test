import { Router } from "@lightningjs/sdk";
import { About, Splash } from "../pages";


export const routes: Router.Config = {
    root: "splash",
    routes: [
        {
            path: 'splash',
            component: Splash
        },
        {
            path: 'about',
            component: About
            // before: async(page: Movie)=> {
            //     page.content = (await getPopularContent("movie"))!;
            // },
            // widgets: ["menu"]
        },
    ],

    
}