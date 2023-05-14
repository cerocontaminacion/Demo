import { IonContent, 
         IonHeader, 
         IonPage, 
         IonTitle, 
         IonToolbar,
         IonInfiniteScroll } from '@ionic/react';

import MenuCodigo from '../components/MenuCodigo';
import Fab from '../components/Fab';
import CardCodigo from '../components/CardCodigo';
import VoiceNav from '../components/VoiceNav';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
    
    

             <MenuCodigo />
             <Fab />
{/*             <VoiceNav /> */}
     
    
</IonPage>
  );
};

export default Tab3;
