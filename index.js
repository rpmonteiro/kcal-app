import { AppRegistry } from 'react-native'
import App from './src/app'
import widgetTask from './src/widgetTask'

AppRegistry.registerHeadlessTask('widgetTask', () => widgetTask)
AppRegistry.registerComponent('androidWidgetPoc', () => App)
