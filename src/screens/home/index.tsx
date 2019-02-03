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

interface InjectedReduxProps {
  dispatch: Dispatch
  weekKcal: OneNumberPerDay
  weekExercise: OneNumberPerDay
}

export const HomeScreenBase: FunctionComponent<InjectedReduxProps> = React.memo(
  ({ weekKcal, weekExercise, dispatch }) => (
    <View style={styles.container}>
      <View style={styles.counterSectionsContainer}>
        <View style={styles.counterSectionContainer1}>
          <CounterSection
            label="Kcal"
            value={weekKcal[dayIdx]}
            changeHandler={(value) => dispatch(DeficitActions.updateDeficit('kcal', value))}
          />
        </View>
        <View style={styles.counterSectionContainer2}>
          <CounterSection
            label="Exercise"
            value={weekExercise[dayIdx]}
            changeHandler={(value) => dispatch(DeficitActions.updateDeficit('exercise', value))}
          />
        </View>
      </View>
    </View>
  )
)

const mapStateToProps = (state: RootState): Omit<InjectedReduxProps, 'dispatch'> => ({
  weekExercise: state.deficit.exercise[week],
  weekKcal: state.deficit.kcal[week]
})

export const HomeScreen = connect(mapStateToProps)(HomeScreenBase)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: spacing.sm
  },
  counterSectionsContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: '50%'
  },
  counterSectionContainer1: {
    flex: 1,
    marginRight: spacing.sm
  },
  counterSectionContainer2: {
    flex: 1,
    marginLeft: spacing.sm
  }
})
