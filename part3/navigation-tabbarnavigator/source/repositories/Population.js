import axios from "axios";
// https://datausa.io/api/data?drilldowns=Nation&measures=Population
const SERVER_NAME = 'datausa.io'
const getPopulation = async({drilldowns, measures}) => {
    const urlGetUserDetail = `https://${SERVER_NAME}/api/data?drilldowns=${drilldowns}&measures=${measures}`
    try {
      let result = []; // mục đích tạo result này là để chuẩn hóa cái ID Nation và những key có cách,
      // chuyển nó về ko cách
      let responseData = await axios.get(urlGetUserDetail);
      responseData.data.data.forEach((item) => {
        let myObject = {};
        // gán giá trị của key : 'ID Nation' của object item
        myObject.nationId = item["ID Nation"];
        myObject.year = item["Year"];
        myObject.population = item["Population"];
        result.push(myObject); // sau đó đưa từng object này vào array result
      });
      return result;
    } catch (error) {
      throw error;
    }
}

export default{
    getPopulation
}