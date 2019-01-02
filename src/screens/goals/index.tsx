import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { RootState } from 'store/root-reducer'
import { GoalObj } from 'store/goals/reducer'
import { Dispatch } from 'utils/redux-utils'
import { Actions as GoalActions } from 'store/goals/actions'
import { NumberInput } from 'components/input'
import weekIdentifier from 'week-identifier'
import { spacing } from 'styles/common'
import cn from 'classnames-react-native'
import { Table } from 'components/table'
import { Omit } from 'utils/some-types'

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const week = weekIdentifier()
interface GoalsScreenProps {}

interface InjectedReduxProps {
  exerciseGoals: GoalObj
  kcalGoals: GoalObj
  dispatch: Dispatch
}

class GoalsScreenBase extends Component<GoalsScreenProps & InjectedReduxProps> {
  exerciseGoalChangeHandler = (idx: number) => {
    return (value: number) => {
      this.props.dispatch(GoalActions.setGoal(idx, value, 'exercise'))
    }
  }

  kcalGoalChangeHandler = (idx: number) => {
    return (value: number) => {
      this.props.dispatch(GoalActions.setGoal(idx, value, 'kcal'))
    }
  }

  headerRow = (
    <View style={styles.headerRow}>
      <Text style={styles.headerCell} key="-1" />
      <Text style={styles.headerCell} key="0">
        Kcal
      </Text>
      <Text style={styles.headerCell} key="1">
        Exercise
      </Text>
    </View>
  )

  render() {
    const { exerciseGoals, kcalGoals } = this.props
    console.log({ exerciseGoals, kcalGoals })
    const rows = weekdays.map((weekday, idx) => (
      <View key={`${weekday}-${idx}`} style={cn(styles.row, [styles.withMarginTop, idx > 0])}>
        <View style={styles.cell}>
          <Text style={styles.weekdayCell}>{weekday}</Text>
        </View>
        <View style={styles.cell}>
          <NumberInput
            value={(exerciseGoals[week][idx] || 0).toString()}
            changeHandler={this.exerciseGoalChangeHandler(idx)}
          />
        </View>
        <View style={styles.cell}>
          <NumberInput
            value={(kcalGoals[week][idx] || 0).toString()}
            changeHandler={this.kcalGoalChangeHandler(idx)}
          />
        </View>
      </View>
    ))

    return (
      <View style={styles.mainContainer}>
        <View style={styles.tableContainer}>
          <Table headerRow={this.headerRow} rows={rows} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {},
  headerRow: {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.sm
  },
  headerCell: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '500'
  },
  row: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  cell: {
    flex: 1,
    marginHorizontal: spacing.sm
  },
  weekdayCell: {
    textAlign: 'center'
  },
  tableContainer: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginHorizontal: spacing.sm / 2
  },
  withMarginTop: {
    marginTop: spacing.md
  }
})

const mapStateToProps = (state: RootState): Omit<InjectedReduxProps, 'dispatch'> => ({
  exerciseGoals: state.goals.exercise,
  kcalGoals: state.goals.kcal
})

export const GoalsScreen = connect(mapStateToProps)(GoalsScreenBase)
