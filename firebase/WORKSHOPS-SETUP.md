# Shared workshop bookings

Production uses the existing Firebase project, `profyn-c2c0f`. A signed-in
Profyn member can reserve one seat per session. The registration and seat
counter are committed together in a Firestore transaction. Public listeners
receive only workshop summaries; attendee records are private to their owner
and project administrators.

## Before publishing this feature

1. Review the project's current Firestore rules. Merge the `workshops.rules`
   match block into its existing `/databases/{database}/documents` block;
   preserve existing rules for accounts and progress. Ensure no broader rule
   grants public writes or public reads of registration subcollections.
2. In Firestore, create one `workshops/{id}` document for each item in
   `workshops.seed.json`. Store `title` as a string, `seats` and `taken` as
   integers, and `open` as a boolean; the `id` is the document ID. The initial
   counts copy the website's existing figures. Confirm these with the actual
   registration list before opening booking. Do not overwrite an existing
   workshop counter or reset it during subsequent deployments.
3. Use two test member accounts to confirm that a registration saves under
   `workshops/{id}/registrations/{uid}` and reduces the shared remaining-seat
   count by one. A repeat booking by the same member must not consume a seat.
   Failed writes and full or closed workshops must not accept bookings.
4. Publish the website only after the user approves the local preview and
   the Firebase preparation is complete. No Firebase changes have been made
   by preparing these source files.

The local preview uses a separate server-side test store under the chat's
`work/` directory, with updates streamed to all local preview tabs. It never
writes workshop registrations to production Firebase. No email delivery
service is configured by this change; administrators can use saved attendee
details for the existing workshop communication process.

References: [Firestore transactions](https://firebase.google.com/docs/firestore/manage-data/transactions),
[atomic-write security rules](https://firebase.google.com/docs/firestore/security/rules-conditions),
and [realtime listeners](https://firebase.google.com/docs/firestore/query-data/listen).
