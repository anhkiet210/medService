import AccountDetail from '../pages/AccountDetail';
import Appointment from '../pages/Appointment';
import Doctors from '../pages/Doctors';
import FacemakDetection from '../pages/FacemaskDetection';
import Home from '../pages/Home';
import InfoDoctor from '../pages/InfoDoctor';
import MyAccount from '../pages/MyAccount';
import Orders from '../pages/Orders';
import OurBlog from '../pages/OurBlog';
import PostDetail from '../pages/PostDetail';
import TimeTable from '../pages/TimeTable';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/info-doctor/:id',
        component: InfoDoctor,
    },
    {
        path: '/time-table',
        component: TimeTable,
    },
    {
        path: '/blog',
        component: OurBlog,
    },
    {
        path: '/blog/:slug.:id.html',
        component: PostDetail,
    },
    {
        path: '/doctors',
        component: Doctors,
    },
    {
        path: '/facemask-detection',
        component: FacemakDetection,
    },
];

const privateRoutes = [
    {
        path: '/my-account',
        component: MyAccount,
    },
    {
        path: '/my-account/orders',
        component: Orders,
    },
    {
        path: '/my-account/account-detail',
        component: AccountDetail,
    },
    {
        path: '/appointment',
        component: Appointment,
    },
];

export { publicRoutes, privateRoutes };
