import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import MainScene from './components/MainScene';
import ClientScene from './components/ClientScene';
import ContactScene from './components/ContactScene';
import CompanyScene from './components/CompanyScene';
import ServicesScene from './components/ServicesScene';

export default class App extends Component {
  render () {
    return (
      <Navigator
        initialRoute={ { id: 'mainScene' } }
        renderScene={ ( route, navigator ) => {

          switch ( route.id ) {

            case 'mainScene':
              return <MainScene navigator={ navigator } />;

            case 'clientScene':
              return <ClientScene navigator={ navigator } />;

            case 'contactScene':
              return <ContactScene navigator={ navigator } />;

            case 'companyScene':
              return <CompanyScene navigator={ navigator } />;

            case 'servicesScene':
              return <ServicesScene navigator={ navigator } />;

            default:
              return false;

          }
        } }
      />
    );
  }
}

const styles = StyleSheet.create( {

} );
