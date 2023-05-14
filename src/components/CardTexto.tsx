import React from 'react';
import { IonButton,  IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './main.css';
import Fab from '../components/Fab';
function Card() {
  return (
    <>
    

      <IonCard color="warning">
        <IonCardHeader>
          <IonCardTitle>🛍️ Generar descripciones de productos ️ ️</IonCardTitle>
          <IonCardSubtitle>Genere descripciones de productos para cualquier tipo de producto, simplemente ingrese el nombre y la descripción del producto para comenzar.</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Nuevo
          <IonButton color="dark" shape="round"  expand="block">
          <a href="http://asistente.sytes.net:5001/product-description"> COMENZAR  </a>
        </IonButton>
        </IonCardContent>
      </IonCard>
<br></br>
      <IonCard color="danger">
        <IonCardHeader>
          <IonCardTitle>🖥️ Generar descripciones de puestos</IonCardTitle>
          <IonCardSubtitle>¿Está tratando de encontrar descripciones de trabajo que suenen profesionales pero se ha topado con un bloqueo de escritor? Deja que la IA te ayude.</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Nuevo
          <IonButton color="dark" shape="round"  expand="block">
          <a href="http://asistente.sytes.net:8000"> COMENZAR  </a>
        </IonButton>
        </IonCardContent>
      </IonCard>
<br></br>
      <IonCard color="light">
        <IonCardHeader>
          <IonCardTitle>🐦 Generador de tweets increibles</IonCardTitle>
          <IonCardSubtitle>Comience a generar ideas de tweets con hashtags para sus campañas de redes sociales en línea en twitter. Cree un sinfín de ideas únicas para tweets, no más bloqueos de escritores.</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Nuevo
          <IonButton color="dark" shape="round"  expand="block">
          <a href="http://asistente.sytes.net:8000"> COMENZAR  </a>
        </IonButton>
        </IonCardContent>
      </IonCard>
<br></br>
      <IonCard color="medium">
        <IonCardHeader>
          <IonCardTitle>✉️ Generador de plantillas de correo electrónico</IonCardTitle>
          <IonCardSubtitle>Esto es perfecto para agentes de marketing o empresas que necesitan ideas frescas diariamente sobre contenido de correo electrónico frío creado por IA.</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Nuevo
          <IonButton color="dark" shape="round"  expand="block">
          <a href="http://asistente.sytes.net:8000"> COMENZAR  </a>
        </IonButton>
        </IonCardContent>
      </IonCard>
<br></br>
      <IonCard color="dark">
        <IonCardHeader>
          <IonCardTitle>👨‍👩‍👧‍👦 Generador de anuncios en redes sociales</IonCardTitle>
          <IonCardSubtitle>¿Está buscando ideas creativas de publicidad en redes sociales para sus campañas en línea en Facebook, Twitter o Instagram? Te tenemos.</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Nuevo
          <IonButton color="dark" shape="round"  expand="block">
          <a href="http://asistente.sytes.net:8000"> COMENZAR  </a>
        </IonButton>
        </IonCardContent> 
      </IonCard>
   <br></br>
        <IonCard color="dark">
        <IonCardHeader>
          <IonCardTitle>💼 Generador de ideas de negocios</IonCardTitle>
          <IonCardSubtitle>Cree algunas ideas para un lanzamiento rápido de un párrafo para su idea de negocio, describa su idea y produzca lanzamientos útiles</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Nuevo
          <IonButton color="dark" shape="round"  expand="block">
          <a href="http://asistente.sytes.net:8000"> COMENZAR  </a>
        </IonButton>
        </IonCardContent>        
      </IonCard>
<br></br>
      <IonCard color="dark">
        <IonCardHeader>
          <IonCardTitle>📺 Generador de ideas de videos de Youtube </IonCardTitle>
          <IonCardSubtitle>¿Quieres empezar a trabajar en YouTube pero necesitas algunas ideas de vídeo en las que empezar a trabajar? Comience a generar algunas ideas de videos de YouTube de inmediato con IA.</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Nuevo
          <IonButton color="dark" shape="round"  expand="block">
          <a href="http://asistente.sytes.net:8000"> COMENZAR </a>
        </IonButton>
        </IonCardContent>
        </IonCard>
<br></br>
      <IonCard color="dark">
        <IonCardHeader>
          <IonCardTitle>⏩ Descripción del video de Youtube </IonCardTitle>
          <IonCardSubtitle>Esta herramienta de IA lo ayudará a redactar algunas descripciones de video geniales basadas en un tema o idea de video. Simplemente ingrese el tema de su video. </IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          Nuevo
          <IonButton color="dark" shape="round"  expand="block">
          <a href="http://asistente.sytes.net:8000"> COMENZAR </a>
        </IonButton>
        </IonCardContent>
        </IonCard>
<br></br>
    </>
  );
}
export default Card;
