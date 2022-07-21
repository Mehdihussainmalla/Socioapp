import messaging from '@react-native-firebase/messaging';
import AsyncStorage from "@react-native-async-storage/async-storage"
import notifee, { AndroidImportance } from '@notifee/react-native';
export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    // console.log('Authorization status:', authStatus);
    getFcmToken();
  }
}

const getFcmToken = async () => {
  let fcmToken = await AsyncStorage.getItem("fcmToken");
  console.log(fcmToken, "the old token")

  if (!fcmToken) {

    try {
      const fcmToken = await messaging().getToken();
      if (fcmToken) {
        console.log(fcmToken, "new generated token")
        await AsyncStorage.setItem("fcmToken", fcmToken)
      }

    } catch (error) {
      console.log(error, "error occurred during fcm token")
    }
  }

}
export const notificationListner = async () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:', remoteMessage.notification);
    navigation.navigate(remoteMessage.data.type);
  });

  messaging().onMessage(async remoteMessage => {
    console.log(remoteMessage, "receved in foreground")
    DisplayNotification(remoteMessage);

  })
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });

}
async function DisplayNotification(remoteMessage) {
  // Create a channel
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
    importance: AndroidImportance.HIGH,
  });

  // Display a notification
  await notifee.displayNotification({
    title: remoteMessage.notification.title,
    body: remoteMessage.notification.body,
    android: {
      channelId,
    },
  });
}