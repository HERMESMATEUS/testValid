import React from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import store from '@redux/store';
import API from '@gateway/apiClass';
import Main from './main';
import { URL_BASE } from '@constants/urls'

export default () => {
  API._setURL_BASE(URL_BASE);
  LogBox.ignoreAllLogs()
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <Main />
      </SafeAreaView>
    </Provider>
  );
};
