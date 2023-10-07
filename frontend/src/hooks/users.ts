import { useQuery } from '@tanstack/react-query'
import { User } from '../types'
import axios from 'axios'

const fetchUsers = async () => {
  const response = await axios.get<Array<User>>('http://localhost:3010/users')

  return response.data
}

const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => fetchUsers(),
  })
}

export { useUsers, fetchUsers }
