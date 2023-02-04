import React, { useEffect, useState } from "react";
import { dataContext } from "./context/formContext";
import { Footer } from "./Footer";
import { Form } from "./Form";
import { useTableData } from "./hook/useTableData";
import { Loading } from "./Loading";
import { Table } from "./Table";



 export function App() {
  const [loading, setLoading] = useState<Boolean>(false);
  
  const data = useTableData();
  
  useEffect(() => {
    if(data) setLoading(true);
    return;
  }, [data]);

  return (

    <dataContext.Provider value = { data }>
      {!loading && <Loading/>}
      {loading &&
       <Table/>
      }
       {loading && <Form/>}
       <Footer/>
    </dataContext.Provider>
     
  )
}