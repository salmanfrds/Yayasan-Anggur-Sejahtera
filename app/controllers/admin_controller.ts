import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { Logger } from '@adonisjs/core/logger'
import { Exception } from '@adonisjs/core/exceptions'
import { insertArticle } from '#logic/helper'

@inject()
export default class AdminController {
    
    constructor(protected logger: Logger) {}


    async index({ auth, view, response }: HttpContext) {
        try {
            // Check if user is authenticated
            // const user = await auth.authenticate()

            // // Optional: Check for specific roles/permissions
            // if (!user || !user.is_admin) {
            //     // If not an admin, redirect to login
            //     return response.redirect().toRoute('login')
            // }

            // If authenticated and authorized, render admin page
            return view.render('pages/admin')
        } catch (error) {
            // If not authenticated, redirect to login
            return response.redirect().toRoute('login')
        }
    }

    // Additional method to check authentication middleware
    async create({ auth, view, response,request}: HttpContext) {
        try {

            let json = request.body();
            // this.logger.debug(json)
            await insertArticle(json);
            
           return {};
        } catch (error) {
            this.logger.debug(error)
        }
    }
}