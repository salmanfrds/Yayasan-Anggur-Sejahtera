import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
    async showLogin({ view }: HttpContext) {
        return view.render('pages/login')
    }
    async login({ request, auth, response }: HttpContext) {
        const { username, password } = request.only(['username', 'password'])
        
        try {
            await auth.attempt(username, password)
            return response.redirect().toRoute('admin.index')
        } catch (error) {
            return response.redirect().back().withFlash('error', 'Invalid credentials')
        }
    }

    async logout({ auth, response }: HttpContext) {
        await auth.logout()
        return response.redirect().toRoute('login')
    }
}