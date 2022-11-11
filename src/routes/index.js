import AccountDetail from '../pages/AccountDetail';
import AddPost from '../pages/AddPost';
import Appointment from '../pages/Appointment';
import Doctors from '../pages/Doctors';
import FacemakDetection from '../pages/FacemaskDetection';
import Home from '../pages/Home';
import InfoDoctor from '../pages/InfoDoctor/[id]';
import Login from '../pages/Login/inde';
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
        path: '/login',
        component: Login,
    },
    {
        path: '/add-post',
        component: AddPost,
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
