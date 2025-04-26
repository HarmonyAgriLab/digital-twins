import {defineStore} from "pinia";

export const useBuildStore = defineStore("builder", {
    state: () => ({
        BuildClass: null,
    }),

    actions: {
        changeBuildClass(buildClass: any){
            this.BuildClass = buildClass
        }
    }
})