import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonButton, IonTitle, IonToolbar, IonInput, IonItem, IonList, IonCol, IonGrid, IonRow, IonLabel } from '@ionic/react';

const Multiplication: React.FC = () => {
  const [meanSalary, setMeanSalary] = useState<number>(100); // Set initial value to 100
  const [numberOfParticipants, setNumber2] = useState<number>(5); // Set initial value to 5
  const [result, setResult] = useState<number>(0);
  const [cumulativeSum, setCumulativeSum] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setCumulativeSum((prevSum) => prevSum + result);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isRunning, result]);

  const handleStart = () => {
    setResult(meanSalary * numberOfParticipants);
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setResult(0);
    setCumulativeSum(0);
  };

  const calculateResult = () => {
    if (result === 0) {
        return 0;
      }
    const secondsElapsed = Math.floor(cumulativeSum / result);
    return result * secondsElapsed;
  };

  useEffect(() => {
    setResult(meanSalary * numberOfParticipants);
  }, [meanSalary, numberOfParticipants]);

  return (
    
    <>
      <IonContent fullscreen>
      
      <IonGrid>
        <IonRow>
          <IonCol>
          <IonInput label="Enter the mean salary of the members in CHF/second" labelPlacement="floating" fill="solid" type="number"
          value={meanSalary}
          onIonChange={(e) => setMeanSalary(Number(e.detail.value!))} ></IonInput>
          <br />
          <IonInput label="Enter the number of the attendees" labelPlacement="floating" fill="solid"           type="number"
          value={numberOfParticipants}
          onIonChange={(e) => setNumber2(Number(e.detail.value!))}></IonInput>
          </IonCol>
        </IonRow>
      </IonGrid>  
      <IonGrid>
        <IonRow>
          <IonCol size = '6' offset='3'>
            
          <IonButton expand="block" disabled={isRunning} onClick={handleStart}>Start</IonButton>
            

            {/* <IonButton expand="block">start counter</IonButton> */}

          </IonCol>

        </IonRow>
      </IonGrid>  
      <IonGrid>
        <IonRow>
          <IonCol size = '6' offset='3'>
            
          <IonButton expand="block" disabled={!isRunning} onClick={handleStop}>Stop</IonButton>

          </IonCol>

        </IonRow>
      </IonGrid>  
      <IonGrid>
        <IonRow>
          <IonCol size = '6' offset='3'>
            
          <IonButton expand="block" onClick={handleReset}>Reset</IonButton>

          </IonCol>

        </IonRow>
      </IonGrid>  
      <IonGrid>
        <IonRow>
          <IonCol size = '6' offset='3'>
          {/* <IonItem> */}
          <IonLabel color="danger">
        Cumulative expenses: <br />
        <h1>{calculateResult()} </h1>
        </IonLabel>
        {/* </IonItem> */}
          </IonCol>

        </IonRow>
      </IonGrid>  
      
      </IonContent>

     
    </>
  );
};

export default Multiplication;
