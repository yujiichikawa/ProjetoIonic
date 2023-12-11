import { useEffect, useState } from 'react';
import './ExploreContainer.css';
import { IonContent, IonItem, IonLabel, IonList } from '@ionic/react';

type Product = {
  id:number;
  type:string;
  price:number;
}

const ExploreContainer: React.FC  = () => {
  let [dados,setDados] = useState<Product[]>([]);

  useEffect (() => {
    const fetchData = async () => {
      const response = await fetch('http://petstore-demo-endpoint.execute-api.com/petstore/pets')
      const myJson = response.json()
      .catch()
      setDados(await myJson) 
      
    }
    fetchData()
  }, [])

  return(
    <IonContent>
        {dados.map(item => {
          return (
            <IonList key={item.id}>
              <IonLabel>Id: {item.id}</IonLabel>
              <IonLabel>Type: {item.type}</IonLabel>
              <IonLabel>Price: {item.price}</IonLabel>
            </IonList>
          )
        })}
        
    </IonContent>
  );
   
};

export default ExploreContainer;
