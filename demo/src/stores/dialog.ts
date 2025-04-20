import { defineStore } from "pinia";

/**
 * 定义 Dialog Store
 */
export const useDialogStore = defineStore(
    "Dialog", // 第一个参数：store 的 ID
    {
        state: () => ({
            dialogVisible: true,
            XY: [0, 0],
            LouInfo: {} as any,
            title: "详细信息",
            Position: 0,
            content: [],
            lastEvent: {} as PointerEvent,
            tag: "",
            initId: "",
        }),
        actions: {
            setDialogVisible(dialogVisible: boolean) {
                this.$patch({
                    dialogVisible,
                });
                if (!dialogVisible) {
                    this.$patch({
                        content: [],
                        tag: "",
                    });
                }
            },
            setXY(XY: Array<any>) {
                this.$patch({
                    XY,
                });
            },
            setPosition(Position: number) {
                console.log("Position", Position);
                this.$patch({
                    Position,
                });
            },
            setLastEvent(lastEvent: any) {
                this.$patch({
                    lastEvent,
                });
            },
            setDialogInfo(LouInfo: any) {
                this.$patch({
                    LouInfo,
                });
            },
            setTitle(title: string) {
                this.$patch({
                    title,
                });
            },
            setContent(content: Array<any>) {
                this.$patch({
                    content,
                });
            },
            setTag(tag: string) {
                this.$patch({
                    tag,
                });
            },
            setInitId(initId: any) {
                this.$patch({
                    initId,
                });
            },
        },
    }
);

/**
 * 定义 Traffic Dialog Store
 */
export const trafficDialogStore = defineStore(
    "trafficDialogStore", // 第一个参数：store 的 ID
    {
        state: () => ({
            showTrafficInfo: false,
            traffiActorId: "",
            traffiActorObjectId: "",
            trafficPolyLine: [] as any,
            trafficPolyLineArr: [] as any,
            trafficTypeSeleced: "",
        }),
        actions: {
            setDialogVisible(showTrafficInfo: boolean) {
                this.$patch({
                    showTrafficInfo,
                });
            },
            setTraffiActorId(traffiActorId: string) {
                this.$patch({
                    traffiActorId,
                });
            },
            setTraffiActorObjectId(traffiActorObjectId: string) {
                this.$patch({
                    traffiActorObjectId,
                });
            },
            setTrafficPolyLine(trafficPolyLine: any) {
                this.$patch({
                    trafficPolyLine,
                });
            },
            setTrafficPolyLineArr(trafficPolyLineArr: any) {
                this.$patch({
                    trafficPolyLineArr,
                });
            },
            setType(trafficTypeSeleced: string) {
                this.$patch({
                    trafficTypeSeleced,
                });
            },
        },
    }
);

/**
 * 定义 IllPre Dialog Store
 */
export const showIllPreDialogStore = defineStore(
    "IllPreDialogStore", // 第一个参数：store 的 ID
    {
        state: () => ({
            showIllPreDialog: false,
        }),
        actions: {
            setDialogVisible(showIllPreDialog: boolean) {
                this.$patch({
                    showIllPreDialog,
                });
            },
        },
    }
);