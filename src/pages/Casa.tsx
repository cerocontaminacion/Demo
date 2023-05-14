import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'; 


import './Tab3.css'; 

import InputVoz from '../components/InputVoz';
import SalidaVoz from '../components/SalidaVoz';
import VoiceNav from '../components/VoiceNav';
import Fab from '../components/Fab';
import MenuCasa from '../components/MenuCasa';
import Rsr from '../components/Rsr';
import ModalGpt from '../components/ModalGpt';
import AppPolotno from '../AppPolotno';

import AppGpt from '../AppGpt';

const Tab3: React.FC = () => {

return (
    <IonPage>        
      
  <MenuCasa />

  <Fab />  
{/* <VoiceNav /> */}
    </IonPage> 


  );
};
 




export default Tab3;
