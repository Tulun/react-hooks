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
    }, 
    [resource]
  )


  return (
    <div>{resources.length}</div>
  )
}

export default ResourceList;
