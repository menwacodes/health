# Structure & Routes
- The health app is a full-stack NextJS app with a MongoDB backend
- The app will be deployed on Vercel's site as hobby, pricing for Pro is $20/mth
- Authorization needs to be added prior to recording 

## Structure
Top Level
- BP Monitoring
- Meds
- Appointment Notes
  - Purpose, date, note, follow up, outcome, etc
- Workouts

## Base Routes

| Route         | Purpose                                 | Type   |
|---------------|-----------------------------------------|--------|
| /             | Top Level Welcome Page                  | ?      |
| /bp           | Blood Pressure Entry Form and History   | ISR?   |
| /meds         | Medications, dosage, start dates, notes | Static |
| /appointments | Notes                                   | Static |
| /workouts     | Entry to Workout Landing Page           | Static |


## Workouts
### Routes

| Route    | Purpose                                                                                 | Type   |
|----------|-----------------------------------------------------------------------------------------|--------|
| /        | Launch page to Cardio & Index                                                           | Static |
| /cardio  | - Form to enter cardio<br>- Cardio History<br/>- HRZ Calc                               | ISR?   |
| /weights | - Base weights with pyramid buttons<br/>- Build workout from base<br/>- Workout history | ISR    |

### APIs?

| Route           | Purpose              |
|-----------------|----------------------|
| /weights        | Get All Index        |
| /weights/<slug> | Get/Post a body part |
| /cardio         | Get All Cardio       |



