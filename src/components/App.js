import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import icon from '../images/main_icon.png';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }
    render() {
        const { container, inputContainer, input, buttonContainer, button, buttonText,
            more, moreText, imageContainer, image } = styles;
        const { username, password } = this.state;
        return (
            <View style={container}>
                <View style={inputContainer}>
                    <View style={imageContainer}>
                        <Image
                            style={image}
                            source={icon}
                        />
                    </View>
                    <TextInput
                        style={input}
                        onChangeText={(text) => this.setState({ username: text })}
                        value={username}
                        underlineColorAndroid='transparent'
                        placeholder="Type username"
                    />
                    <TextInput
                        style={input}
                        onChangeText={(text) => this.setState({ password: text })}
                        value={password}
                        underlineColorAndroid='transparent'
                        placeholder="Type password"
                        secureTextEntry
                    />
                    <View style={buttonContainer}>
                        <TouchableOpacity style={button}>
                            <Text style={buttonText}>Sign in</Text>
                        </TouchableOpacity>
                        <View style={{ width: 16 }} />
                        <TouchableOpacity style={button}>
                            <Text style={buttonText}>Exit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={more}>
                    <Text style={moreText}>Version 1.0.0</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1867e0',
        padding: 16
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        backgroundColor: 'white',
        marginVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 8
    },
    button: {
        backgroundColor: 'white',
        padding: 8,
        flex: 1,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    more: {
        padding: 8,
        alignItems: 'flex-end'
    },
    moreText: {
        color: 'white'
    },
    imageContainer: {
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100
    }
});
