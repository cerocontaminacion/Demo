import {
  IonAccordion, 
  IonAccordionGroup, 
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonAccordionGroup>
      <IonAccordion value="uno">
        <IonItem slot="header" color="light">
          <IonLabel>Munna Sitios</IonLabel>
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
      
      <IonAccordion value="dos">
        <IonItem slot="header" color="light">
          <IonLabel>Beto Burguer</IonLabel>
        </IonItem>
        <div className="ion-padding" slot="content">
          <a href="https://betoburguer.myshopify.com/">Sitio Shopify</a>
        </div>
      </IonAccordion>
      </IonAccordionGroup>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
