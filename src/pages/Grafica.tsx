import { IonMenu, 
         IonButtons, 
         IonMenuButton, 
         IonContent, 
         IonHeader, 
         IonPage, 
         IonTitle, 
         IonToolbar,
         IonInfiniteScroll } from '@ionic/react';

import MenuGrafica from '../components/MenuGrafica'; 
import Fab from '../components/Fab'; 
import Encabezado from '../components/Encabezado';
import CardGrafica from '../components/CardGrafica'; 
import VoiceNav from '../components/VoiceNav';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
  
       
<IonPage>
    
    
       
           <MenuGrafica /> 
           <Fab />
        
    
</IonPage>   
  );
};

export default Tab1;
