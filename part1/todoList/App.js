import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, KeyboardAvoidingView, Platform, Alert} from 'react-native';
// import hàm Task trong thư mục Task
import Task from './components/Task';
import styles from './App.componets.style.js'
import FormMain from './components/Form';
import { useState } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

// state
let appState = {number: 1, historise: [1], errorMsg: ''}

// action
const add = {
  type: 'ADD',
  value: 1
}

const sub = {
  type: 'SUB',
  value: 1
}

// reducer
const numberReducer = (state = appState, action) => {
  switch(action.type){
    case 'ADD':
     const newValue =  state.number + action.value
     state = {
      ...state,
      historise: [...state.historise, newValue],
      number: state.number + action.value
     }
      break
    
    case 'SUB':
      const newValue2 =  state.number - action.value
      state = {
       ...state,
       historise: [...state.historise, newValue2],
       number: state.number - action.value
      }
      break
  }

  return state
}

const errorReducer = (state = appState, action) => {

  switch(action.type){
    case 'LESS_THAN_ZERO':
      state = {
        ...state,
        errorMsg: 'Number can not be less than zero'
      }
  }

  return state
}

// middleware
const logger = store => next => action => {
  console.log('State', store.getState())

  // cho phép action này thông qua
  // mik cứ vc như vậy thì sẽ sử dụng đc store, next, action
  next (action)
  console.log('State update', store.getState())
}

const checkIsZero = store => next => action =>{
  const currentNumber = store.getState().number.number

  if(currentNumber == 0) {
    next ({type: 'LESS_THAN_ZERO'})
  } else{
    next(action)
  }
  
  console.log('Current number', currentNumber)
}

// store
const reducers = combineReducers({number: numberReducer, err: errorReducer})
const store = createStore(reducers, applyMiddleware(logger, checkIsZero, thunk))

// test
// sử dụng thunk thì nó sẽ giúp mik sử dụng store.dispatch(là 1 function)
// nếu ko có thunk thì srore.dispatch(chỉ cỏ thể truyền 1 object)
const addAfter3s = () => {
  return dispatch => {
    setTimeout(() => dispatch(add), 3000)
  }
}

store.dispatch(addAfter3s)


// store.subscribe(() => {
//   console.log('State updated', store.getState())
// })

// store.dispatch({type: 'LESS_THAN_ZERO'})


// store.dispatch(add)
// store.dispatch(sub)
// store.dispatch(sub)
// store.dispatch(sub)
// store.dispatch(sub)
// store.dispatch(sub)
// store.dispatch(sub)

// // muốn có 1 action khác ngoài add, sub theo dạng truyền object
// store.dispatch({
//   type: 'ADD',
//   value: 5
// })


// const createAddAction = (number) => {
//   return {
//     type: 'ADD',
//     value: number
//   }
// }
// // muốn có 1 action theo dạng truyền hàm và hàm này trả về 1 object
// store.dispatch(createAddAction(100))



export default function App() {
  const [taskList, setTaskList] = useState([])

  const onAddTaskFunc =(task) =>{
    // add task
    // ở đây ta sẽ thêm những task cũ bằng toán tử ...taskList, task(mới)
    setTaskList([...taskList, task])
  }

  const handleDeteteTask = (index) =>{
    Alert.alert(
      'Thông báo', 'Bạn có chắc muốn xóa không?', 
    [
      {
        text: 'Có',
        onPress: () => {
          let taskListTmp = [...taskList]
          // method slice để xóa ptu trong mảng, trong TH này xóa ptu tại vị trí index và số lượng là 1
          taskListTmp.splice(index, 1)
          setTaskList(taskListTmp)
        },
        style: 'cancel',
      },
      {text: 'Không', onPress: () => {}},
    ])
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      
      <View style = {styles.body}>
          <Text style = {styles.header}>Todo List</Text>
          {/* ScrollView: tạo thanh scrollBar khi số lượng item vượt quá size screen
          nó bao bọc all cả item nên nó nằm ngoài
          TouchableOpacity: user chọn vào thì nó nhấp nhánh*/
          }
          <ScrollView>
            {/* đoạn mã dướiphải đặt trong dấu ngoặc nhọn 
            Điều này là cần thiết trong JSX để chỉ ra rằng đây là một phần của mã JavaScript,
             không phải là phần của JSX mà bạn muốn render ra giao diện người dùng.
            */}

            { 
              // method map change elemnt in array
              // lấy index làm key lun, tác dụng là để xác định ptu nào thay đổi
              taskList.map((item, index) => {
                return <Task key={index} title={item} number={index+1} onDeleteTask = {() => handleDeteteTask(index)}></Task>
              })
            }
            
          </ScrollView>
      </View>
      
      {/* khi mik thêm property (giống attribute trong html) thì thẻ con cũng nhận đc
      thông qua parameter.porperty mà thẻ cha đã thêm*/}
      <FormMain onAddTask={onAddTaskFunc}></FormMain>
    </KeyboardAvoidingView>
  );
}