import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import Delivery from '~/pages/Delivery/List';
import RegisterDelivery from '~/pages/Delivery/Register';
import EditDelivery from '~/pages/Delivery/Edit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/delivery" exact component={Delivery} isPrivate />
      <Route path="/delivery/register" component={RegisterDelivery} isPrivate />
      <Route path="/delivery/edit" component={EditDelivery} isPrivate />
    </Switch>
  );
}
