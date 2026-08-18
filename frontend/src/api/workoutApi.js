export async function registerWorkout({ exerciseName, weight, reps, sets }) {
  const response = await fetch('/api/workouts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ exerciseName, weight, reps, sets }),
  })

  if (!response.ok) {
    throw new Error(`운동 기록 등록에 실패했습니다. (status: ${response.status})`)
  }

  return response.json()
}

export async function fetchWorkouts() {
  const response = await fetch('/api/workouts')

  if (!response.ok) {
    throw new Error(`운동 기록 목록 조회에 실패했습니다. (status: ${response.status})`)
  }

  return response.json()
}
