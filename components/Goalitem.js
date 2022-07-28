import { View,StyleSheet,Text, Pressable } from 'react-native';
const GoalItem = (props) => { 

  return (
    <View
    style={styles.textGoal }>
    <Pressable android_ripple={{color:'#6c0494'}}
      style={({pressed}) => pressed&& styles.pressedItem }
        onPress={props.onDelteGoal.bind(this, props.id)}>
           <Text style={styles.deleteIcon}>X</Text>
      </Pressable>
    <Text style={styles.goalText}> {props.text}
        </Text> 

 
      </View>
  );
};

const styles = StyleSheet.create({

  textGoal: {
      marginVertical:8,
      borderRadius: 9,
    backgroundColor: '#b800ff',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
      alignItems:'center'
  },
    goalText: {
      paddingVertical: 8,
       paddingLeft: 16,
        color: '#fff',
        fontSize: 26,
        fontWeight: "700",
  },
  pressedItem: {
      opacity: 0.5,
  },
  deleteIcon: {
    fontSize: 20,
    opacity: 0.7,
    marginRight: 16,
    color:'#140338',
  }
})
export default GoalItem;