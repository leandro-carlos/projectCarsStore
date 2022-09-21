import Reactotron from 'reactotron-react-native'
import { NativeModules } from 'react-native'

const { scriptURL } = NativeModules.SourceCode;
const hostName = scriptURL.split("://")[1].split(":")[0]

Reactotron
    .configure({host: hostName}) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect();
