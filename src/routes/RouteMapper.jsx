import {Navigate, Route, Routes} from 'react-router-dom';
import {routeItems} from './index.jsx';
import PrivateRoute from "./PrivateRoute.jsx";


const RouteMapper = () => {
    return (
        <Routes>
            {routeItems.map((routeItem, index) => (
                <Route key={index} element={<routeItem.layout/>}>
                    {routeItem.routes.map((route, subIndex) => (
                        <Route
                            key={subIndex}
                            path={route.path}
                            element={
                                route.isPublic ? (
                                    <route.component/>
                                ) : (
                                    <PrivateRoute>
                                        <route.component/>
                                    </PrivateRoute>
                                )
                            }
                        />
                    ))}
                </Route>
            ))}
            <Route path="*" element={<Navigate to="/404page" replace/>}/>
        </Routes>
    );
};


export default RouteMapper;
