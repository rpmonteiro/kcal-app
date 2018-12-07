import { NativeModules, ToastAndroid } from "react-native";
import bgTimer from "react-native-background-timer";

interface TaskInfo {
  id: string;
}

const { BackgroundTaskBridge } = NativeModules;

const charms = [
  {
    id: "uuid1",
    name: "First",
    cover: "goodmorning"
  },
  {
    id: "uuid2",
    name: "Second",
    cover: "night"
  }
];

export default async function widgetTask(taskData: TaskInfo) {
  const { id } = taskData || "";
  bgTimer.setTimeout(() => {
    synchronizeWidget();
    triggerCharm(id);
  }, 0);
}

export function synchronizeWidget() {
  ToastAndroid.show("Initializing ...", ToastAndroid.SHORT);
  BackgroundTaskBridge.initializeWidgetBridge(charms);
}

function triggerCharm(id: string) {
  if (!id) {
    return;
  }
  ToastAndroid.show(`Triggering ${id}...`, ToastAndroid.SHORT);
}
