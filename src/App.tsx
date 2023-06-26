import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { images, square, triangle } from 'ionicons/icons';
import Home from './pages/Home';
import Details from './pages/Details';
import Multiplication from './components/Multiplication';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './main.tsx'
// import Multiplication from '../components/Multiplication'

setupIonicReact();

const App: React.FC = () => (
  <IonPage>
  <IonHeader>
        <IonToolbar>
          <IonTitle>Home </IonTitle>
        </IonToolbar>
      </IonHeader>
    <IonContent>
      <Multiplication />
    </IonContent>
  </IonPage>
);

// const App: React.FC = () => (
//   <IonApp>
//     <IonReactRouter>
//       <IonTabs>
//         <IonRouterOutlet>
//           <Route exact path="/Home">
//             <Home />
//           </Route>
//           <Route exact path="/Details">
//             <Details />
//           </Route>
//           <Route exact path="/">
//             <Redirect to="/Home" />
//           </Route>
//         </IonRouterOutlet>
//         <IonTabBar slot="bottom">
//           <IonTabButton tab="Home" href="/Home">
//             <IonIcon aria-hidden="true" icon={triangle} />
//             <IonLabel>Home</IonLabel>
//           </IonTabButton>
//           <IonTabButton tab="Details" href="/Details">
//             <IonIcon aria-hidden="true" icon={images} />
//             <IonLabel>Details</IonLabel>
//           </IonTabButton>
//           <IonContent>
//       <Multiplication />
//     </IonContent>
//         </IonTabBar>
//       </IonTabs>
//     </IonReactRouter>
//   </IonApp>
// );

export default App;
