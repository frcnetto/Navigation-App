import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';

const goBack = require( '../../img/btn_voltar.png' );

export default class NavBar extends Component {

    render () {

        if ( this.props.canGoBack ) {
            return (
                <View style={ [ css.main, { backgroundColor: this.props.color } ] }>

                    <TouchableHighlight
                        underlayColor={ this.props.color }
                        activeOpacity={ .3 }
                        onPress={ () => { this.props.navigator.pop() } }>
                        <Image source={ goBack } />
                    </TouchableHighlight>

                    <Text style={ css.title }>ATM Consulting</Text>
                </View>
            )
        }

        else {
            return (
                <View style={ [ css.main, { backgroundColor: this.props.color } ] }>
                    <Text style={ css.title }>ATM Consulting</Text>
                </View>
            );
        }
    }
}

const css = StyleSheet.create( {
    main: {
        padding: 10,
        height: 60,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 20,
    },
    title: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        color: '#000',
    }
} );