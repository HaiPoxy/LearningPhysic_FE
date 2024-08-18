import { Routes, Route } from 'react-router-dom';
import { routeItems } from './index.jsx' ;

const RouteMapper = () => {
    return (
        <Routes>
            {routeItems.map((routeItem, index) => (
                <Route key={index} element={<routeItem.layout />}>
                    {routeItem.routes.map((route, subIndex) => (
                        <Route
                            key={subIndex}
                            path={route.path}
                            element={
                                route.isPublic ? (
                                    <route.component />
                                ) : (
                                    //Kiểm tra login
                                    <PrivateRoute>
                                        <route.component />
                                    </PrivateRoute>
                                )
                            }
                        />
                    ))}
                </Route>
            ))}
        </Routes>
    );
};

const PrivateRoute = ({ children }) => {
    const isAuthenticated = true
    return isAuthenticated ? children : <Redirect to="/login" />;
};

export default RouteMapper;
