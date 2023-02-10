# Blood Pressure & Data Structure
- For testing, use /lib/db-local for connection

## Display
1. getServerSideProps to send array of data to component - props
   1. Similar to cardio, API used in GSSP
   2. API should use /lib/db-local
2. Load props into state
3. Feed state to repeating child component

## Input
1. Gather input
2. Connect to DB
3. Create Record
4. Update State (for display)

## Structure

```json
[
  {
    "date": "YYYY-MM-DDT00:00:00Z",
    "timeOfDay": "Morning/Aft",
    "notes": "String of notes",
    "readings": [
      {"readingNum":  1, "systolic":  120, "diastolic":  80, "pulse":  70}
    ]
  }
]
```