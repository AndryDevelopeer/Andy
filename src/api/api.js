import * as axios from "axios";
const instance=axios.create({//создаем инстанс(сущьность при помощи библиотеки аксиос)
    withCredentials:true,//запрос от своего имени
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,// базовый урл запроса
    headers:{
        "API-KEY":"50a7c2e1-8db0-4c7f-b525-d74d2c255159"//ключь для запроса
    }
})
export const usersAPI={
    getUsers(currentPage,pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,{//данные для ответа на запрос
        }).then(response=>response.data)// затем из ответа берем только нужные данные
    }
}

/*export const unfollowAPI =(id)=>{
    debugger
    return instance.delete(`follow/${id}`,{//данные для ответа на запрос
    }).then(response=>response.data)// затем из ответа берем только нужные данные
}*/
