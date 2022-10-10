import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from "App/Models/User"
export default class UsersController {
    public async getUsers({ request, params }: HttpContextContract) {
        console.log(params)
        const user = await User.query().select('name').whereNot({ id: params.id })
        return user
    }

}
