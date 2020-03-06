import request from '@/utils/request'

const api_name = '/video'

export default {

  saveVideo(video) {
    return request({
      url: `${api_name}/save`,
      method: 'post',
      data: video
    })
  },
  getVideoById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'get'
    })
  },
  updateVideo(video) {
    return request({
      url: `${api_name}/update`,
      method: 'put',
      data: video
    })
  },
  removeVideoById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'delete'
    })
  }
}
