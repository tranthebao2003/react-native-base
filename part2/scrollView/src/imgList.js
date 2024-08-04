import React, { useEffect, useState, useRef } from 'react'
import { View,Text, SafeAreaView, Image, ScrollView, Dimensions } from 'react-native'

// width: screenWidth đặt lại tên là width: screenWidth
const{width: screenWidth} = Dimensions.get('window')

export default function ImgList() {
    const [imgList, setImgList] = useState([])
    const [currentImg, setCurrentImg] = useState(0)
    const stepCarousel = useRef(null)
    useEffect(() => {
        // load data từ sever
        const data = [
            {
                image : <Image source = {require('../img/1.jpg')} resizeMode = 'stretch'
                            style = {{width: screenWidth, height: '100%'}}
                        />,
                type: 'png',
                camera: 'sony'
            },
            {
                image : <Image source = {require('../img/2.jpg')} resizeMode = 'stretch'
                        style = {{width: screenWidth, height: '100%'}}
                        />,
                type: 'png',
                camera: 'fujifilm'
            },
            {
                image : <Image source = {require('../img/3.jpg')} resizeMode = 'stretch'  style = {{width: screenWidth, height: '100%'}}/>,
                type: 'png',
                camera: 'canon'
            },
            {
                image : <Image source = {require('../img/4.jpg')} resizeMode = 'stretch'  style = {{width: screenWidth, height: '100%'}}/>,
                type: 'png',
                camera: 'sony anpla'
            },
            {
                image : <Image source = {require('../img/5.jpg')} resizeMode = 'stretch'  style = {{width: screenWidth, height: '100%'}}/>,
                type: 'png',
                camera: 'sony'
            },
            {
                image : <Image source = {require('../img/6.jpg')} resizeMode = 'stretch'  style = {{width: screenWidth, height: '100%'}}/>,
                type: 'png',
                camera: 'iphone 15'
            },
            {
                image : <Image source = {require('../img/7.jpg')} resizeMode = 'stretch'  style = {{width: screenWidth, height: '100%'}}/>,
                type: 'png',
                camera: 'sony'
            },
            {
                image : <Image source = {require('../img/8.jpg')} resizeMode = 'stretch'  style = {{width: screenWidth, height: '100%'}}/>,
                type: 'png',
                camera: 'iphone 11'
            },
            {
                image : <Image source = {require('../img/9.jpg')} resizeMode = 'stretch'  style = {{width: screenWidth, height: '100%'}}/>,
                type: 'png',
                camera: 'sony'
            },
            {
                image : <Image source = {require('../img/10.jpg')} resizeMode = 'stretch'  style = {{width: screenWidth, height: '100%'}}/>,
                type: 'png',
                camera: 'sony'
            },

        ]

        // 2.. cập nhật lên state của screen
        setImgList(data)
    }, [])

    useEffect (() => {
        if(imgList.length > 0){
            let index = 0
            const timeId = setInterval(() => {
                // nó sẽ từ vị trí nào theo trục x : index * screenWidth, trục y thì mình ko scroll có chuyển động
                stepCarousel.current.scrollTo({x: index * screenWidth, y: 0, animated: true})
                index += 1
                if(index === imgList.length){
                    index = 0
                }

            }, 3000)
        }
    }, [imgList])

    // e: chính là event onScroll, trong react-native mik có thể truy cập những thông tin
    // liên quan đến sự kiện này thông qua object nativeEvent
  const handleScroll = (e) => {
    if(!e){
        return
    } else{
        const {nativeEvent} = e
        // nativeEvent && nativeEvent.contentOffset: nó giống && trog react, nếu VT khác null khác false
        // thì nó sẽ trả về VP nếu ko nó sẽ bỏ qua
        // Trong đoạn mã dưới, chúng ta kiểm tra xem nativeEvent có tồn tại hay không trước khi truy cập contentOffset. 
        // Nếu nativeEvent tồn tại, chúng ta tiếp tục kiểm tra contentOffset. 
        // Điều này giúp tránh gây ra lỗi nếu nativeEvent hoặc contentOffset không được gán giá trị

        // contentOffset chứa thông tin về vị trí cuộn của thành phần chứa cả x và y
        if(nativeEvent && nativeEvent.contentOffset){
            const currentOffset = nativeEvent.contentOffset.x
            let imageIndex = 0
            // nếu ko hiểu thì test dòng cosole.log ra
            // console.log(screenWidth, currentOffset)

            if(currentOffset > 0) {
                // nếu ko hiểu đoạn dưới thì uncomment đoạn này console.log(screenWidth, currentOffset) ra để xem 
                // nếu ảnh tiếp theo chiếm nửa màn hình thí nó sẽ tính index là ảnh đó
                imageIndex = Math.floor((currentOffset + screenWidth / 2) / screenWidth)
            }

            setCurrentImg(imageIndex)
            // console.log(imageIndex)
        }
    }
  }
  return (
    <SafeAreaView style = {{flex: 1}}>
        <View style={{flex: 1, marginTop: 30, alignItems: 'center'}}>
            <Text style={{fontSize: 30, marginBottom: 30}}>Picture list</Text>

            {/* ScrollView */}
            {/* horizontal: đê scrollView ngang, contentContainerStyle: định dạng những con j bên trong */}
            <View style={{width: screenWidth, height: 220}}>
                <ScrollView
                horizontal
                onScroll={handleScroll}
                scrollEventThrottle={16}
                ref={stepCarousel}
                // screenWidth * imgList.length : tổng chiểu rộng của length bức hính
                // và mỗi bức chiếm chọn bề ngang screen lun (trong TH này)
                contentContainerStyle = {{width: screenWidth * imgList.length, height: 200}}
                >
                    {imgList.map((e, index) => {
                        return(
                            <View key={index}>
                                {e.image}
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
            
            {/* information img */}
            <Text style={{fontSize: 20, fontWeight: 500, marginBottom: 30}}>Index : {currentImg}</Text>
            {/* imgList[currentImg] && imgList[currentImg].type: xem lại && trong jvs có note trong react rồi */}
            <Text style={{fontSize: 20, fontWeight: 500}}>Type: {imgList[currentImg] && imgList[currentImg].type}</Text>
            <Text style={{fontSize: 20, fontWeight: 500}}>camera: {imgList[currentImg] && imgList[currentImg].camera}</Text>
        </View>
    </SafeAreaView> 
  )
}
