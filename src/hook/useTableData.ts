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
  const [data, setData] = useState<IData | null>();

  useEffect(() => {
    axios.get(
      `${API_URL}${ID_APP}${PATH}`
    ).then(({ data }) => {
      setData(data);
    }).catch( () => 
      setData(null)
    );
  }, []);

  return data;
}