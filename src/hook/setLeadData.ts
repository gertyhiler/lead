import axios from "axios"
import { useUserName } from "./useUserName"
import { PATH, ID_APP, API_URL} from '../setting/request'

export interface FormLeadData {
  leadCount: number
  email: string
  formId: string
}

export type Result = {
  result: string
  status: 'OK' | null | 'Err'
}

interface Response {
  data: Result
}

export async function setLeadData(data:FormLeadData) {
  let response: Result = {result: 'Ничего не произошло', status: null};
  
  const name = await useUserName(data.email);
  if (name === null){
    console.error('Нет определения для данного мейла');
    return {result: 'Нет определения для данного мейла', status: 'Err'};
  }
  const referer = window.location.host;
  
  await axios.post(
    `${API_URL}${ID_APP}${PATH}?p1=${data.leadCount}&p2=${name}&p3=${data.email}&p4=${referer}&p5=${data.formId}`
  ).then(({data}:Response)=>{
    response = {result: data.result, status: 'OK'}
    return console.log("Отправка успешна");
  }).catch((res) => {
    console.log(res);
    response = {result: 'Ошибка сети', status: 'Err'}
  });

  
  return response;
}