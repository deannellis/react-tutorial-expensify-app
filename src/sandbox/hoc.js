// Higher Order Componenet (HOC) - a component that renders another component
// - Reuse Code
// - Render Hijacking
// - Prop Manipulation
// - Abstract State

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>Private Info. Please don't share.</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (<WrappedComponent {...props}/>) : (<p> Please Login </p>)}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<div><AdminInfo isAdmin={true} info="poop" /><AdminInfo info="fart" /></div>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="poop" />, document.getElementById('app'));