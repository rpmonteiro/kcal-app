import React from 'react'
import { TextInput, StyleSheet, TextInputProps } from 'react-native'
import { colors } from 'styles/common'

interface Props extends TextInputProps {
  value: string
  changeHandler: (value: number) => void
}

export class NumberInput extends React.Component<Props, {}> {
  changeHandler = (text: string) => {
    const value = text.replace(/\D/g, '')
    this.props.changeHandler(parseInt(value) || 0)
  }

  render() {
    const { value, changeHandler, ...otherProps } = this.props

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
        {...otherProps}
      />
    )
  }
}

const styles = StyleSheet.create({
  input: {
    textAlign: 'center',
    paddingTop: 0,
    paddingBottom: 0,
    borderBottomWidth: 1,
    borderBottomColor: colors.blue3
  }
})
