import request from '@/utils/request'

const api_name = '/course'

export default {
  saveCourseInfo(courseInfo) {
    return request({
      url: `${api_name}/save`,
      method: 'post',
      data: courseInfo
    })
  }

}
