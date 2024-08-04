import { useState } from 'react';
import { StyleSheet, View, StatusBar, FlatList,} from 'react-native';
import GridItem from './GirdItem1'
export default function ProductGridView() {
  const [products, setProducts] = useState([
    {
      id: 1,
      productName: 'Karcher',
      url: 'https://product.hstatic.net/1000365242/product/may-hut-bui-gia-dinh-karcher-vc-2-ma-1-198-101-0_37aaaaf9826b429a9324027e75c78431.png',
      price: 110,
      specifications: ['Dry clean', 'cyclone filter', 'convenienct cord storage'],
      reviews: 19,
      starts: 3,
    },
    {
      id: 2,
      productName: 'loveitopcdn',
      url: 'https://media.loveitopcdn.com/24349/may-hut-bui-cong-nghiep-th-803j.jpg',
      price: 75,
      specifications: ['extremely strong', 'super durable'],
      reviews: 30,
      starts: 5,
    },
    {
      id: 3,
      productName: 'Rapido RVC-600H ',
      url: 'https://rapido.vn/wp-content/uploads/2022/04/May-hut-bui-cam-tay.jpg',
      price: 200,
      specifications: ['Dry clean', 'convenienct cord storage'],
      reviews: 14,
      starts: 4,
    },
    {
      id: 4,
      productName: 'Hitachi CV-950F',
      url: 'https://lucasa.vn/image/cache/catalog/danh_muc/dien-gia-dung/thiet-bi-gia-dinh/may-hut-bui/Hitachi-CV-950F/May-hut-bui-Hitachi-CV-950F-Lucasa-1-1000x1000.jpg',
      price: 1400,
      specifications: ['Durable metal shell', 'luxury'],
      reviews: 100,
      starts: 2,
    },
    {
      id: 5,
      productName: 'Legi LG-999VT',
      url: 'https://kingshop.vn/data/products/500/may-hut-bui-legi-lg-999vt-cong-nghe-han-quoc-1.jpg',
      price: 360,
      specifications: ['Dry clean', 'compact'],
      reviews: 69,
      starts: 1,
    },
    {
      id: 6,
      productName: 'HiClean SP30',
      url: 'https://vietro.com.vn/uploads/images/may-hut-bui-Panasonic-PAHB-MC-CJ911RN49-7-1000x1000.jpg',
      price: 900,
      specifications: ['Dry clean', 'compact', 'Durable metal shell'],
      reviews: 69,
      starts: 2
    },
    {
      id: 7,
      productName: ' HOSOME',
      url: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/239/697/products/61iqpqtwvll-ac-sl1500.jpg?v=1579683646207',
      price: 1000,
      specifications: ['Dry clean', 'Durable metal shell'],
      reviews: 20,
      starts: 5,
    }, 
    {
      id: 8,
      productName: 'Cleaner Dreame T20',
      url: 'https://cdn.tgdd.vn/Products/Images/1990/222602/may-hut-bui-samsung-vcc8835v37-xsv-1-300x300.jpg',
      price: 200,
      specifications: ['Dry clean', 'compact', 'Durable metal shell'],
      reviews: 89,
      starts: 3,
    },  
    {
      id: 9,
      productName: 'Máy hút bụi Dreame Việt Nam',
      url: 'https://bluestonevn.com/wp-content/uploads/2016/09/may-hut-bui-Bluestone-vcb8037-ava.jpg',
      price: 200,
      specifications: ['Durable metal shell'],
      reviews: 120,
      starts: 4,
    },

  ])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        style={{ marginTop: 5, marginBottom: 5 }}
        data={products}
        //  numColumns: thể hiện số columns đc hiển thị
        numColumns={2}
        renderItem={({ item, index }) => (
          <GridItem
            item={item}
            index={index}
            products = {products}
            onPress={() => {
              let clonedProducts = products.map((eachProduct) => {
                if (item.id == eachProduct.id) {
                  return {
                    ...eachProduct,
                    isSaved:
                      eachProduct.isSaved == false ||
                      eachProduct.isSaved == undefined
                        ? true
                        : false,
                  };
                }
               
                return eachProduct;
              });
              setProducts(clonedProducts);
            }}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 52
  },
});
