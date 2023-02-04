import axios from "axios";
import { useEffect } from "react";
import { API_URL, ID_APP, PATH } from "../setting/request";
import { IData } from "./useTableData";

export async function getNewTableData() {
  let data: IData = {result: []}

  await axios.get(
    `${API_URL}${ID_APP}${PATH}`
  ).then((res) => {
    console.log(res.data)
    data = res.data;
  }).catch(console.log);

  return data;
}