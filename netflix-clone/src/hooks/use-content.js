import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

/**
 * @genre - movie or series .
 */
export default function useContent(genre) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(genre)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          // each item (movie or series) has docId
          docId: contentObj.id,
        }));

        setContent(allContent);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return { [genre]: content };
}
