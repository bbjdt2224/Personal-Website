export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
  company?: string;
  phone?: string;
  website?: string;
  createContact: boolean;
  address?: string;
  admin?: boolean;
}
