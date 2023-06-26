import { IonContent, IonHeader, IonPage, IonButton, IonTitle, IonToolbar, IonInput, IonItem, IonList, IonCol, IonGrid, IonRow } from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Multiplication from '../components/Multiplication'; 

// const Home: React.FC
// {
//   return (
//     <IonContent>
//     <Multiplication />
//   </IonContent>
//   );
// };
//   export default Home;

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Home" />
      
      <IonGrid>
        <IonRow>
          <IonCol>
          <IonInput label="Enter the mean salary of the members in CHF/month" labelPlacement="floating" fill="solid" placeholder="15000"></IonInput>
          <br />
          <IonInput label="Enter the number of the attendees" labelPlacement="floating" fill="solid" placeholder="6"></IonInput>
          </IonCol>
        </IonRow>
      </IonGrid>  
      <IonGrid>
        <IonRow>
          <IonCol size = '6' offset='3'>

            <IonButton expand="block">start counter</IonButton>

          </IonCol>

        </IonRow>
      </IonGrid>  
      </IonContent>


    </IonPage>
  );
};

export default Home;
