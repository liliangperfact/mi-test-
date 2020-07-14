import axios from 'axios'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'


const service = axios.create({
  baseURL:'/api',
  timeout:20000//超时时间
})
service.interceptors.request.use(config => {
  Nprogress.start()//进度条开始
  return config //返回结果
})
service.interceptors.response.use(
  response =>{
    Nprogress.done()//进度条结束
    return response.data
  },
  error =>{
    Nprogress.done()//进度条结束
    alert('请求出错' + error.message || '未知错误')
    return new Promise(()=>{})//设置状态为pending
  }
)
export default service