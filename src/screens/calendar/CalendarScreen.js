import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Colors, Typography } from "../../styles";
import { LocaleConfig, Calendar } from "react-native-calendars";
import LeftArrow from "../../assets/svg/left.svg";
import RightArrow from "../../assets/svg/right.svg";

import CalendarLogo from "../../assets/svg/calendar-large.svg";

const CalendarScreen = (props) => {
  LocaleConfig.locales["fr"] = {
    monthNames: [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ],
    monthNamesShort: [
      "Janv.",
      "Févr.",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juil.",
      "Août",
      "Sept.",
      "Oct.",
      "Nov.",
      "Déc.",
    ],
    dayNames: [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ],
    dayNamesShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
    today: "Aujourd'hui",
  };
  LocaleConfig.defaultLocale = "fr";
  return (
    <View style={styles.screen}>
      <View style={styles.calendarContainer}>
        <Calendar
          style={{
            width: "100%",
            maxWidth: "100%",
          }}
          theme={{
            backgroundColor: "#ffffff",
            calendarBackground: "#ffffff",
            textSectionTitleColor: "#b6c1cd",
            textSectionTitleDisabledColor: "#d9e1e8",
            selectedDayBackgroundColor: "#00adf5",
            selectedDayTextColor: "#ffffff",
            // todayTextColor: '#00adf5',
            dayTextColor: Colors.MEDIUM_BLACK,
            textDisabledColor: "#d9e1e8",
            //dotColor: '#00adf5',
            selectedDotColor: "#ffffff",
            //  arrowColor: "orange",
            disabledArrowColor: "#d9e1e8",
            monthTextColor: Colors.MEDIUM_BLACK,
            indicatorColor: Colors.MEDIUM_BLACK,
            textDayFontFamily: Typography.FONT_FAMILY_POPPIS,
            textMonthFontFamily: Typography.FONT_FAMILY_POPPIS,
            textDayHeaderFontFamily: Typography.FONT_FAMILY_POPPIS,
            textDayFontWeight: "bold",
            textMonthFontWeight: "bold",
            textDayHeaderFontWeight: "bold",
            textDayFontSize: 19,
            textMonthFontSize: 20,
            textDayHeaderFontSize: 19,
          }}
          //

          current={"2012-03-01"}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={"2012-05-10"}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={"2012-05-30"}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {
            console.log("selected day", day);
          }}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={(day) => {
            console.log("selected day", day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={"yyyy MM"}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {
            console.log("month changed", month);
          }}
          // Hide month navigation arrows. Default = false
          hideArrows={false}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          renderArrow={(direction) =>
            direction === "left" ? (
              <TouchableOpacity>
                <RightArrow width={16} height={16} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity>
                <LeftArrow width={16} height={16} />
              </TouchableOpacity>
            )
          }
          // Do not show days of other months in month page. Default = false
          hideExtraDays={false}
          // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={false}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
          firstDay={1}
          // Hide day names. Default = false
          hideDayNames={true}
          // Show week numbers to the left. Default = false
          showWeekNumbers={true}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={(subtractMonth) => subtractMonth()}
          // Handler which gets executed when press arrow icon right. It receive a callback can go next month
          onPressArrowRight={(addMonth) => addMonth()}
          // Disable left arrow. Default = false
          disableArrowLeft={false}
          // Disable right arrow. Default = false
          disableArrowRight={false}
          // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
          disableAllTouchEventsForDisabledDays={true}
          // Replace default month and year title with custom one. the function receive a date as parameter
          renderHeader={(date) => {
            //Return Jsx
          }}
          // Enable the option to swipe between months. Default = false
          enableSwipeMonths={true}
          // Collection of dates that have to be marked. Default = {}
          markedDates={{
            "2012-05-16": {
              selected: true,
              marked: false,
              selectedColor: Colors.MEDIUM_GRAY,
            },
            "2012-05-17": { marked: true },
            "2012-05-18": {
              marked: true,
              dotColor: Colors.ALERT,
              activeOpacity: 0,
              customTextStyle: { fontWeight: "bold" },
            },
            "2012-05-19": { disabled: true, disableTouchEvent: false },
          }}
        />
        <View style={styles.container}>
          <View style={styles.modal}>
            <View style={styles.modalBody}>
              <TouchableOpacity style={styles.calendarLogo}>
                <CalendarLogo width={56} height={56} />
              </TouchableOpacity>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>You are all done!</Text>
                <Text style={styles.modalSubTitle}>No Tasks for today!</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.LIGHT,
    flex: 1,
  },

  calendarContainer: {
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 55 : 50,
  },

  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 48,
    paddingLeft: 26,
    paddingRight: 26,
  },

  modal: {
    backgroundColor: "rgba(0, 191, 166, 0.1)",
    width: "100%",
    maxWidth: "100%",
    padding: 31,
    borderRadius: 16,
  },

  modalBody: {
    flexDirection: "row",
    alignItems: "center",
  },

  calendarLogo: {
    marginRight: 24,
  },

  modalContent: {
    maxWidth: "100%",
  },

  modalTitle: {
    color: Colors.PRIMARY,
    fontFamily: Typography.FONT_FAMILY_POPPIS,
    fontSize: 20,
    fontWeight: "bold",
  },

  modalSubTitle: {
    fontSize: 13,
    fontFamily: Typography.FONT_FAMILY_POPPIS,
    color: Colors.PRIMARY,
  },
});

export default CalendarScreen;
