import { AxiosError } from "axios"
import { client, ResponseAPI } from "../../api/getUsers";


export const getUsers = async ( ): Promise<ResponseAPI[]> => {
    try {
        const { data } = await client.get('?_limit=6')
        return data.data

    } catch (error) {

        const err = error as AxiosError
        console.log(err.message)
        console.log(err.name)

        return []
    }
}