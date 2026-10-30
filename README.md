# Suhrudaya Heart Clinic demo

React + TypeScript frontend with public clinic pages, patient portal, and doctor workspace.

Run `npm install` and `npm run dev`. Build with `npm run build`.

- `/` — clinic website
- `/book` — appointment booking
- `/patient` — patient demo portal
- `/doctor` — doctor dashboard and management modules

All patient data is fictional. Data persists in this browser's localStorage. There is no backend, authentication, actual payment processing, messaging, or real appointment integration. Clear site storage to reset sample records. Do not enter real patient information.

The responsive website is the first phase; a native Android application is not included.

Patient care workflows:
- Switch between portals with the two-option portal control.
- Patient profiles allow contact, demographic, allergy and history changes.
- Booking requests include a condition, symptoms and history and start Pending. Doctors approve/decline requests and share suggestions from the appointment details.
- Reports can be uploaded during booking or from the patient Reports & files tab and linked to a condition and appointment. File contents use IndexedDB (up to 5 PDF/JPG/PNG/WebP files per upload, 10 MB each); record metadata and health updates use localStorage. Both portals must use the same browser and origin. This is not secure cross-device medical storage.
- Existing appointment and report patient associations are locked when editing to preserve their linked records.
- The floating WhatsApp control opens an enquiry form and prepares a message to +91 78299 93111. The user sends it in WhatsApp. It does not send automatically or create a booking, and files must be attached in WhatsApp separately.
