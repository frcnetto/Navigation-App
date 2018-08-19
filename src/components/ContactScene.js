import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, Image, Text } from 'react-native';
import NavBar from './NavBar';

const detalheContact = require( '../../img/detalhe_contato.png' );
const mainColor = '#61BD8C';

export default class ContactScene extends Component {
    render () {
        return (
            <View style={ css.main }>

                <StatusBar backgroundColor={ mainColor } />

                <NavBar navigator={ this.props.navigator } canGoBack color={ mainColor } />

                <View style={ css.pageHeader }>
                    <Image source={ detalheContact } />
                    <Text style={ css.pageTitle }>Contatos</Text>
                </View>

                <View style={ css.contact }>
                    <Text style={ css.contactText }>Tel: (01) 98765-4321</Text>
                    <Text style={ css.contactText }>Cel: (01) 98765-4321</Text>
                    <Text style={ css.contactText }>Email: email@email.com</Text>
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
        color: '#61BD8C',
        fontWeight: 'bold',
        marginLeft: 20,
    },
    contact: {
        padding: 20,
        justifyContent: 'space-between',
    },
    contactText: {
        color: '#666',
        marginTop: 10,
        fontSize: 18,
    },
} );