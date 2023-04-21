import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

/*export default function handleProfileSignup(firstName, lastName, fileName) {
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);
  
  return Promise.allSettled([promise1, promise2]).then(results => {
        const result = [];
        values.forEach((element) => {
          if (element.status === 'fulfilled') {
            result.push({ status: element.status, value: element.value });
          } else {
            result.push({ status: element.status, value: `${element.reason}` });
          }
        });
        return result;
      });
    }*/

    export default function handleProfileSignup(firstName, lastName, fileName) {
        const Promise1 = signUpUser(firstName, lastName);
        const promise2 = uploadPhoto(fileName);
      
        return Promise.allSettled([Promise1, Promise2]).then((values) => {
          const result = [];
          values.forEach((element) => {
            if (element.status === 'fulfilled') {
              result.push({ status: element.status, value: element.value });
            } else {
              result.push({ status: element.status, value: `${element.reason}` });
            }
          });
          return result;
        });
      }