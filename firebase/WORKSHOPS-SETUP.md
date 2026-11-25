# Open the December and February workshops

The website lists both upcoming dates. Real reservations require their matching Firebase records. Public visitors cannot create or reset these records; the project owner must do this once.

## One-time setup in Firebase

1. Open https://console.firebase.google.com/project/profyn-c2c0f/firestore and sign in as the account that owns Profyn's Firebase project.
2. Select **Firestore Database → Data → workshops** in the `(default)` database.
3. Click **Add document** and enter the exact document ID from the table below. Add the four fields with the indicated types. Do not include an `id` field inside the document.
4. If a document already exists, preserve its live `taken` counter. Check its title, capacity and `open` status instead of recreating it.

| Document ID | title (string) | seats (number/integer) | taken (number/integer) | open (boolean) |
| --- | --- | --- | --- | --- |
| `money-moves-2026-12-28` | Money Moves for the New Year | 500 | 446 | true |
| `credit-careers-2027-02-21` | Credit, Careers & Your Next Move | 500 | 324 | true |

These starting counts were supplied by the site owner. Creating records does not create historical attendee registrations.

5. Open the existing `money-glow-up-2026-11-24` document and set `open` to **false**. Preserve existing attendee records. The website displays the owner's final 484/500 attendance figure for that completed session.
6. Reload https://profyn.org/workshops/. Both dates should be in the dropdown. A free Profyn account is required to reserve.
7. Make one authorized test booking. Confirm that a private registration appears under `workshops/{id}/registrations/{uid}` and the shared taken count increases by exactly one. Trying the same account again must not consume another seat.

## Existing security rules

The current `firebase/firestore.rules` permits public summary reads, and a signed-in member's own registration only when the same transaction increments the seat count by one. Public clients cannot create workshop summaries, change capacity or list attendees. Preserve these restrictions and the existing account/progress rules. Do not make the database publicly writable to enable these dates.

## Local preview

Local preview uses a separate server-side test store and never writes registrations to production. No workshop email service is configured by this feature.

References: [Firestore console data management](https://firebase.google.com/docs/firestore/manage-data/add-data), [transactions](https://firebase.google.com/docs/firestore/manage-data/transactions), [atomic-write security rules](https://firebase.google.com/docs/firestore/security/rules-conditions).
