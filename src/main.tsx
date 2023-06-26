import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import React from 'react';
// import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
// import { IonReactRouter } from '@ionic/react-router';

// import { Route, Redirect } from 'react-router';

// import { playCircle, radio, library, search } from 'ionicons/icons';

// import HomePage from './pages/Home';
// import RadioPage from './pages/Details';

// function Example() {
//   return (
//     <IonReactRouter>
//       <IonTabs>
//         <IonRouterOutlet>
//           <Redirect exact path="/" to="/Home" />
//           {/*
//           Use the render method to reduce the number of renders your component will have due to a route change.

//           Use the component prop when your component depends on the RouterComponentProps passed in automatically.
//         */}
//           <Route path="/Home" render={() => <Home />} exact={true} />
//           <Route path="/Details" render={() => <Details />} exact={true} />
//         </IonRouterOutlet>

//         <IonTabBar slot="bottom">
//           <IonTabButton tab="Home" href="/Home">
//             <IonIcon icon={playCircle} />
//             <IonLabel>Listen now</IonLabel>
//           </IonTabButton>

//           <IonTabButton tab="Details" href="/Details">
//             <IonIcon icon={radio} />
//             <IonLabel>Radio</IonLabel>
//           </IonTabButton>
//         </IonTabBar>
//       </IonTabs>
//     </IonReactRouter>
//   );
// }
// export default Example;