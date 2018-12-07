import React from 'react'
import {
  TouchableNativeFeedback,
  StyleSheet,
  Text,
  RegisteredStyle,
  ViewStyle,
  View
} from 'react-native'
import { buttons, colors, spacing } from 'styles/common'

export interface ButtonProps {
  label: string
  size?: 'small' | 'big'
  clickHandler: () => void
  extraButtonStyles: Array<RegisteredStyle<ViewStyle>>
  extraContainerStyles: Array<RegisteredStyle<ViewStyle>>
}

export const Button: React.StatelessComponent<ButtonProps> = ({
  label,
  clickHandler,
  size = 'normal',
  extraButtonStyles = [],
  extraContainerStyles = []
}) => (
  <View style={[styles.buttonContainer, ...extraContainerStyles]}>
    <TouchableNativeFeedback
      useForeground={false}
      onPress={clickHandler}
      background={TouchableNativeFeedback.Ripple(colors.blue, false)}
    >
      <View style={[styles.button, styles[size], ...extraButtonStyles]}>
        <Text numberOfLines={1} style={styles.text}>
          {label}
        </Text>
      </View>
    </TouchableNativeFeedback>
  </View>
)

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    overflow: 'hidden'
  },
  button: {
    paddingVertical: spacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.cream
  },
  text: {
    color: 'blue'
  },
  normal: {},
  big: {},
  small: {
    width: buttons.sizeSmall
  }
})
