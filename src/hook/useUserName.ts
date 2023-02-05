import axios from 'axios';

type IUserData = {
  [key: string]: string
}

export async function useUserName(email: string) {
  let data: IUserData | null = null;
   await axios.get(
      './data.json'
    ).then((res) => {
      console.log(res);
      data = res.data
    }).catch(console.log);

  if(!data) return null;
  const name: string | undefined | null = data[email];
  console.log('name: ', name);
 
  if (name) return name;
  return null;
} 