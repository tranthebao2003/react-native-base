
import {Image } from "react-native";

function FiveStars(props) {
  const { numberOfStars } = props; // số sao từ sever trả về
  arrayStart = [0, 1, 2, 3, 4]; // đại diện cho số sao
  return arrayStart.map((item, index) =>
    item <= numberOfStars - 1 ? (
      <Image
        key={index}
        source={require("../../resource/iconProduct/iconStar/star.png")}
        style={{
          width: 15,
          height: 15,
        }}
        resizeMode="contain"
      ></Image>
    ) : (
        <Image
        key={index}
        source={require("../../resource/iconProduct/iconStar/starEmpty.png")}
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
