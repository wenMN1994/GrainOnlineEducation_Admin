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
  },
  removeById(id) {
    return request({
      url: `${teacher_api}/${id}`,
      method: 'delete'
    })
  },
  save(teacher) {
    return request({
      url: `${teacher_api}/save`,
      method: 'post',
      data: teacher
    })
  },
  selectById(id) {
    return request({
      url: `${teacher_api}/${id}`,
      method: 'get'
    })
  },
  updateById(teacher) {
    return request({
      url: `${teacher_api}/update`,
      method: 'put',
      data: teacher
    })
  }

}
