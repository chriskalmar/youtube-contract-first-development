import { User } from './user';

export const userDb: User[] = [
  {
    id: 1,
    email: 'jane@doe.com',
    firstName: 'Jane',
    lastName: 'Doe',
    status: 'Happy',
    phoneNumbers: ['123-456-7890'],
  },
  {
    id: 2,
    email: 'brian@doe.com',
    firstName: 'Brian',
    lastName: 'Home',
    status: 'Sad',
    phoneNumbers: ['234-567-8901'],
  },
  {
    id: 3,
    email: 'alex@doe.com',
    firstName: 'Alex',
    lastName: 'Smith',
    status: 'Sleepy',
    phoneNumbers: ['345-678-9012'],
  },
];
