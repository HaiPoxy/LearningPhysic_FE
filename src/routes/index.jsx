import AnonymousLayout from "../layouts/AnonymousLayout/index.jsx";
import UserLayout from "../layouts/UserLayout/index.jsx";
import AdminLayout from "../layouts/AdminLayout/index.jsx";
import {

    AccountsComponent,
    ArticlesComponent,
    ChatsComponent,
    DashboardComponent,
    EbooksComponent,
    ExamsComponent,
    ForumComponent,
    HomePage,
    CoursesComponent,
    LecturesComponent,
    DetailLecturesComponet,
    ExcercisesComponent,
    LoginComponent,
    LogoutComponent,
    NotFoundComponent,
    QuestionsComponent,
    ResetPasswordComponent,
    ShoppingCartComponent
} from '../pages';

export const routeItems = [
    {
        layout: AnonymousLayout,
        routes: [
            {
                name: 'login',
                title: 'Login Page',
                icon: "nav-icon fas fa-tachometer-alt",
                component: LoginComponent,
                path: '/login',
                isPublic: true,
            },
            {
                name: 'logout',
                title: 'Logout Page',
                icon: "nav-icon fas fa-tachometer-alt",
                component: LogoutComponent,
                path: '/logout',
                isPublic: true,
            },
            {
                name: 'notfound',
                title: 'Not Found Page',
                icon: "nav-icon fas fa-tachometer-alt",
                component: NotFoundComponent,
                path: '/404page',
                isPublic: true,
            },
            {
                name: 'resetpassword',
                title: 'Reset Password Page',
                icon: "nav-icon fas fa-tachometer-alt",
                component: ResetPasswordComponent,
                path: '/reset-password',
                isPublic: true,
            }
        ]
    },
    {
        layout: UserLayout,
        routes: [
            {
                name: 'home',
                title: 'Home Page',
                component: HomePage,
                path: '/homepage'
            },
            {
                name: 'home',
                title: 'Home Page',
                component: HomePage,
                path: '/'
            },
            {
                name: 'forum',
                title: 'Forum Page',
                component: ForumComponent,
                path: '/forum'
            },
            {
                name: 'ShoppingCart',
                title: 'Shopping Cart Page',
                component: ShoppingCartComponent,
                path: '/shopping-cart'
            },
            {
                name: 'Course',
                title: 'Course Page',
                component: CoursesComponent,
                path: '/course/:id'
            },
            {
                name: 'lectures',
                title: 'Lectures Page',
                component: LecturesComponent,
                path: '/lectures/:id'
            },
            {
                name: 'DetailLectures',
                title: 'Detail Lectures Page',
                component: DetailLecturesComponet,
                path: '/detaillectures/:id'
            },
            {
                name: 'excercises',
                title: 'Excercises Page',
                component: ExcercisesComponent,
                path: '/excercises/:id'
            }
        ]
    },
    {
        layout: AdminLayout,
        routes: [
            {
                name: 'dashboard',
                title: 'Dashboard',
                component: DashboardComponent,
                path: '/admin/dashboard'
            },
            {
                name: 'questions',
                title: 'Questions',
                component: QuestionsComponent,
                path: '/admin/questions'
            },
            {
                name: 'exams',
                title: 'Exams',
                component: ExamsComponent,
                path: '/admin/exams'
            },
            {
                name: 'accounts',
                title: 'Accounts',
                component: AccountsComponent,
                path: '/admin/accounts'
            },
            {
                name: 'articles',
                title: 'Articles',
                component: ArticlesComponent,
                path: '/admin/articles'
            },
            {
                name: 'chats',
                title: 'Chats',
                component: ChatsComponent,
                path: '/admin/chats'
            },
            {
                name: 'ebooks',
                title: 'Ebooks',
                component: EbooksComponent,
                path: '/admin/ebooks'
            },
            {
                name: 'lectures',
                title: 'Lectures',
                component: LecturesComponent,
                path: '/admin/lectures'
            },
            {
                name: 'courses',
                title: 'Courses',
                component: CoursesComponent,
                path: '/admin/courses'
            }
        ]
    }
];
