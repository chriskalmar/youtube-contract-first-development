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

const fetchUserById = async (id: User['id']) => {
  const response = await axios.get<User>(`http://localhost:3010/users/${id}`)

  return response.data
}

const useUserById = (id: User['id']) => {
  return useQuery({
    queryKey: ['users', id],
    queryFn: () => fetchUserById(id),
  })
}


export { useUsers, fetchUsers, useUserById, fetchUserById }
