import AnonymousLayout from "../layouts/AnonymousLayout/index.jsx";
import UserLayout from "../layouts/UserLayout/index.jsx";
import AdminLayout from "../layouts/AdminLayout/index.jsx";
import {
    AccountsComponent,
    ArticlesComponent,
    ChatsComponent,
    CoursesComponent,
    DashboardComponent,
    EbooksComponent,
    ExamsComponent,
    ForumComponent,
    HomePage,
    LecturesComponent,
    LoginComponent,
    LogoutComponent,
    NotFoundComponent,
    QuestionsComponent
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
                name: 'forum',
                title: 'Forum Page',
                component: ForumComponent,
                path: '/forum'
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
