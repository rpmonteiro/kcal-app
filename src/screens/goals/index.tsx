import React, { Component } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { RootState } from 'store/root-reducer'
import { Dispatch } from 'utils/redux-utils'
import { Actions as GoalActions } from 'store/goals/actions'
import { NumberInput } from 'components/input'
import { spacing, textSecondary } from 'styles/common'
import { Omit } from 'utils/some-types'
import { GoalsState } from 'store/goals/reducer'
import { DatePicker } from 'components/date-picker'
import { getTargetDeficit } from 'store/selectors'

interface InjectedReduxProps {
  goals: GoalsState
  dispatch: Dispatch
}

class GoalsScreenBase extends Component<InjectedReduxProps> {
  updateGoalHandler = (key: keyof GoalsState, value: string | number) => {
    this.props.dispatch(GoalActions.updateGoal(key, value))
  }

  render() {
    const { goals } = this.props

    const components = [
      {
        label: ''
      }
    ]

    const bmrSection = (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionLabel}>BMR</Text>
        <View style={styles.sectionInput}>
          <NumberInput
            maxLength={4}
            value={bmr.toString()}
            changeHandler={(value) => this.updateGoalHandler('bmr', value)}
          />
        </View>
        <Text style={styles.sectionUnit}>kcal</Text>
      </View>
    )

    const currWeightSection = (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionLabel}>Current weight</Text>
        <View style={styles.sectionInput}>
          <NumberInput
            maxLength={3}
            value={currWeight.toString()}
            changeHandler={(value) => this.updateGoalHandler('currWeight', value)}
          />
        </View>
        <Text style={styles.sectionUnit}>kg</Text>
      </View>
    )

    const targetWeightSection = (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionLabel}>Target weight</Text>
        <View style={styles.sectionInput}>
          <NumberInput
            maxLength={3}
            value={targetWeight.toString()}
            changeHandler={(value) => this.updateGoalHandler('targetWeight', value)}
          />
        </View>
        <Text style={styles.sectionUnit}>kg</Text>
      </View>
    )

    const targetDateSection = (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionLabel}>Target date</Text>
        <View style={styles.dateInput}>
          <DatePicker
            value={targetDate}
            changeHandler={(date) => this.updateGoalHandler('targetDate', date)}
          />
        </View>
      </View>
    )

    const dailyDeficitSection = (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionLabel}>Daily deficit</Text>
        <Text style={styles.sectionInput}>{dailyDeficit}</Text>
        <Text style={styles.sectionUnit}>kcal</Text>
      </View>
    )

    // const total = (
    //   <View key="total" style={[styles.row, styles.withMarginTop]}>
    //     <View style={styles.textCell}>
    //       <Text style={styles.weekdayCell}>Total</Text>
    //     </View>
    //     <View style={styles.textCell}>
    //       <Text>{kcalTotal.toLocaleString()} kcal</Text>
    //     </View>
    //     <View style={styles.textCell}>
    //       <Text>{exerciseTotal.toLocaleString()} kcal</Text>
    //     </View>
    //   </View>
    // )

    // const deficit = (
    //   <View key="deficit" style={[styles.row, styles.withMarginTop]}>
    //     <View style={styles.textCell}>
    //       <Text style={styles.weekdayCell}>Weekly deficit</Text>
    //     </View>
    //     <View style={styles.textCell}>
    //       <Text>{deficitTotal.toLocaleString()} kcal</Text>
    //     </View>
    //     <View style={styles.textCell} />
    //   </View>
    // )

    // const estimatedWeightLoss = (
    //   <View key="weight-loss" style={[styles.row, styles.withMarginTop]}>
    //     <View style={styles.textCell}>
    //       <Text style={styles.weekdayCell}>Weight loss</Text>
    //     </View>
    //     <View style={styles.textCell}>
    //       <Text>{lossEstimate.toLocaleString()} kg</Text>
    //     </View>
    //     <View style={styles.textCell} />
    //   </View>
    // )

    return (
      <ScrollView style={styles.mainContainer}>
        <KeyboardAvoidingView>
          <View style={styles.sectionsContainer}>
            {bmrSection}
            {currWeightSection}
            {targetWeightSection}
            {targetDateSection}
            {dailyDeficitSection}
          </View>
          <View style={styles.statsSection}>
            <View style={styles.divider} />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.md
  },
  sectionsContainer: {
    left: '20%'
  },
  statsSection: {
    marginTop: spacing.lg
  },
  sectionLabel: {
    ...textSecondary,
    textAlign: 'right',
    width: 100
  },
  sectionUnit: {
    ...textSecondary,
    textAlign: 'left'
  },
  sectionInput: {
    width: 50,
    textAlign: 'center',
    marginLeft: spacing.sm,
    marginRight: spacing.sm
  },
  dateInput: {
    marginLeft: spacing.sm
  },
  mainContainer: {
    flex: 1,
    height: '100%'
  },
  divider: {
    height: 1,
    width: '50%',
    backgroundColor: 'black'
  }
})

const mapStateToProps = (state: RootState): Omit<InjectedReduxProps, 'dispatch'> => ({
  dailyDeficit: getTargetDeficit(state),
  goals: state.goals
})

export const GoalsScreen = connect(mapStateToProps)(GoalsScreenBase)
