import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser(userData, photoData) {
  try {
    const [photo, user] = await Promise.all([
      uploadPhoto(photoData),
      createUser(userData),
    ]);
    return { photo, user };
  } catch (error) {
    console.error(error);
    return { photo: null, user: null };
  }
}
