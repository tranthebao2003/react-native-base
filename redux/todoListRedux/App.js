import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, KeyboardAvoidingView, Platform, Alert} from 'react-native';
// import hàm Task trong thư mục Task
import Task from './components/Task';
import styles from './App.componets.style.js'
import FormMain from './components/Form';
import { useState } from 'react';


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