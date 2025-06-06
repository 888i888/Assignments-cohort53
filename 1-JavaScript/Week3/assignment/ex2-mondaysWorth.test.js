const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

const hourlyRate = 25;

function computeEarnings(tasks, hourlyRate) {
  // Use a single reduce to validate and sum durations
  const totalMinutes = tasks.reduce((sum, task) => {
    if (typeof task.duration === 'number' && isFinite(task.duration)) {
      return sum + task.duration;
    }
    return sum; // Skip invalid tasks
  }, 0);

  const totalHours = totalMinutes / 60;
  const totalEarnings = totalHours * hourlyRate;
  return `€${totalEarnings.toFixed(2)}`;
}


console.log(computeEarnings(mondayTasks, hourlyRate));