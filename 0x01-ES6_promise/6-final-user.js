import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUp = signUpUser(fileName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([signUp, photo]).then((vals) => {
    const resultArr = [];
    vals.forEach((val) => {
      if (val.status === 'fulfilled') {
        resultArr.push({
          status: val.status,
          value: val.value,
        });
      } else {
        resultArr.push({
          status: val.status,
          value: `Error: ${val.reason.message}`,
        });
      }
    });
    return resultArr;
  });
}
