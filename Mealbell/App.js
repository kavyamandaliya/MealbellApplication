import React from 'react';
import { NativeRouter, Route } from 'react-router-native';

import { HomeScreen } from './src/components/HomeScreen';
import { EditPage } from './src/components/EditPage';
import { AddMealPage } from './src/components/AddMealPage';
import { SuggestionPage } from './src/components/SuggestionPage';
import { AlarmPage } from './src/components/AlarmPage';
import { SchedulePage } from './src/components/SchedulePage';

export default function App() {
  return (
    <NativeRouter>
      <Route exact path="/" component={HomeScreen} />

      <Route path="/edit" component={EditPage} />
      <Route path="/add" component={AddMealPage} />
      <Route path="/suggestion" component={SuggestionPage} />
      <Route exact path="/alarms" component={AlarmPage} />
      <Route path="/alarms/schedule" component={SchedulePage} />
    </NativeRouter>
  );
}
