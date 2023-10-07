export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  status?: 'Happy' | 'Sad' | 'Sleepy';
  phoneNumbers: string[];
}
