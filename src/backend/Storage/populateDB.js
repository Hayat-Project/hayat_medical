import { populateFirestoreWithDoctors, populateFirestoreWithPatients } from './Storage.js';

populateFirestoreWithPatients().then(() => {
    console.log('Patients Function executed successfully.');
    process.exit(0);
}).catch(err => {
    console.error('Failed to execute function:', err);
});

populateFirestoreWithDoctors().then(() => {
    console.log('Doctors Function executed successfully.');
    process.exit(0);
}).catch(err => {
    console.error('Failed to execute function:', err);
});