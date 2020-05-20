import http from '@/utils/request'

export function test() {
	return http.request({
		url: '',
		method: 'POST',
		data
	})
}