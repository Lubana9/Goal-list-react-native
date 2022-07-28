import { StyleSheet, View, TextInput, Button, Modal,Image } from 'react-native';
import { useState } from 'react';
const GoalInput = (props) => {
    const [enterGoaltext, setEnterGoaltext] = useState('');
    const goalInputHandler = (enterText) => {
        setEnterGoaltext(enterText)
    }
    const addGoalHandler = () => {
        props.onAddGoal(enterGoaltext);
        setEnterGoaltext('');
    }
  return (
      <Modal visible={props.visible} animationType="slide"> 
      <View style={styles.inputContainer}>
        <Image style={styles.img} source={require('../assets/img/goal.png')}/>
        <TextInput style={styles.textInput}
          placeholder='what do you wnat to do?'
          onChangeText={goalInputHandler}
         value={enterGoaltext}   
        />
        <View style={styles.buttonContainer} >
          <View style={styles.buttons}>
            <Button
            title='+' onPress={addGoalHandler} color='#b180f0' /></View>
          <View style={styles.buttons}>
            <Button title='Cancel' onPress={props.onCancle} color='#f31282' />
        </View>

        </View>
        </View>
      </Modal>

    );

}

const styles = StyleSheet.create({
   
    inputContainer: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#311b6b',
      
    },
    inputButton: {
      backgroundColor: '#a57bed',
      color: '#999',
      borderRadius: 20,
      fontSize: 40,
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#e4d0ff',
      backgroundColor: '#e4d0ff',
      width: '100%',
      borderRadius: 9,
      padding: 8,
      color:'#120438',
    },
  buttonContainer: {
    flexDirection: 'row',
    marginTop:16,

  },
  buttons: {
    width: 100,
    marginHorizontal:8,
  },
  img: {
    width: 100,
    height: 100,
    margin:20,
  }
  
  });

export default GoalInput;