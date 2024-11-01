import type { HttpContext } from '@adonisjs/core/http'


import loadArticles from '../logic/helper.js'
export default class ArticlesController {
    async index({auth, view, response }:HttpContext){
        
        let articles = await loadArticles();
        return view.render('pages/article',{articles : articles})
        
    
    }


}