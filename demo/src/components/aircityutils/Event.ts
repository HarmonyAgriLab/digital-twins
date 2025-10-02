
import {
    useDialogStore,
} from "@/stores/dialog";
import { getIdByName } from "@/utils";
import _ from "lodash";
const dialogStore = useDialogStore();

// 事件接口定义
interface IEvent {
    eventtype: string;
    PropertyName?: string;
    UserData?: string;
    ObjectID?: string;
    Id?: string;
    GroupID?: string;
    MouseClickPoint?: number[];
    Type?: string;
}

// 主事件处理函数
const OnEvent = async (e: IEvent) => {
    const lastEvent = dialogStore.lastEvent;
    // const Router = useRouter();
    console.log(e);
    // 但是现在有的挑战是：
    // 1. 不知道人家的标签是什么
    // 2. 不知道水稻有没有ID和标签

    if (e.eventtype === "LeftMouseButtonClick") {

        // TODO：设计一个点击大棚，然后就能把大棚放在画面中间的功能

        if(e.GroupID && e.GroupID === "XXXX"){
            // TODO： 只需要设计一个移动的效果就可以了
            // __g.camera.set(20624.46375, -25193.784062, 28127.0275, -29.541687, -136.716873, 0.8)
        }
        // 处理水稻标签点击事件
        // TODO： 可以只写一个水稻的事件，需要弹出一个对话框
        if (e.GroupID && e.GroupID === "水稻标签") {

            await __g.marker.showAll();
            await __g.customObject.clear();
            dialogStore.setTag(e.GroupID || "");
            await __g.camera.set(
                16492.83625,
                -24422.545,
                43240.465,
                -47.072544,
                -131.161789,
                0.8
            );
           
        }
        // 设置弹窗位置和内容
        const lastEvent = dialogStore.lastEvent;
        dialogStore.setXY([lastEvent?.clientX, lastEvent?.clientY]);
        if (e.UserData) {
            dialogStore.setContent(JSON.parse(e.UserData));
        }
        dialogStore.setTag(e.GroupID || "");
        dialogStore.setDialogVisible(true);
    }

};

export default OnEvent;
// 等待函数，用于异步操作中的延时
const waitFor = (timeout = 100) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, timeout);
    });
};