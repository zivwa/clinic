# Suhrudaya Heart Clinic demo

React + TypeScript frontend. The working project is D:\clinic.

Run `npm install`, then `npm run dev`. Build with `npm run build`.
Run `npm run test:e2e` for the Playwright integration suite (installed Google Chrome required).

## Separate page endpoints

- `/clinic` - clinic home, with rounded doctor portrait and children's care information.
- `/clinic/about`, `/clinic/services`, `/clinic/contact` - doctor profile, disease/treatment information and clinic details.
- `/clinic/book` - booking entry; sign in to keep files and details with the patient profile.
- `/patient/sign-in`, `/patient/sign-up` - browser-local demo account access.
- `/patient` - patient overview.
- `/patient/appointments`, `/patient/reports`, `/patient/health`, `/patient/profile`, `/patient/prescriptions`, `/patient/payments`, `/patient/book` - separate patient pages.
- `/doctor` - clinic workspace; `/doctor/appointments`, `/doctor/patients/:patientId`, `/doctor/consultations` and `/doctor/billing` include the updated workflows.
- `/` redirects to `/clinic`; earlier `/about`, `/services`, `/contact`, `/book` links still redirect correctly. `/patients` aliases `/patient`.

## Demo access and data

There is one patient profile in the patient portal. Choose **Open sample patient** to explore without credentials, or sign up with fictional details. Only one demo account is created per browser. Sign in uses that account. Passwords are stored as salted PBKDF2 hashes, with the session in sessionStorage. This is a frontend demonstration, not production authentication or access control. The doctor workspace is also a demo and has no sign-in barrier. Do not enter real patient information.

Record metadata is saved in localStorage and files in IndexedDB on the same browser and origin. Different ports are different origins. There is no backend, cross-device sync, real booking, payment processing or notification service. Clear site storage to reset the demonstration.

## Workflows

- Requests start Pending (shown to patients as Waiting for approval). Doctors approve or decline. Failed and cancelled requests offer another booking. Storage failures show an error without claiming a successful appointment.
- Appointment rows in the doctor workspace have a Patient details link opening the patient's dedicated page.
- Reports include condition, file type, report date, description and an optional appointment link. Upload up to 5 PDF/JPG/PNG/WebP files, each up to 10 MB. X-rays can be attached from external providers; availability of uploaded file types does not imply those scans are offered in the clinic.
- Health check-ins are dated and organized into weekly or monthly periods. These are manual updates, not automatic reminders or medical monitoring.
- Profile details start read-only. Edit profile, Save changes and Cancel changes operate on the same page. Names update across linked patient records using the stable patient ID.
- Patient prescriptions are linked to appointments. A doctor shares or updates them from a completed appointment's details. Earlier unlinked prescriptions are kept separately. There is no standalone Prescriptions or Medical records page in the doctor navigation; files remain available in patient and visit details.
- Consultations and billing show record dates and include date filters.
- The WhatsApp form prepares a message to +91 78299 93111. The user sends it in WhatsApp; it does not automatically send or create a booking. Files must be attached in WhatsApp separately.

Clinic identity and credentials come from the supplied profile. General disease information links to NHS references. A native Android application is not included.
