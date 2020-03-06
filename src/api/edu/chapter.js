import request from '@/utils/request'

const api_name = '/chapter'

export default {

  getChapterAndVideoByCourseId(courseId) {
    return request({
      url: `${api_name}/${courseId}`,
      method: 'get'
    })
  },
  save(chapter) {
    return request({
      url: `${api_name}/save`,
      method: 'post',
      data: chapter
    })
  },
  getChapterById(id) {
    return request({
      url: `${api_name}/get/${id}`,
      method: 'get'
    })
  },
  updateById(chapter) {
    return request({
      url: `${api_name}/update`,
      method: 'put',
      data: chapter
    })
  },
  removeById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'delete'
    })
  }
}
