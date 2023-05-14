import React, { useRef } from 'react';

import AppGpt from '../AppGpt';
import Rsr from '../components/Rsr';
import Fab from '../components/Fab';

import {
  IonButtons,
  IonButton,
  IonFabButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonImg,
} from '@ionic/react';

import './ModalGpt.css';

function Example() {
  const modal = useRef<HTMLIonModalElement>(null);

  function dismiss() {
    modal.current?.dismiss();
  }

  return (
        <IonPage>    
{/*      <IonHeader>
        <IonToolbar>
          <IonTitle>hhhhh</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent className="ion-padding">
<h1><center>Asistente</center></h1>
        <IonButton id="open-modal"  expand="block">
          Conversa con el Asistente IA
        </IonButton>

        <IonModal id="example-modal" ref={modal} trigger="open-modal">
          <IonContent>

            <IonToolbar>
              <IonTitle>Conversa con tu Asistente</IonTitle>
              <IonButtons slot="end">
                <IonButton color="light" onClick={() => dismiss()}>
                  Close
                </IonButton>
              </IonButtons>
            </IonToolbar>
            <IonList>
                 <AppGpt />
            </IonList>
          </IonContent>


        </IonModal>
      </IonContent>
      
   </IonPage>
  );
}

export default Example;
