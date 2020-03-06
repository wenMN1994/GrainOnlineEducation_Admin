import request from '@/utils/request'

const api_name = '/course'

export default {
  saveCourseInfo(courseInfo) {
    return request({
      url: `${api_name}/save`,
      method: 'post',
      data: courseInfo
    })
  },
  updateCourseInfo(courseInfo) {
    return request({
      url: `${api_name}/update`,
      method: 'put',
      data: courseInfo
    })
  },
  getCourseInfoById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'get'
    })
  },
  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },
  removeById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'delete'
    })
  },
  getCoursePublishVoById(id) {
    return request({
      url: `${api_name}/vo/${id}`,
      method: 'get'
    })
  },
  updateStatusById(id) {
    return request({
      url: `${api_name}/updateStatus/${id}`,
      method: 'put'
    })
  }

}
