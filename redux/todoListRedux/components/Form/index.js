import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity, Platform, onChangeText, Keyboard} from 'react-native'
import styles from './style'

// thẻ con
const FormMain = (props) => {
  // const [nameState, function Update State] = useState(GiaTriBanDauState)
  const [task, setTask] = useState('')
  const handeAddTask = () => {
    if(task.length === 0){
      alert('Bạn vui lòng nhập công việc')
      return false
    } 

    // Thẻ con property của thẻ cha = props.onAddTask(), vì nó là func nên phải có ()
    props.onAddTask(task)
    // sau khi thêm giá trị thì ta set cho value = ''
    setTask('')
    // ẩn đi bàn phím
    Keyboard.dismiss()
  }
  return (
    <View style={styles.addTask} 
    keyboardVerticalOffset={10}
    // nếu hệ điều hành là ios thì thêm 1 khoảng padding còn androi thì là height
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
        <TextInput 
         style={styles.input}
         placeholder='Your task'
        //  khi văn bản trong ô input thay đổi thì lập tức event này kích hoạt và nó trả về text
        // (text) => setTask(text): arrow func chuyền vào giá trị text 
        // trả về giá trị của hàm setTask(text) (hàm setTask(text)
        // nhận biến text) và thay đổi giá trị của task và alert ra thôi
         onChangeText={(text) => setTask(text)}
         value={task}
        ></TextInput>

        <TouchableOpacity
          // onPress bắt sự kiện ấn vào nút + và nó sẽ gọi hàm handeAddTask
          onPress={handeAddTask}
        >
          <View style={styles.iconWarapper}>
              <Text style={styles.icon}>+</Text>
          </View>
        </TouchableOpacity>
        
    </View>
  )
}

export default FormMain



