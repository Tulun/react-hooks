import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com";

const ResourceList = ({
  resource
}) => {
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


  return (
    <ul>
      { resources.map( record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  )
}

export default ResourceList;
