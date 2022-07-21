import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import notifee, { AndroidImportance } from '@notifee/react-native';


export default function ForegroundService() {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // console.log(JSON.stringify(remoteMessage), "fsdlkfsjdhigjdshf")
      DisplayNotification(remoteMessage)
    });

    return unsubscribe;
  }, []);

  const DisplayNotification = async (remoteMessage) => {
    //   console.log(remoteMessage, "remoteMessage>>>>remoteMessage")
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

  return <></>
}