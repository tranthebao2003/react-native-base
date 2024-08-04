import { useState } from "react";
import { Text, View, Image } from "react-native";

function FiveStars(props) {
  const { numberOfStars } = props; // số sao từ sever trả về
  arrayStart = [0, 1, 2, 3, 4]; // đại diện cho số sao

  // nó duyệt arrayStart bằng map (callbackFunction)
  // callbackFunction(item) => render start thỏa điều kiện nào đó
  // và cứ lặp lại như thế dến khi hết arrayStart

  // ví dụ: item có id = 1 nó trả về numberOfStars = 3,
  //   lần 1
  //   return arrayStart.map((0) => 0 <= 2 ? render ra star )
  //   lần 2
  //   return arrayStart.map((1) => 1 <= 2 ? render ra star)
  //   lần 3
  //   return arrayStart.map((2) => 2 <= 2 ? render ra star )
  //   lần 4
  //   return arrayStart.map((3) => 3 <= 2 ? render ra star empty )
  //   lần 5
  //   return arrayStart.map((4) => 4 <= 2 ? render ra star empty )
  
  //   tương tự cho những thằng item tiếp theo cho đến hết

  return arrayStart.map((item, index) =>
    item <= numberOfStars - 1 ? (
      <Image
        key={index}
        source={require("./iconStar/star.png")}
        style={{
          width: 15,
          height: 15,
        }}
        resizeMode="contain"
      ></Image>
    ) : (
        <Image
        key={index}
        source={require("./iconStar/starEmpty.png")}
        style={{
          width: 15,
          height: 15,
          tintColor: '#979797'
        }}
        resizeMode="contain"
      ></Image>
    )
  );
}
export default FiveStars;
