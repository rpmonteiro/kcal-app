import React from 'react'
import { TextInput } from 'react-native'

interface Props {
  value: string
  changeHandler: (value: number) => void
}

export class NumberInput extends React.Component<Props, {}> {
  changeHandler = (text: string) => {
    const value = text.replace(/\D/g, '')
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
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={this.changeHandler}
        value={value.toString()}
      />
    )
  }
}
