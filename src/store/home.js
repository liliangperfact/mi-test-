import {reqCategoryList} from '@/api'
const state = {
  categoryList:[]
}
const mutations ={
  //修改数据
  RECEIVECATEGORYLIST(state,categoryList){
    state.categoryList = categoryList
  }
}
const actions = {
  //异步请求数据
  // getCategoryList({commit}){//等于axios,直接获取数据，返回成功或失败
  //   reqCategoryList().then(response =>{
  //     commit('RECEIVECATEGORYLIST',response.data)
  //    // return response.data
  //   }).catch(error =>{
  //     alert('请求失败' + error.message)
  //   })
  // }
  //上面比较捞，不用



  async getCategoryList({commit}){
    const result = await reqCategoryList()
    if(result.code === 200){//如果状态码为200
      commit('RECEIVECATEGORYLIST',result.data)//获取data数据给mutations
    }
  }
}
const getters = {

}


export default {
  state,
  mutations,
  actions,
  getters
}
  