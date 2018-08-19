import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, Image, Text } from 'react-native';
import NavBar from './NavBar';

const detalheClientes = require( '../../img/detalhe_cliente.png' );
const cliente1 = require( '../../img/cliente1.png' );
const cliente2 = require( '../../img/cliente2.png' );
const mainColor = '#B9C941';

export default class ClientScene extends Component {
    render () {
        return (
            <View style={ css.main }>

                <StatusBar backgroundColor={ mainColor } />

                <NavBar navigator={ this.props.navigator } canGoBack color={ mainColor } />

                <View style={ css.pageHeader }>
                    <Image source={ detalheClientes } />
                    <Text style={ css.pageTitle }>Nossos clientes</Text>
                </View>

                <View style={ css.client }>
                    <Image source={ cliente1 } />
                    <Text style={ css.clientTitle }>Cliente 1</Text>
                </View>

                <View style={ css.client }>
                    <Image source={ cliente2 } />
                    <Text style={ css.clientTitle }>Cliente 2</Text>
                </View>

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
        color: '#B9C941',
        fontWeight: 'bold',
        marginLeft: 20,
    },
    client: {
        padding: 20,
        justifyContent: 'space-between',
    },
    clientTitle: {
        color: '#666',
        marginTop: 10,
        marginLeft: 20,
        fontSize: 18,
    },
} );