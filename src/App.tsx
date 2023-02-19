import React, { useEffect, useState } from "react";
import { Button } from "./components/Button";
import { dataContext } from "./context/formContext";
import { Footer } from "./Footer";
import { Form } from "./Form";
import { useTableData } from "./hook/useTableData";
import { Loading } from "./Loading";
import { Erorr } from "./Loading/Erorr";
import { Table } from "./Table";


export function App() {
  const [loading, setLoading] = useState<Boolean>(false);
  const [isLoadingError, setIsLoadingError] = useState<Boolean>(false)
  const data = useTableData();
  
  useEffect(() => {
    if(data) setLoading(true);
    else if (data === null) {
      setLoading(false);
      setIsLoadingError(true);
    }
    return;
  }, [data]);

  return (

    <dataContext.Provider value = { data }>
      {!isLoadingError && !loading && <Loading/>}
      {!isLoadingError && loading &&(
        <>
        <Table/> 
        <Form/>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Button text='Перезагрузить' onClick={() => {
            window.history.go(0)
          }}/>
        </div>
        <Footer/>
       </>
       )
      }
      {isLoadingError && !loading && (
       <Erorr/>
      )}
       
    </dataContext.Provider>
     
  )
}