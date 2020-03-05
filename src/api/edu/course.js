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
  }
}
