import { useEffect, useState } from 'react';
import './ExploreContainer.css';
import { IonContent, IonItem, IonLabel } from '@ionic/react';

type Product = {
  id:number;
  type:string;
  price:number;
}

const ExploreContainer: React.FC  = () => {
  const [dados,setDados] = useState<Product[]>([]);
  
  useEffect(()=>{
    fetch('http://petstore-demo-endpoint.execute-api.com/petstore/pets')
    .then(response => response.json())
    .then(data => {setDados(data)});
  }, [])

  return(
    <ul>
        {dados.map(item => {
          return (
            <li key={item.id}>
              <p>Id: {item.id}</p>
              <p>Type: {item.type}</p>
              <p>Price: {item.price}</p>
            </li>
          )
        })}
      </ul>
  );
   
};

export default ExploreContainer;
