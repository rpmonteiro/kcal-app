import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { CounterSection } from 'components/counter-section'
import { spacing } from 'styles/common'

interface State {
  kcal: number
  exercise: number
  offset: number
  deficit: boolean
}

export default class App extends Component<{}, State> {
  state = {
    kcal: 0,
    exercise: 0,
    offset: 500,
    deficit: true
  }

  kcalChangeHandler = (kcal: number) => {
    this.setState({ kcal })
  }

  exerciseChangeHandler = (exercise: number) => {
    this.setState({ exercise })
  }

  render() {
    const { kcal, exercise } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.counterSectionsContainer}>
          <View style={styles.counterSectionContainer1}>
            <CounterSection value={kcal} changeHandler={this.kcalChangeHandler} />
          </View>
          <View style={styles.counterSectionContainer2}>
            <CounterSection value={exercise} changeHandler={this.exerciseChangeHandler} />
          </View>
        </View>
      </View>
    )
  }
}

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
