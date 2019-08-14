import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import * as Calendar from 'expo-calendar';
import * as Permissions from 'expo-permissions';

import { Button } from '../Button';
import { onBackPress, ensurePermissions } from '../../utils/hooks';
import { IosBackButton } from '../IosBackButton';
import { CommonStyles, SIZES } from '../../styles/common';

const CALENDAR_CONFIG = {
  title: 'MealBellCalendar',
  name: 'MealBellCalendar',
  accessLevel: Calendar.CalendarAccessLevel.OWNER,
  ownerAccount: 'MealBellCalendar',
  color: 'green',
  entityType: Calendar.EntityTypes.EVENT,
  source: {
    isLocalAccount: true,
    name: 'MealBellCalendar',
  },
};

const END_OF_TIME = new Date('12/31/9999');

export function AlarmPage(props) {
  const [calendar, setCalendar] = useState();
  onBackPress(() => {
    props.history.push('/');
  });

  // ensurePermissions(
  //     async () => {
  //       const calendars = await Calendar
  //           .getCalendarsAsync(CALENDAR_CONFIG.entityType);
  //       let mealBellCalendar = calendars
  //           .find((calendar) => calendar.name === CALENDAR_CONFIG.name);
  //       if (!mealBellCalendar) {
  //         await Calendar.createCalendarAsync(CALENDAR_CONFIG);
  //         mealBellCalendar = (await Calendar
  //             .getCalendarsAsync(CALENDAR_CONFIG.entityType))
  //             .find((calendar) => calendar.name === CALENDAR_CONFIG.name);
  //       }
  //       setCalendar(mealBellCalendar);
  //     },
  //     (permissionName) => {
  //       const prefix = permissionName ?
  //         `The ${permissionName} permission is` :
  //         'All permissions are';
  //       Alert.alert(
  //           'Permission denied',
  //           `${prefix} Required to access this page`
  //       );
  //       props.history.push('/');
  //     },
  //     [
  //       Permissions.CALENDAR,
  //       Permissions.REMINDERS,
  //     ]
  // );

  return (
    <View style={CommonStyles.pageContainer}>
      <View style={styles.inContainer}>
        <IosBackButton />
        <Button style={CommonStyles.button}
          onPress={() => props.history.push('/alarms/schedule?meal=breakfast') }
          // if (!calendar) return;
          // const today = new Date();

          // Calendar.createEventAsync(calendar.id, {
          //   title: 'Breakfast',
          //   startDate: new Date(`${today.getMonth()}/${today.getDate()}/${today.getFullYear()} 9:00 am`),
          //   endDate: END_OF_TIME,
          //   recurrenceRule: {
          //     frequency: Calendar.Frequency.DAILY,
          //     interval: 1,
          //     endDate: END_OF_TIME,
          //   },
          // });
          
        >
          <Text style={CommonStyles.buttonText}>Breakfast</Text>
        </Button>
        <Button
          style={CommonStyles.button}
          onPress={() => props.history.push('/alarms/schedule?meal=lunch') }
        >
          <Text style={CommonStyles.buttonText}>Lunch</Text>
        </Button>
        <Button
          style={CommonStyles.button}
          onPress={() => props.history.push('/alarms/schedule?meal=dinner') }
        >
          <Text style={CommonStyles.buttonText}>Dinner</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inContainer: {
    width: SIZES.WIDTHS.normal,
  },
  question: {
    fontSize: SIZES.FONTS.normal,
    marginBottom: SIZES.MARGINS.normal,
  },
});
