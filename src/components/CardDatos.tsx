import React from 'react';
import {IonCol, IonGrid, IonRow, IonButton,  IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './CardDatos.css';

function Card() {
  return (
    <>

     <IonGrid>
      <IonRow>
        <IonCol size-xs="4" offset="1">
<IonCard color="success">
        <IonCardHeader>
          <IonCardTitle>📊 Generador de datos</IonCardTitle>
          <IonCardSubtitle>Marco Bs4</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Nuevo
          <IonButton color="dark" shape="round"  expand="block">
          <a href="http://asistente.sytes.net:5001/scraper"> COMENZAR  </a>
        </IonButton>
        </IonCardContent>
      </IonCard>
        </IonCol>

        <IonCol size-xs="4" offset="1">
<IonCard color="success">
        <IonCardHeader>
          <IonCardTitle>📊 Generador de datos</IonCardTitle>
          <IonCardSubtitle>Marco Selenium</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Nuevo
          <IonButton color="dark" shape="round"  expand="block">
          <a href="http://asistente.sytes.net:5001/scraper"> COMENZAR  </a>
        </IonButton>
        </IonCardContent>
      </IonCard>
        </IonCol>
      </IonRow>
    </IonGrid>




<br></br>
<br></br>    
          
    </>
  );
}
export default Card;
