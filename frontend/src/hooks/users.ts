import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { apiURL } from '../constants'
import { User } from '../backend-api'

const fetchUsers = async () => {
  const response = await axios.get<Array<User>>(`${apiURL}/users`)

  return response.data
}

const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => fetchUsers(),
  })
}

const fetchUserById = async (id: User['id']) => {
  const response = await axios.get<User>(`${apiURL}/users/${id}`)

  return response.data
}

const useUserById = (id?: User['id']) => {
  return useQuery({
    queryKey: ['users', id],
    queryFn: () => fetchUserById(id ?? 0),
    enabled: !!id,
  })
}

export { useUsers, fetchUsers, useUserById, fetchUserById }
