import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <p>here is your info:</p>
        <p>{props.info}</p>
    </div>
);

const requireAuthintiction = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? <WrappedComponent {...props} /> : <p>please login</p>}
        </div>
        );
};

const AuthInfo = requireAuthintiction(Info);

ReactDOM.render(<AuthInfo isAuth={true} info="deitalisssssssssssss" />, document.getElementById('app')); 