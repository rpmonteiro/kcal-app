import React, { FunctionComponent } from 'react'
import { View, StyleSheet } from 'react-native'
import { CounterSection } from 'components/counter-section'
import { spacing } from 'styles/common'
import { connect } from 'react-redux'
import { RootState } from 'store/root-reducer'
import { Omit, OneNumberPerDay } from 'utils/some-types'
import { Dispatch } from 'utils/redux-utils'
import { Actions as DeficitActions } from 'store/deficit/actions'
import { dayIdx, week } from 'config'
import { getTargetDeficit, getTodayDeficit, getDaysLeft, getWeightLost } from 'store/selectors'
import { InfoBlock } from 'components/info-block'

interface InjectedReduxProps {
  dispatch: Dispatch
  daysLeft: number
  weightLost: string
  todayDeficit: string
  targetDeficit: string
  weekKcal: OneNumberPerDay
  weekExercise: OneNumberPerDay
}

export const HomeScreenBase: FunctionComponent<InjectedReduxProps> = React.memo(
  ({ weekKcal, weekExercise, dispatch, targetDeficit, todayDeficit, daysLeft, weightLost }) => {
    const targetDeficitSection = (
      <InfoBlock
        label="Target Deficit"
        value={targetDeficit ? `${targetDeficit} kcal` : 'Not set'}
      />
    )

    const todayDeficitSection = <InfoBlock label="Today's Deficit" value={`${todayDeficit} kcal`} />

    const daysLeftSection = <InfoBlock label="Days Left" value={daysLeft.toString()} />

    const weightLostSection = <InfoBlock label="Weight Lost" value={weightLost} />

    return (
      <View style={styles.container}>
        <View style={styles.counterSectionContainer}>
          <View style={styles.counterSection}>
            <CounterSection
              label="Kcal"
              value={weekKcal[dayIdx]}
              changeHandler={(value) => dispatch(DeficitActions.updateDeficit('kcal', value))}
            />
          </View>
          <View style={styles.counterSection}>
            <CounterSection
              label="Exercise"
              value={weekExercise[dayIdx]}
              changeHandler={(value) => dispatch(DeficitActions.updateDeficit('exercise', value))}
            />
          </View>
        </View>
        <View style={styles.infoBlocksContainer}>
          <View style={styles.infoBlocksRow}>
            {targetDeficitSection}
            {todayDeficitSection}
          </View>
          <View style={styles.infoBlocksRow}>
            {daysLeftSection}
            {weightLostSection}
          </View>
        </View>
      </View>
    )
  }
)

const mapStateToProps = (state: RootState): Omit<InjectedReduxProps, 'dispatch'> => ({
  daysLeft: getDaysLeft(state),
  weightLost: getWeightLost(state),
  targetDeficit: getTargetDeficit(state),
  todayDeficit: getTodayDeficit(state),
  weekExercise: state.deficit.exercise[week],
  weekKcal: state.deficit.kcal[week]
})

export const HomeScreen = connect(mapStateToProps)(HomeScreenBase)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: spacing.sm
  },
  infoBlocksContainer: {
    flex: 0.5
  },
  infoBlocksRow: {
    display: 'flex',
    flexDirection: 'row'
  },
  counterSectionContainer: {
    flex: 0.5,
    flexDirection: 'row'
  },
  counterSection: {
    flex: 1,
    marginTop: '30%',
    margin: spacing.sm
  }
})
