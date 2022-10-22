import { http } from './http'

export default {
  getAllBooks: () => {
    return http.get('/books')
  },
}