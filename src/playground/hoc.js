import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return (
    <div>
      <h1>...Just a normal component</h1>
      <p>The devil is in the {props.info}</p>
    </div>
    
    )
};

//
//const importantMessage = (WrappedComponent) => {
//    return (props) => (
//    <div>
//      <p>This is important: hi. </p>
//      <WrappedComponent {...props} />
//    </div>
//    )   
//};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
    <div> 
        {props.isAuthenticated ? <WrappedComponent {...props} /> : <p> You are not authorized to view this component </p>}
            
    </div>
    
    )
}

//const AdminInfo = importantMessage(Info); 

const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo info='details' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info='details' />, document.getElementById('app'));