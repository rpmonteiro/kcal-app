import React from 'react'
import { NumberInput } from 'components/input'
import { View, StyleSheet } from 'react-native'
import { margins } from 'styles/common'
import { ThreeButtons } from 'components/three-buttons'

interface Props {
  value: number
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
    const { value } = this.props
    return (
      <View style={styles.container}>
        <View>
          <NumberInput value={value} changeHandler={this.inputChangeHandler} />
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
    backgroundColor: 'rgba(0, 0, 0, 0.05)'
  },
  buttonsRow: {
    flexDirection: 'row'
  }
})
