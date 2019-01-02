import React, { ReactNode, FunctionComponent } from 'react'
import { View } from 'react-native'

interface Props {
  headerRow: ReactNode
  rows: ReactNode[]
}

export const Table: FunctionComponent<Props> = ({ headerRow, rows }) => (
  <>
    <View>{headerRow}</View>
    <View>{rows}</View>
  </>
)
