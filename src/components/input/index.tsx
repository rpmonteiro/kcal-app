import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { inputs, colors } from 'styles/common'

interface Props {
  value: string
  changeHandler: (value: number) => void
}

export class NumberInput extends React.Component<Props, {}> {
  changeHandler = (text: string) => {
    const value = text.replace(/\D/g, '')
    console.log('changeHandler', { text, value })
    this.props.changeHandler(parseInt(value) || 0)
  }

  render() {
    const { value } = this.props

    return (
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        maxLength={5}
        selectTextOnFocus={true}
        keyboardType="number-pad"
        style={styles.input}
        onChangeText={this.changeHandler}
        value={value}
      />
    )
  }
}

const styles = StyleSheet.create({
  input: {
    elevation: 2,
    textAlign: 'center',
    paddingTop: 0,
    paddingBottom: 0,
    height: inputs.inputHeight,
    backgroundColor: colors.yellow1,
    borderRadius: 3
  }
})
