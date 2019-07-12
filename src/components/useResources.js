import { useState, useEffect } from "react";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com";

export default function useResources(resource) {
  const [resources, setResources] = useState([]);

  useEffect( 
    () => {
      (async (resource) => {
        try {
          const response = await axios.get(`${url}/${resource}`);
          console.log('response', response);
          setResources(response.data);
        }
        catch(err) {
          console.log('err', err);
        }
      })(resource);
      return function cleanup() {
        console.log("cleanup?")
      }
    }, 
    [resource]
  )

  return resources;
}