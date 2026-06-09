const useStreak = (completedDates) => {
  let streak = 0
  let current = new Date()

  while (true) {
    const dateStr = current.toISOString().split('T')[0]
    if (completedDates.includes(dateStr)) {
      streak++
      current.setDate(current.getDate() - 1)
    } else {
      break
    }
  }

  return streak
}

export default useStreak