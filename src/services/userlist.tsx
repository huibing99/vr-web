import { request } from 'umi';
// Mock
// export async function getUserList() {
//   return request('/api/userlist');
// }
export async function getUserList() {
  return request('/api/GetAllUsers');
}
