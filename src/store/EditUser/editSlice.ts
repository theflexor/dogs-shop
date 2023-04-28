import { AxiosError } from 'axios';
import api from '@api/api';
import { toast } from 'react-toastify';
import { errorHandler } from '@utils/errorHandler';



export const changeName = async ({ first_name, last_name, id }: { first_name: string, last_name: string, id: number }) => {
        try {
          const response = await api.patch(`/account/${id}/`, { first_name, last_name }, 
          {headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,},
          })
            toast.success("Успешно изменен");
            return response.data
        } catch (error) { 
          toast.error("Ошибка при изменение!");  
    }
}
  


export const changeDesc = async ({ about_user, id }: { about_user: string, id: number }) => {
    try {
        const response = await api.patch(`/account/${id}/`, { about_user },
        {headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,},
        })
        toast.success("Успешно изменен");
        return response.data
    } catch (error:AxiosError | any) {
        errorHandler(error)
    }
}



export const changePassword = async ({ old_password, new_password, new_password_confirm }: { old_password: string, new_password: string, new_password_confirm: string }) => {
    try {
      const response = await api.post(`/account/change_password/`, { old_password, new_password, new_password_confirm }, 
      {headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,},
      })

      if(response.status == 200) {
        toast.success(response.data)
      }

      return response.data
    } catch (error:AxiosError | any) {
      errorHandler(error)      
    }
}
