import React, { AppRegistry, Component } from 'react-native';
import { Provider } from 'react-redux/native';
import AppContainer from './containers/AppContainer';
import configureStore from './store/configureStore';

const store = configureStore();

class Root extends Component {
  render() {
    return (
     <Provider store={store}>
       {() => <AppContainer />}
     </Provider>
    );
  }
}

AppRegistry.registerComponent('ReactNativeReduxApp', () => Root);
