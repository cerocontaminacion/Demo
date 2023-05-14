import Rsr from '../components/Rsr';
import AppGpt from '../AppGpt';
import Fab from '../components/Fab';
import CardGrafica from '../components/CardGrafica';



import AppPolotno from '../AppPolotno';

import ModalGpt from '../components/ModalGpt';

import React from 'react';
import { 
  IonModal,
  IonButton,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';



import {
  Button,
  Container,

  Grid,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";




function Menu() {
  return (
    <>

      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle><center>MUNNA</center></IonTitle>
          </IonToolbar>
        </IonHeader>
{/*        <IonContent className="ion-padding">This is the menu content.</IonContent> */}
      <br></br>
      <br></br>
     <IonContent>




        <IonAccordionGroup>
      <IonAccordion value="uno">
        <IonItem slot="header" color="light">
          <IonLabel>Munna Trabajos</IonLabel>
        </IonItem>
          <div  className="ion-padding" slot="content">
          <a target="_blank" rel="noopener noreferrer"  href="http://asistente.sytes.net:5001">Frontend Asistente </a>
        </div>
        <div className="ion-padding" slot="content">
          <a target="_blank" rel="noopener noreferrer"  href="https://sitiosimple.com/munna">Sitio Simple</a>
        </div>
        <div className="ion-padding" slot="content">
          <a href="https://sitiosimple.com/munna/admin">Sitio Simple Admin</a>
        </div>
        <div className="ion-padding" slot="content">
          <a href="http://asistente.sytes.net:8000">Django</a>
        </div>
        <div className="ion-padding" slot="content">
          <a href="https://somosmunna.myshopify.com/">Sitio Shopify</a>
        </div>
        <div className="ion-padding" slot="content">
          <a href="http://asistente.sytes.net:8100">Frontend Sitio Ionic Medusa</a>
        </div>

        <div className="ion-padding" slot="content">
          <a href="http://asistente.sytes.net:8000">Frontend Sitio</a>
        </div>
        <div className="ion-padding" slot="content">
          <a href="http://asistente.sytes.net:7000">Admin Sitio</a>
        </div>
        <div className="ion-padding" slot="content">
          <a href="http://asistente.sytes.net:9000">Backend Sitio</a>
        </div>
        <div className="ion-padding" slot="content">
          <a href="http://cerocontaminacion.pythonanywhere.com">Servidor python</a>
        </div>
        <div className="ion-padding" slot="content">
          <a href="https://www.noip.com/es-MX/login">NO IP</a>
        </div>
        <div className="ion-padding" slot="content">
          <a href="https://you.com/search?q=React+multiple+app.js&fromSearchBar=true&tbm=youchat">Navegador IA</a>
        </div>
        <div className="ion-padding" slot="content">
          <a href=""></a>
        </div>
        <div className="ion-padding" slot="content">
          <a href=""></a>
        </div>
      </IonAccordion>
       <br></br>
      <IonAccordion value="dos">
        <IonItem slot="header" color="light">
          <IonLabel>Beto Burguer Trabajos</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          <a href="https://betoburguer.myshopify.com/">Sitio Shopify</a>
        </div>
      </IonAccordion>
      </IonAccordionGroup>
      </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader translucent={true}>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>MUNNA</IonTitle>
          </IonToolbar>
        </IonHeader>
        
         <center> <h1> Bienvenid@ al Asistente </h1></center>
<Rsr />
<IonContent>
<ModalGpt />

</IonContent>


{/*

          <TextField



            type=""
            variant="outlined"
            value={process.env.REACT_APP_CHAT_API_KEY}
            onChange={(e) => changeApiKeyHandler(e)}
          />

*/}

          
      </IonPage>

    </>
  );
}
export default Menu;
