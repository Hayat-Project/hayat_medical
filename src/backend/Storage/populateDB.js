import { populateFirestoreWithDoctors } from './Storage.js';

populateFirestoreWithDoctors().then(() => {
    console.log('Doctors Function executed successfully.');
    process.exit(0);
}).catch(err => {
    console.error('Failed to execute doctor function:', err);
});



