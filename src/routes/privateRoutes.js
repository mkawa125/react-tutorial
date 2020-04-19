import React from 'react';
import { Redirect, Route } from 'react-router';
 
const AuthenticatedRoutes = ({ component: Component, ...rest }) => (
    <Route
        { ...rest }
        render={ props => 
            localStorage.getItem("token") ? (
                <Component {...props} />
            ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location}
                        }}
                    />
            )

        }
    />
);
export default AuthenticatedRoutes;
