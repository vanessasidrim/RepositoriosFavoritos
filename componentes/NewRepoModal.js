import React, { Components } from 'react';

import {
    View, 
    Text,
    TextInput,
    Modal, 
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export default class NewRepoModal extends React.Component {
    state = {
        newRepoText: '',
    };

    render() {
        return (
            <Modal animationType='fade' transparent={true} visible={this.props.visible} onRequestClose={false}> 
                <View style={styles.modalContainer}>
                    <View style={styles.boxContainer}>
                        <Text style={styles.boxTitle}>Adicionar Repositório</Text>
                        <TextInput
                            autoFocus
                            autoCapitalize='none'
                            style={styles.boxInput}
                            underlineColorAndroid='rgba(0, 0, 0, 0)'
                            placeholder='organização/repositório'
                            value={this.state.newRepoText}
                            onChangeText={newRepoText => this.setState({ newRepoText })} 
                        />    
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.cancelButton]}
                            onPress={this.props.onCancel}
                        >
                            <Text style={styles.buttonText}>Cancelar</Text>    
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.button, styles.submitButton]}
                            onPress={() => this.props.onAdd(this.state.newRepoText)}
                        >
                            <Text style={styles.buttonText}>Adicionar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>           
        );
    }
}

const styles = StyleSheet.create ({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    boxContainer: {
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
        alignItems: 'center',
        width: 280,
    },

    boxTitle: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    boxInput: {
        alignSelf: 'stretch',
        marginTop: 10,
        paddingVertical: 0,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#DDD',
        height: 40,
        borderRadius: 3,
    },

    buttonContainer: {
        marginTop: 10,
        height: 40,
        width: 280, 
        flexDirection: 'row',
    },

    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },

    cancelButton: {
        backgroundColor: '#E25F5F',
        marginRight: 5,
    },

    submitButton: {
        backgroundColor: '#70BD85',
        marginLeft: 5,
    },

    buttonText: {
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 12,
    },
});