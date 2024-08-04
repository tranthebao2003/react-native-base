import React from 'react'
import {Text, View} from 'react-native'
import {sum2Number, substract2Number, PI} from '../utilies/calculation'

// function MainScreen(props){
//     return<Text>This is main screen</Text>
// }

const Welcome = (props) => {
    const {person} = props
    const {products} = props
    // destructuring person object
    const{name, age, email} = person
    
    return(
        <View>
            <Text>This is welcome screen, x = {props.x}, y = {props.y}</Text>
            <Text>Name = {name}, email = {email}, age = {age}</Text>

            {/* <Text>{JSON.stringify(products)}</Text> */}
            {products.map((product, index)=> <Text key={index}>{product.productName}, {product.year}</Text>)}
            <Text>sum 2 and 3 = {sum2Number(3,2)}</Text>
            <Text>substract 2 and 3 = {substract2Number(10, 8)}</Text>
            <Text>PI = {PI}</Text>
        </View>
    )
}
export default Welcome   