import { useEffect, useState } from 'react'
import { fetchWorkouts, registerWorkout } from '../api/workoutApi'

const initialForm = {
  exerciseName: '',
  weight: '',
  reps: '',
  sets: '',
}

function WorkoutRegisterPage() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState(null) // { type: 'success' | 'error', message: string }
  const [workouts, setWorkouts] = useState([])
  const [listError, setListError] = useState(null)

  async function loadWorkouts() {
    try {
      const data = await fetchWorkouts()
      setWorkouts(data)
      setListError(null)
    } catch (error) {
      setListError(error.message)
    }
  }

  useEffect(() => {
    loadWorkouts()
  }, [])

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus(null)

    try {
      await registerWorkout({
        exerciseName: form.exerciseName,
        weight: Number(form.weight),
        reps: Number(form.reps),
        sets: Number(form.sets),
      })
      setStatus({ type: 'success', message: '운동 기록이 등록되었습니다.' })
      setForm(initialForm)
      await loadWorkouts()
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
    }
  }

  return (
    <section>
      <h1>운동 기록 등록</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="exerciseName">운동명</label>
          <input
            id="exerciseName"
            name="exerciseName"
            type="text"
            value={form.exerciseName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="weight">중량 (kg)</label>
          <input
            id="weight"
            name="weight"
            type="number"
            step="0.1"
            value={form.weight}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="reps">횟수</label>
          <input
            id="reps"
            name="reps"
            type="number"
            value={form.reps}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="sets">세트</label>
          <input
            id="sets"
            name="sets"
            type="number"
            value={form.sets}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">등록</button>
      </form>
      {status && <p role="alert">{status.message}</p>}

      <h2>운동 기록 목록</h2>
      {listError && <p role="alert">{listError}</p>}
      {workouts.length === 0 ? (
        <p>등록된 운동 기록이 없습니다.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>운동명</th>
              <th>중량 (kg)</th>
              <th>횟수</th>
              <th>세트</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout) => (
              <tr key={workout.id}>
                <td>{workout.exerciseName}</td>
                <td>{workout.weight}</td>
                <td>{workout.reps}</td>
                <td>{workout.sets}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  )
}

export default WorkoutRegisterPage
