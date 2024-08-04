// https://randomuser.me/api

// function async là hàm nó sẽ chạy xong xong với hàm khác
import axios from "axios"
const SERVER_NAME = 'randomuser.me'
const urlGetUserDetail = `https://${SERVER_NAME}/api`
const getUserDetail = async() => {
  try {
    // nếu có dòng nào có key 'await' thì có nghĩa là phải thực hiện xong 
    // lệnh dòng đó thì mới đi tiếp
    // dòng này là để nhận dữ liệu từ api
    let response = await axios.get(urlGetUserDetail)
    // nếu status nó khác 200 thì rất có thể nó bị lỗi
    // Throw để ném lỗi này ra, nó sẽ được truyền xuống các lớp 
    // gọi để xử lý tiếp hoặc báo lỗi cho người dùng hoặc hệ thống. 
    // Điều này cũng giúp quản lý và xử lý lỗi một cách chính xác trong ứng dụng
    if(response.status != 200){
        throw 'Failed request'
    }
    if(response.data.results.length > 0){
        let responseUser = response.data.results[0]
        let user = {} // tạo 1 object user
        // responseUser.dob.date: sever trả về 1 string sau đó
        // mình dùng Date để chuyển string thành time
        user.dateOfBirth = new Date(responseUser.dob.date)
        user.email = responseUser.email ?? ''
        // ?? 'male': nếu responseUser.gender (giá trị sever trả về)
        // là undefined thì gán responseUser.gender = male hay còn gọi
        // là default value
        user.gender = responseUser.gender ?? 'male' 
        // user.userId = `${responseUser.id.name}${responseUser.id.value}`
        user.userId = responseUser.id.name + responseUser.id.name 
        user.address = responseUser.location.street.number + ', ' + responseUser.location.street.name
        user.username = responseUser.login.username ?? ''
        user.url = responseUser.picture.large ?? ''
        user.phone = responseUser.phone ?? ''
        user.registerDate = new Date(responseUser.registered.date)
        
        return user
    }
    throw 'User not found'
  } catch(error){
    throw error
  }
}

const login = ({email,password}) => {

}

// many other function

export default{
    getUserDetail,
    login
}