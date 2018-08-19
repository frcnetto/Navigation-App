import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, Image, TouchableHighlight } from 'react-native';
import NavBar from './NavBar';

const logo = require( '../../img/logo.png' );
const menuCliente = require( '../../img/menu_cliente.png' );
const menuContato = require( '../../img/menu_contato.png' );
const menuEmpresa = require( '../../img/menu_empresa.png' );
const menuServico = require( '../../img/menu_servico.png' );

const mainColor = '#CCC';

export default class MainScene extends Component {

    navigate ( sceneId ) {
        this.props.navigator.push( { id: sceneId } );
    }

    render () {
        return (
            <View style={ css.main }>

                <StatusBar backgroundColor={ mainColor } />

                <NavBar color={ mainColor } />

                <Image style={ css.logo } source={ logo } />

                <View style={ css.menu }>

                    <TouchableHighlight
                        underlayColor={ '#B9C941' }
                        activeOpacity={ .3 }
                        onPress={ () => { this.navigate( 'clientScene' ) } }>
                        <Image style={ css.button } source={ menuCliente } />
                    </TouchableHighlight>

                    <TouchableHighlight
                        underlayColor={ '#61BD8C' }
                        activeOpacity={ .3 }
                        onPress={ () => { this.navigate( 'contactScene' ) } }>
                        <Image style={ css.button } source={ menuContato } />
                    </TouchableHighlight>

                </View>

                <View style={ css.menu }>

                    <TouchableHighlight
                        underlayColor={ '#EC7148' }
                        activeOpacity={ .3 }
                        onPress={ () => { this.navigate( 'companyScene' ) } }>
                        <Image style={ css.button } source={ menuEmpresa } />
                    </TouchableHighlight>

                    <TouchableHighlight
                        underlayColor={ '#19D1C8' }
                        activeOpacity={ .3 }
                        onPress={ () => { this.navigate( 'servicesScene' ) } }>
                        <Image style={ css.button } source={ menuServico } />
                    </TouchableHighlight>

                </View>

            </View>
        );
    }
}

const css = StyleSheet.create( {
    main: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white',
    },
    logo: {
        marginTop: 20,
    },
    menu: {
        flexDirection: 'row',
        marginTop: 10,
    }
    , button: {
        margin: 10,
    }
} );