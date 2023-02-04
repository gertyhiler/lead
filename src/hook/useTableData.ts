import axios from "axios";
import { useEffect, useState } from "react";
import { PATH, ID_APP, API_URL} from '../setting/request'

type DataRow = [
  string, number
]



export interface IData  {
  result: Array<DataRow>
}

export function useTableData() {
  const [data, setData] = useState<IData>();

  useEffect(() => {
    // 'https://script.google.com/macros/s/AKfycbwleC3_KeARxhP3ucYHy6U_c0KmQRqk-eLrog4SoOnYoLlxztbUzRxPFbZtQj_EMhxM2Q/exec'
    axios.get(
      `${API_URL}${ID_APP}${PATH}`
    ).then(({ data }) => {
      console.log(data)
      setData(data);
    }).catch(console.log);
  }, []);

  return data;
}