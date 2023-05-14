import {IonContent, 
        IonHeader, 
        IonPage, 
        IonTitle, 
        IonToolbar,
        IonInfiniteScroll,
        IonInfiniteScrollContent } from '@ionic/react';

import Menu from '../components/Menu';
import Fab from '../components/Fab';
import MenuTexto from '../components/MenuTexto';
import VoiceNav from '../components/VoiceNav';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
    
      
     
        
        
        <MenuTexto />
        <Fab />
    
    </IonPage>
    
  );
};

export default Tab2;
