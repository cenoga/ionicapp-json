import { IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { camera } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import Card from "../components/Card";
import people from "../data/data.json";

type Person = {
  name: string;
  phone: string;
  note: string;
};
const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
  <IonFab vertical="bottom" horizontal="center" slot="fixed">
    <IonFabButton onClick={() => takePhoto()}>
      <IonIcon icon={camera}></IonIcon>
    </IonFabButton>
  </IonFab>
  {people?.map((person: Person, index: number) => (
          <Card
            key={index}
            title={person.name}
            content={person.note}
            subtitle={person.phone}
          />
        ))}
</IonContent>
    </IonPage>
  );
};

export default Tab2;
function takePhoto(): void {
  throw new Error('Function not implemented.');
}

