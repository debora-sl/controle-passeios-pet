import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

export const getCadastroPasseios = () => api.get('/passeios')

export default api
