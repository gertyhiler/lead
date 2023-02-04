import dataJson from '../data.json'

type IUserData = {
  [key: string]: string
}
const data:IUserData = dataJson;


export function useUserName(email: string): string | null {
  const name: string | undefined = data[email];
  if (name) return name;
  return null;
} 