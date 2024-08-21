import {Route, Routes} from 'react-router-dom';
import {routeItems} from './index.jsx';
import PrivateRoute from "./PrivateRoute.jsx";

const RouteMapper = () => {
    return (
        <Routes>
            {routeItems.map((routeItem, index) => (
                <Route key={index}>
                    {routeItem.routes.map((route, subIndex) => (
                        <Route
                            key={subIndex}
                            path={route.path}
                            element={
                                route.isPublic ? (
                                    <route.component/>
                                ) : (
                                    //Kiểm tra login
                                    <PrivateRoute>
                                        <route.component/>
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

export default RouteMapper;
