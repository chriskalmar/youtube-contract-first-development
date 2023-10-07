import { useQuery } from '@tanstack/react-query'
import { User } from '../backend-api'
import { getBackendApi } from '../api'

const fetchUsers = async () => {
  const response = await getBackendApi().users.getUsers()

  return response.data
}

const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => fetchUsers(),
  })
}

const fetchUserById = async (id: User['id']) => {
  const response = await getBackendApi().users.getUser(id)

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
