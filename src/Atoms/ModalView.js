import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ModalView = (props) => {
  return (
    <Modal 
       transparent={true} 
       visible={props.openModal} 
       animationType="slide"
        >
            <View style={styles.modalBox}>
                {props.children}
            </View>
    </Modal>
  )
}

export default ModalView

const styles = StyleSheet.create({
    modalBox:{
        flex:1,
        position:'absolute',
        backgroundColor:'rgba(0,0,0,0.4)',
        top:0,
        bottom:0,
        left:0,
        right:0
    }
})