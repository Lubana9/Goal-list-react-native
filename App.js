

import { useState } from 'react';
import { StyleSheet, FlatList,View,Button,TextInput } from 'react-native';
import GoalInput from './components/Goalinput';
import GoalItem from './components/Goalitem';
import { StatusBar } from 'expo-status-bar';
export default function App() {
 
  const [listofGoals, setListofGoals] = useState([]);
  const [modalisVisible, setModalIsVisible] = useState(false);
  const addgoalHandler = (enterGoaltext) => {
    setListofGoals((curretnGoals) =>
      [...curretnGoals,
        {text: enterGoaltext, id:Math.random().toString() }]);
    endAddGoalHandler();
  }
  const delteGoalHandeler = (id) => {
    setListofGoals(curretnGoals => {
      return curretnGoals.filter((goal) =>goal.id!== id);
    });
  }
  const StartAddgoalHandler = () => {
    setModalIsVisible(true);
  }
  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  }
  return (
    <>
<StatusBar style="inverted" />
    <View style={styles.appContainer}>
 
      <GoalInput
 onCancle={endAddGoalHandler}
        visible={modalisVisible} onAddGoal={addgoalHandler} />
      <View style={styles.goalsContainer}> 
        <FlatList data={listofGoals} renderItem={ 
          itemData => {
            return (
              <GoalItem id={itemData.item.id}
                text={itemData.item.text}
                onDelteGoal={delteGoalHandeler} />
     );
          }}
          keyExtractor={(item, index) => {
            return item.id;
      }}
        />
      
        </View>
        <Button onPress={StartAddgoalHandler}
        title='add new goal' color="#b800ff" />
      </View>
      </>
  );
}



const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 70,
    paddingBottom: 24,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex:5,
  },

});
