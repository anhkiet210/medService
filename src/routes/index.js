import Home from "../pages/Home"
import InfoDoctor from "../pages/InfoDoctor"
import TimeTable from "../pages/TimeTable"

const publicRoutes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/info-doctor',
        component: InfoDoctor
    },
    {
        path: 'time-table',
        component: TimeTable
    },
]

const privateRoutes = []

export {publicRoutes, privateRoutes}