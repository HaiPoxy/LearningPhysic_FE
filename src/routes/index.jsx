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
    HomePage,
    LecturesComponent,
    LoginComponent,
    QuestionsComponent
} from '../pages';

export const routeItems = [
    {
        layout: AnonymousLayout,
        routes: [
            {
                name: 'login',
                title: 'Login page',
                icon: "nav-icon fas fa-tachometer-alt",
                component: LoginComponent,
                path: '/login',
                isPublic: true,
            }
        ]
    },
    {
        layout: UserLayout,
        routes: [
            {
                name: 'home',
                title: 'Home page',
                component: HomePage,
                path: '/home'
            },
        ]
    },
    {
        layout: AdminLayout,
        routes: [
            {
                name: 'dashboard',
                title: 'Dashboard',
                component: DashboardComponent,
                path: '/dashboard'
            },
            {
                name: 'questions',
                title: 'Questions',
                component: QuestionsComponent,
                path: '/questions'
            },
            {
                name: 'exams',
                title: 'Exams',
                component: ExamsComponent,
                path: '/exams'
            },
            {
                name: 'accounts',
                title: 'Accounts',
                component: AccountsComponent,
                path: '/accounts'
            },
            {
                name: 'articles',
                title: 'Articles',
                component: ArticlesComponent,
                path: '/articles'
            },
            {
                name: 'chats',
                title: 'Chats',
                component: ChatsComponent,  // Ensure you have this component defined
                path: '/chats'
            },
            {
                name: 'ebooks',
                title: 'Ebooks',
                component: EbooksComponent,  // Ensure you have this component defined
                path: '/ebooks'
            },
            {
                name: 'lectures',
                title: 'Lectures',
                component: LecturesComponent,  // Ensure you have this component defined
                path: '/lectures'
            },
            {
                name: 'courses',
                title: 'Courses',
                component: CoursesComponent,  // Ensure you have this component defined
                path: '/courses'
            }
        ]
    },


];
