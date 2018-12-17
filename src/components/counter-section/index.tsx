import React from 'react'
import { NumberInput } from 'components/input'
import { View, StyleSheet, Text } from 'react-native'
import { margins, spacing, colors } from 'styles/common'
import { ThreeButtons } from 'components/three-buttons'

interface Props {
  value: number
  label: string
  changeHandler: (value: number) => void
}

export class CounterSection extends React.Component<Props, {}> {
  buttonClickHandler = (value: number) => {
    return () => {
      const valueSum = this.props.value + value
      const newValue = valueSum > 0 ? valueSum : 0
      this.inputChangeHandler(newValue)
    }
  }

  positiveButtons = (
    <ThreeButtons
      buttonProps={[
        { label: '+ 50', clickHandler: this.buttonClickHandler(50) },
        { label: '+ 100', clickHandler: this.buttonClickHandler(100) },
        { label: '+ 500', clickHandler: this.buttonClickHandler(500) }
      ]}
    />
  )

  negativeButtons = (
    <ThreeButtons
      extraButtonStyles={[styles.negativeButton]}
      buttonProps={[
        { label: '- 50', clickHandler: this.buttonClickHandler(-50) },
        { label: '- 100', clickHandler: this.buttonClickHandler(-100) },
        { label: '- 500', clickHandler: this.buttonClickHandler(-500) }
      ]}
    />
  )

  inputChangeHandler = (value: number) => {
    this.props.changeHandler(value)
  }

  render() {
    const { value, label } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.inputContainer}>
          <NumberInput value={value.toString()} changeHandler={this.inputChangeHandler} />
        </View>
        <View style={[styles.buttonsRow, margins.mgTopSm]}>{this.positiveButtons}</View>
        <View style={[styles.buttonsRow, margins.mgTopSm]}>{this.negativeButtons}</View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  negativeButton: {
    backgroundColor: colors.red1
  },
  label: {
    marginBottom: spacing.sm
  },
  buttonsRow: {
    flexDirection: 'row'
  },
  inputContainer: {
    width: '40%'
  }
})
