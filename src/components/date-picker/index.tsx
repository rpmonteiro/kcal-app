import React from 'react'
import { DatePickerAndroid, Text, View, StyleSheet, TouchableNativeFeedback } from 'react-native'
import { formatDate } from 'utils/date-utils'
import { colors, textSecondary, spacing } from 'styles/common'

interface DatePickerProps {
  value: string
  changeHandler: (value: string) => void
}

export class DatePicker extends React.PureComponent<DatePickerProps> {
  openDatePicker = async () => {
    const { value, changeHandler } = this.props
    try {
      const response = await DatePickerAndroid.open({
        date: value ? new Date(value) : new Date(),
        minDate: new Date()
      })
      if (response.action !== DatePickerAndroid.dismissedAction) {
        const { day, month, year } = response
        changeHandler(new Date(year, month, day).toISOString())
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message)
    }
  }

  render() {
    const { value } = this.props

    return (
      <View style={styles.container}>
        <TouchableNativeFeedback
          onPress={this.openDatePicker}
          background={TouchableNativeFeedback.Ripple(colors.blue3)}
        >
          <View>
            <Text numberOfLines={1} style={styles.text}>
              {formatDate(value)}
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.blue3,
    textAlign: 'center'
  },
  button: {
    textAlign: 'center'
  },
  text: {
    ...textSecondary,
    paddingHorizontal: spacing.sm,
    marginBottom: 4,
    textAlign: 'center'
  }
})
