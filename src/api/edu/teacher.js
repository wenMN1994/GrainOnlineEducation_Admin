import request from '@/utils/request'
const teacher_api = '/teacher'

export default {
  getList() {
    return request({
      url: '/teacher/list',
      method: 'get'
    })
  },
  getPageList(page, limit, searchObj) {
    return request({
      url: `${teacher_api}/${page}/${limit}`,
      method: 'post',
      data: searchObj
    })
  }
}
