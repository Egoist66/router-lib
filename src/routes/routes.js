import {
    HomeController,
    UserController,
    UsersController,
    Page404Controller
} from '../modules/index.js'


export const routesConfig = {
    links: {
        selector: 'header nav a'
    },
    notFound: 'Page404Controller',
    watch: (routesMap) => console.log(routesMap),
    paths: [
        {
            pattern: '/',
            render: (path, params) => HomeController.view(params)
        },

        {
            pattern: '/users',
            render: (path, params) => UsersController.view(params)
        },
        {
            pattern: '/user/:id',
            render: (path, params) => UserController.view(params)
        },

    ]
}