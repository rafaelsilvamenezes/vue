import financesRoutes from './../modules/finances/router'
const Dashboard = () => import('./../views/Dashboard.vue')

export default [
    {
        path:'/home',
        component:Dashboard,
        children:[
            ...financesRoutes
        ]
    }
]