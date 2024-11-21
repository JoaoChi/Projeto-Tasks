import Raeact, { Component } from "react";
import { View, Modal, StyleSheet, TouchableWithoutFeedback } from "react-native";

export default class AddTask extends Component {

    render() {
        return (
            <Modal transparent={true} visible={this.props.isVisible}
            onRequestClose={this.props.onCancel}
            animationType="slide">
                <TouchableWithoutFeedback
                    onPress={this.props.onCancel}>
                    <View style={StyleSheet.background}>
                        
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const syles = StyleSheet.create({
    background: {
        flex: 1,
        background: 'rgba(0, 0, 0, 0.9)'
    }
})