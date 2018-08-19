import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, Image, Text } from 'react-native';
import NavBar from './NavBar';

const detailServices = require( '../../img/detalhe_servico.png' );
const mainColor = '#19D1C8';

export default class ServicesScene extends Component {
    render () {
        return (
            <View style={ css.main }>

                <StatusBar backgroundColor={ mainColor } />

                <NavBar navigator={ this.props.navigator } canGoBack color={ mainColor } />

                <View style={ css.pageHeader }>
                    <Image source={ detailServices } />
                    <Text style={ css.pageTitle }>Serviços</Text>
                </View>

                <Text style={ css.companyTitle }>- Consultoria</Text>
                <Text style={ css.companyTitle }>- Processos</Text>
                <Text style={ css.companyTitle }>- Acompanhamento de projetos</Text>
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
        color: '#19D1C8',
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