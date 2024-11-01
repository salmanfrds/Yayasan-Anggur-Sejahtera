/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const AdminController = () => import('#controllers/admin_controller')
const AuthController = () => import('#controllers/auth_controller')
const ArticlesController = () => import('#controllers/articles_controller')


router.on('/').render('pages/home')
// router.on('/article').render('pages/article')
router.on('/program').render('pages/program')
router.on('/about').render('pages/about')
router.on('/contact').render('pages/contact')
router.get('/admin', [AdminController, 'index'])


router.get('/login', [AuthController, 'showLogin']).as('login')
router.post('/login', [AuthController, 'login'])
router.post('/logout', [AuthController, 'logout']).as('logout')
router.get('/articles',[ArticlesController,'index'])
router.post('/articles',[AdminController,'create'])