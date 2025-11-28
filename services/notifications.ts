import * as Notifications from "expo-notifications";
import { SchedulableTriggerInputTypes } from "expo-notifications";
import { Alert } from "react-native";

const notificationListener = Notifications.setNotificationCategoryAsync(
  "myCategory",
  [
    {
      buttonTitle: "Hello",
      identifier: "hello",
    },
    {
      buttonTitle: "Ignore",
      identifier: "ignore",
      options: {
        isDestructive: true,
      },
    },
  ]
);

export const service = {
  setup() {

    Notifications.addNotificationResponseReceivedListener((res) => {
      Alert.alert("Id:", res.actionIdentifier);
      Alert.alert(
        "Data: ",
        res.notification.request.content.data.senderName as string
      );
    });
  },
  nofity() {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Look at that notification",
        body: "I'm so glad to see you!",
      },
      trigger: null, 
    });
  },
  scheduleNofity() {
    return Notifications.scheduleNotificationAsync({
      content: {
        title: "Look at that notification",
        body: "I'm so proud of myself!",
      },
      trigger: {
        type: SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: 4,
      },
    });
  },
  async cancel(id: string) {
    await Notifications.cancelScheduledNotificationAsync(id);
  },
  notificationWithActions() {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Look at that notification",
        body: "I'm so proud of myself!",
        categoryIdentifier: "myCategory",
        data: {
          dialogId: 33,
          senderName: "Vova",
        },
      },
      trigger: null, 
    });
  },
};