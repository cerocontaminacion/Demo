import React from 'react';
import {IonCol, IonGrid, IonRow, IonButton,  IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './main.css';

function Card() {
  return (

      <>
      
<IonGrid>
      <IonRow>

        <IonCol size-xs="4" offset="1">
<IonCard color="medium">
        <IonCardHeader>
          <IonCardTitle>🖼️ Crea Imagenes</IonCardTitle>
          <IonCardSubtitle>Imagenes sorprendentes con IA</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Nuevo
        <IonButton color="dark" shape="round"  expand="block">
{/*          <a href="/grafica/dos"> COMENZAR  </a> */}
          <a href="http://127.0.0.1:5001/dalle"> COMENZAR  </a>
        </IonButton>
        </IonCardContent>
      </IonCard>
        </IonCol>

        <IonCol size-xs="4" offset="1">
<IonCard color="secondary">
        <IonCardHeader>
          <IonCardTitle>🖌️ Editar Imagenes</IonCardTitle>
          <IonCardSubtitle>Dale estilo a tus imagenes</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Nuevo
          <IonButton color="dark" shape="round"  expand="block">
          <a href="http://127.0.0.1:3000"> COMENZAR </a>
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
<IonCard color="tertiary">
        <IonCardHeader>
          <IonCardTitle>✂️ Cortar Fondo</IonCardTitle>
          <IonCardSubtitle>Servira en muchas ocasiones</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Nuevo
          <IonButton color="dark" shape="round"  expand="block">
          <a href="http://127.0.0.1:8080"> COMENZAR  </a>
        </IonButton>
        </IonCardContent>
      </IonCard>
        </IonCol>
        <IonCol size-xs="4" offset="1">
<IonCard color="success">
        <IonCardHeader>
          <IonCardTitle>😆 Generar  Gifs y Memes</IonCardTitle>
          <IonCardSubtitle>Para toda clase de ocasion</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Nuevo
          <IonButton color="dark" shape="round"  expand="block">
          <a href="http://127.0.0.1:1234"> COMENZAR  </a>
        </IonButton>
        </IonCardContent>
      </IonCard>
        </IonCol>
      </IonRow>
    </IonGrid>
  
<br></br>
<br></br>
<br></br>
<br></br>
      
 
    </>

  );
}
export default Card;
