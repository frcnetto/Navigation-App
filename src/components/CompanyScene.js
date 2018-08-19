import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, Image, Text } from 'react-native';
import NavBar from './NavBar';

const detailCompany = require( '../../img/detalhe_empresa.png' );
const mainColor = '#EC7148';

export default class CompanyScene extends Component {
    render () {
        return (
            <View style={ css.main }>

                <StatusBar backgroundColor={ mainColor } />

                <NavBar navigator={ this.props.navigator } canGoBack color={ mainColor } />

                <View style={ css.pageHeader }>
                    <Image source={ detailCompany } />
                    <Text style={ css.pageTitle }>A empresa</Text>
                </View>

                <Text style={ css.companyTitle }>A empresa é legal</Text>

            </View>
        );
    }
}

const css = StyleSheet.create( {
    main: {
        flex: 1,
        backgroundColor: 'white',
    },
    pageHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    pageTitle: {
        fontSize: 26,
        color: '#EC7148',
        fontWeight: 'bold',
        marginLeft: 20,
    },
    companyTitle: {
        color: '#666',
        marginTop: 10,
        marginLeft: 20,
        fontSize: 18,
    },
} );