import { useState } from 'react';
import { StyleSheet, Text, View, StatusBar,Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import FoodItem from './FoodItem';
import colors from '../../component/colors';

// 2 cách: 
// - ListView from a map of objects
// - FlatList
export default function FoodList({navigation}) {
  // list of food = state
  const [foods, setFoods] = useState([
    {
      id: 1,
      name: 'Bánh canh',
      url: 'https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/banh_canh_bao_nhieu_calo_an_nhieu_co_beo_khong_1_bb98d27077.jpg',
      status: 'Opening now',
      price: 1323.56,
      website: 'https://vi.wikipedia.org/wiki/Danh_s%C3%A1ch_m%C3%B3n_%C4%83n_Vi%E1%BB%87t_Nam',
      socialNetworks:
        {
          facebook: 'https://www.facebook.com/luv.tn162',
          twitter: 'https://twitter.com/rip_krazy_',
          instagram: 'https://www.instagram.com/xeesoxee/'
        }
    },
    {
      id: 2,
      name: 'Bánh tằm cà ri',
      url: 'https://pentagonfoodgroup.co.uk/blog/wp-content/uploads/2022/07/fast-food.jpg',
      status: 'Opening now',
      price: 1232.56,
      website: 'https://www.nguyenkim.com/hom-nay-an-gi.html',
      socialNetworks:
        {
          twitter: 'https://twitter.com/rip_krazy_',
          instagram: 'https://www.instagram.com/xeesoxee/'
        }
      
    },
    {
      id: 3,
      name: 'Bún đậu mắm tôm',
      url: 'https://beta.ukri.org/wp-content/uploads/2023/10/UKRI-111023-BarbaqueFood.jpg',
      status: 'Closing',
      price: 932.56,
      website: 'https://vincom.com.vn/trend/hom-nay-an-gi',
      socialNetworks:
        {
          facebook: 'https://www.facebook.com/luv.tn162',
        }
      
    },
    {
      id: 4,
      name: 'Bún thịt nướng',
      url: 'https://cdn.tgdd.vn/Files/2020/12/16/1314124/thuc-an-nhanh-la-gi-an-thuc-an-nhanh-co-tot-hay-khong-202201201405201587.jpg',
      status: 'Comming soon',
      price: 222.56,
      website: 'https://www.ivivu.com/blog/2022/09/danh-sach-30-mon-an-mien-tay-hap-dan-nhat-dinh-phai-thu/',
      socialNetworks:
        {
          instagram: 'https://www.instagram.com/xeesoxee/'
        }
      
    },

    {
      id: 5,
      name: 'Bún bò cam canh',
      url: 'https://cdn.tgdd.vn/2020/12/CookProductThumb/Thuc-an-nhanh-la-gi-tac-hai-cua-thuc-an-nhanh-va-cac-loai-tot-cho-suc-khoe-1b-620x620.jpg',
      status: 'Closing',
      price: 773.56,
      website: 'https://www.ivivu.com/blog/2022/09/danh-sach-30-mon-an-mien-tay-hap-dan-nhat-dinh-phai-thu/',
      socialNetworks:
        {
          instagram: 'https://www.instagram.com/xeesoxee233/',
          facebook: 'https://www.facebook.com/luv.tn162',
        }
      
    },

    {
      id: 6,
      name: 'Bún thịt nướng cam ranh',
      url: 'https://www.ukri.org/wp-content/uploads/2023/12/IUK-051223-VariedProteinFoodsTable-GettyImages-1226542479-735x490.jpg',
      status: 'Comming soon',
      price: 2122.56,
      website: 'https://www.ivivu.com/blog/2022/09/danh-sach-30-mon-an-mien-tay-hap-dan-nhat-dinh-phai-thu/',
      socialNetworks:
        {
          instagram: 'https://www.instagram.com/xeesoxee333/',
          twitter: 'https://twitter.com/rip_krazy_',
        }
    },
  ])

  const [categories, setCategories] = useState([
    {
      id: 1,
      name: 'BBQ',
      url: require('../../resource/iconFoodList/bannerIcon/bbq.png')
    },
    {
      id: 2,
      name: 'BREAKFAST',
      url: require('../../resource/iconFoodList/bannerIcon/breakfast.png')
    },
    {
      id: 3,
      name: 'COFFEE',
      url: require('../../resource/iconFoodList/bannerIcon/coffee.png')
    },
    {
      id: 4,
      name: 'HOTDOG',
      url: require('../../resource/iconFoodList/bannerIcon/hotDog.png')
    },
    {
      id: 5,
      name: 'RAMEN',
      url: require('../../resource/iconFoodList/bannerIcon/ramen.png')
    },
    {
      id: 6,
      name: 'CAKE',
      url: require('../../resource/iconFoodList/bannerIcon/cake.png')
    },
    {
      id: 7,
      name: 'DIRNKS',
      url: require('../../resource/iconFoodList/bannerIcon/drinks.png')
    },
    {
      id: 8,
      name: 'DINNER',
      url: require('../../resource/iconFoodList/bannerIcon/dinner.png')
    },
  ])

  const [searchText, setSearchText] = useState('')
  {/* foods.filter: trả về những object đúng điều kiện 
      eachFood.name.toLowerCase().includes(searchText.toLowerCase()):
      nó kiểm tra xem searchText có nằm trong eachFood.name ko nếu có => true
      ko thì nó trả về false.

      Vậy thì tóm lại với mỗi eachFood nó sẽ kiểm tra xem tên của nó có chứa searchText
      hay không, nếu có thì trả về true => filter nhận đc true sẽ trả về eachFood, ngược
      lại khi nhận được false thì nó sẽ ko trả về eachFood đó
  */}
  const filteredFoods = () => {
    return foods.filter((eachFood) =>
      eachFood.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ flex: 1,}}>
        <View
          style={{
            height: 60,
            paddingHorizontal: 14,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextInput
            placeholder="Search"
            autoFocus={true}
            placeholderTextColor= {colors.primary}
            onChangeText={(text) => setSearchText(text)}
            style={{
              backgroundColor: colors.backgroundSecond,
              width: "85%",
              height: 45,
              paddingHorizontal: 40,
              color: colors.primary,
              fontSize: 22,
              borderRadius: 5,
            }}
          ></TextInput>
          
          <Image
            source={require("../../resource/iconFoodList/filterIcon/search.png")}
            style={{ position: "absolute", height: 20, width: 20, left: 20, tintColor: colors.primary }}
            resizeMode="cover"
          ></Image>

          <Image
            source={require("../../resource/iconFoodList/filterIcon/filter.png")}
            style={{ height: 40, width: 40, tintColor: colors.primary }}
            resizeMode="cover"
          ></Image>
        </View>
        <View style={{ height: 120, marginBottom: 20 }}>
          <View
            style={{
              backgroundColor: colors.primary,
              height: 1,
              width: "100%",
            }}
          ></View>

          <FlatList
            data={categories}
            keyExtractor={categories.id}
            horizontal={true}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => alert(`${item.name}`)}
                  style={{
                    width: 100,
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: -22,
                    marginRight: 5,
                  }}
                >
                  <Image
                    source={item.url}
                    style={{
                      height: 40,
                      width: 40,
                      marginBottom: 5,
                    }}
                    resizeMode="cover"
                  ></Image>
                  <Text
                    style={{
                      color: colors.primary,
                      fontSize: 12,
                    }}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            }}
            style={{ flex: 1}}
          ></FlatList>

          <View
            style={{
              backgroundColor: colors.primary,
              height: 1,
              width: "100%",
            }}
          ></View>
        </View>

        {filteredFoods().length > 0 ? (
          <FlatList
            data={filteredFoods()}
            renderItem={({ item }) => (
              <FoodItem
                food={item}
                onPressItem={() => {
                  alert(`you press item's name: ${item.name}`);
                }}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 26, color: colors.primary}}>Not Found</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 50
  },
});
