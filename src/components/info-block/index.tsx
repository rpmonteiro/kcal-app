import React, { FunctionComponent, memo } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { spacing, fontSize } from 'styles/common'

interface InfoBlockProps {
  label: string
  value: string
}

export const InfoBlock: FunctionComponent<InfoBlockProps> = memo(({ label, value }) => (
  <View style={styles.container}>
    <View style={styles.labelContainer}>
      <Text style={styles.label}>{label}</Text>
    </View>
    <View style={styles.valueContainer}>
      <Text style={styles.value}>{value}</Text>
    </View>
  </View>
))

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    margin: spacing.sm,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.md,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth
  },
  labelContainer: {},
  label: {
    fontSize: fontSize.md,
    fontWeight: '500'
  },
  value: {
    marginTop: spacing.sm
  },
  valueContainer: {}
})
