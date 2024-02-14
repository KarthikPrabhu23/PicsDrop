import { collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'

const useFirestore = (collectionName : string) => {

    const [docs, setDocs] = useState<Image[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true</boolean>;

    useEffect(() => {
        const getData = async () => {
            try{

            }
            catch(error){
                console.error(error);
            }
        }

    }, [collectionName])

  return {
    docs, isLoading;
  };
};

export default useFirestore;
