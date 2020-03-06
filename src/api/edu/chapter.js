import request from '@/utils/request'

const api_name = '/chapter'

export default {

  getChapterAndVideoByCourseId(courseId) {
    return request({
      url: `${api_name}/${courseId}`,
      method: 'get'
    })
  }
}
