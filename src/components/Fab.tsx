import { Fragment } from 'react'

import ModalGpt from '../components/ModalGpt';

import React from 'react';
import { IonContent, 
         IonButton,
         IonPage,
         IonFab, IonFabButton, 
         IonFabList, 
         IonHeader, 
         IonIcon, 
         IonTitle, 
         IonToolbar } from '@ionic/react';
import { chevronDownCircle,
         chevronForwardCircle,
         chevronUpCircle,
         colorPalette,
         document,
         globe } from 'ionicons/icons';



function Fab() {

  return (

<React.Fragment>
     
      <IonContent className="ion-padding">
      <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton>
            <IonIcon icon={chevronUpCircle}></IonIcon>
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton >
              <IonIcon icon={document}></IonIcon>
              <a href="http://localhost:3000">.</a>
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={colorPalette}></IonIcon>
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={globe}></IonIcon> 
            </IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>
    </React.Fragment>
  );
}
export default Fab;
