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
    QuestionsComponent,
    ResetPasswordComponent,
    ShoppingCartComponent,
    Notification_ShowAll,
    ChangePassword,
    UpdateProfile,
    AppSettings,
    FavoriteCourse,
    Favorite_Book,
    ExamList,
    DoingExam
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
                name: 'Notification ShowAll',
                title: 'Notification ShowAll Page',
                component: Notification_ShowAll,
                path: '/notification-showAll'
            },

            {
                name: 'ChangePassword',
                title: 'ChangePassword Page',
                component: ChangePassword,
                path: '/thông-tin-ca-nhân/thay-đổi-mật-khẩu'
            },
            {
                name: 'UpdateProfile',
                title: 'UpdateProfile Page',
                component: UpdateProfile,
                path: '/thông-tin-ca-nhân/cập-nhật-thông-tin'
            },
            {
                name: 'AppSettings',
                title: 'AppSettings Page',
                component: AppSettings,
                path: '/thông-tin-ca-nhân/cài-đặt'
            },

            {
                name: 'FavoriteCourse',
                title: 'FavoriteCourse Page',
                component: FavoriteCourse,
                path: '/favorite-course'
            },
            {
                name: 'Favorite_Book',
                title: 'Favorite_Book Page',
                component: Favorite_Book,
                path: '/favorite-book'
            },
            {
                name: 'ExamList',
                title: 'ExamList Page',
                component: ExamList,
                path: '/exam-list'
            },
            {
                name: 'DoingExam',
                title: 'DoingExam Page',
                component: DoingExam,
                path: '/doing-exam/Lớp 6/'
            },
            {
                name: 'DoingExam',
                title: 'DoingExam Page',
                component: DoingExam,
                path: '/doing-exam/Lớp 7/'
            },
            {
                name: 'DoingExam',
                title: 'DoingExam Page',
                component: DoingExam,
                path: '/doing-exam/Lớp 8/'
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
