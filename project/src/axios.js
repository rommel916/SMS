import {
    api
} from './axios/api'
import Echarts from 'echarts'

const install = (Vue) => {
    const plugins = {
        $api: api,
        $echarts: Echarts
    }
    Object.assign(Vue.prototype, plugins)
}

export default {
    install
}