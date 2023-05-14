import React from 'react';
import {IonCol, IonGrid, IonRow, IonButton,  IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './CardCodigo.css';

function Card() {
  return (
    <>



<IonGrid>
      <IonRow>

        <IonCol size-xs="4" offset="1">
<IonCard color="danger">
        <IonCardHeader>
          <IonCardTitle>Generador de Codigo</IonCardTitle>
          <IonCardSubtitle>Python</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Nuevo
        <IonButton color="dark" shape="round"  expand="block">
          <a href="http://asistente.sytes.net:5001/codigo"> COMENZAR  </a>
        </IonButton>
        </IonCardContent>
      </IonCard>
        </IonCol>

        <IonCol size-xs="4" offset="1">
<IonCard color="danger">
        <IonCardHeader>
          <IonCardTitle>Generador de Codigo</IonCardTitle>
          <IonCardSubtitle>Java Script</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Nuevo
        <IonButton color="dark" shape="round"  expand="block">
          <a href="http://asistente.sytes.net:5001/codigo"> COMENZAR  </a>
        </IonButton>
        </IonCardContent>
      </IonCard>
         </IonCol>
      </IonRow>
    </IonGrid>




<br></br>
    <IonGrid>
      <IonRow>
        <IonCol size-xs="4" offset="1">
<IonCard color="danger">
        <IonCardHeader>
          <IonCardTitle>Generador de Codigo</IonCardTitle>
          <IonCardSubtitle>React</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Nuevo
        <IonButton color="dark" shape="round"  expand="block">
          <a href="http://asistente.sytes.net:5001/codigo"> COMENZAR  </a>
        </IonButton>
        </IonCardContent>
      </IonCard>
        </IonCol>
        <IonCol size-xs="4" offset="1">
<IonCard color="danger">
        <IonCardHeader>
          <IonCardTitle>Generador de Codigo</IonCardTitle>
          <IonCardSubtitle>Ionic</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Nuevo
        <IonButton color="dark" shape="round"  expand="block">
          <a href="http://asistente.sytes.net:5001/codigo"> COMENZAR  </a>
        </IonButton>
        </IonCardContent>
      </IonCard>
        </IonCol>
      </IonRow>
    </IonGrid>

<br></br>
<br></br>
<br></br>






     
      <IonCard color="danger">
        <IonCardHeader>
          <IonCardTitle>Generador de Codigo</IonCardTitle>
          <IonCardSubtitle>Django</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Nuevo
        <IonButton color="dark" shape="round"  expand="block">
          <a href="http://asistente.sytes.net:5001/codigo"> COMENZAR  </a>
        </IonButton>
        </IonCardContent> 
      </IonCard>
<br></br>
<br></br>      
<br></br>
<br></br>
<br></br>
<br></br>
    </>
  );
}
export default Card;
