import React, { Fragment } from 'react'
import { StyleSheet } from 'react-native'
import { radius, colors } from 'styles/common'
import { Button, ButtonProps } from 'components/button'
import classnames from 'classnames-react-native'

interface Props {
  buttonProps: ButtonProps[]
}

export const ThreeButtons: React.StatelessComponent<Props> = ({ buttonProps }) => {
  const buttons = buttonProps.map((props, idx) => {
    const commonStyles = classnames(
      [styles.firstButton, idx === 0],
      [styles.thirdButton, idx === 2]
    )
    return (
      <Button
        {...props}
        key={idx}
        extraButtonStyles={commonStyles}
        extraContainerStyles={commonStyles}
      />
    )
  })

  return <Fragment>{buttons}</Fragment>
}

const styles = StyleSheet.create({
  firstButton: {
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: colors.orange,
    borderBottomLeftRadius: radius.lg,
    borderTopLeftRadius: radius.lg
  },
  thirdButton: {
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderLeftColor: colors.orange,
    borderTopRightRadius: radius.lg,
    borderBottomRightRadius: radius.lg
  }
})
