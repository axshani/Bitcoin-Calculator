import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from "layouts/Dashboard"
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
const hist = createBrowserHistory();


// (async () => {
//     let myApp = await runApp(
//     <React.StrictMode> <Router history={hist}>
//                             <Switch>
//                                 <Route path="" component={Dashboard}></Route>
//                             </Switch>
//                         </Router></React.StrictMode>)
                        
    ReactDOM.render(
    <React.StrictMode> <Router history={hist}>
        <Switch>
            <Route path="" component={Dashboard}></Route>
        </Switch>
    </Router></React.StrictMode>,
    
         document.getElementById('root')
    )
// })();

    
// var request = { scopes: ['user.read'] };

// msalInstance.handleRedirectCallback((error : any) => {
//   if (error) {
//     console.log(error);
//   } else {
//     refreshUi();
//   }
// });


// if (msalInstance.getAccount()) {
//   msalInstance.acquireTokenSilent(request)
//     .then((res : any) => {
//       sessionStorage.setItem("msal.idtoken", res.accessToken);
//       refreshUi();
//     })
//     .catch((err : any) => {
//       if (err.name == "InteractionRequiredAuthError") {
//         msalInstance.acquireTokenRedirect(request)
//         //   .then((res : any) => {
//         //     console.log("succeeded");
//         //   })
//         //   .catch((err : any) => {
//         //     console.log(err);
//         //   })
//       }
//     })
// } else {
//   msalInstance.loginRedirect(request)
// }
