import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
    try {
      // Call the uploadPhoto function
      const photo = await uploadPhoto();
  
      // Call the createUser function
      const user = await createUser();
  
      // Return the object with the responses
      return {
        photo,
        user,
      };
    } catch (error) {
      // If any of the async functions fail, return an empty object
      return {
        photo: null,
        user: null,
      };
    }
  }
  