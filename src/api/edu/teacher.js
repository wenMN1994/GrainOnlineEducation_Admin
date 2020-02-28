import request from '@/utils/request'

export function getList() {
  return request({
    url: '/teacher/list',
    method: 'get'
  })
}
