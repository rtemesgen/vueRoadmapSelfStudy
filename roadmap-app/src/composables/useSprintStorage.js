import { computed, ref, watch } from 'vue'
import { roadmapDays } from '../data/roadmap'

const STORAGE_KEY = 'vue-roadmap-sprint-progress'

function createDefaultProgress() {
  return {
    sprintStartDate: '',
    dailyRoutine: {},
    checkpointGoals: {},
    dayCompletion: Object.fromEntries(roadmapDays.map((day) => [day.day, false])),
    confidenceByDay: Object.fromEntries(roadmapDays.map((day) => [day.day, 0])),
    notesByDay: Object.fromEntries(roadmapDays.map((day) => [day.day, '']))
  }
}

function loadProgress() {
  if (typeof window === 'undefined') {
    return createDefaultProgress()
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      return createDefaultProgress()
    }

    const parsed = JSON.parse(stored)
    return {
      ...createDefaultProgress(),
      ...parsed,
      sprintStartDate: parsed.sprintStartDate || '',
      dayCompletion: {
        ...createDefaultProgress().dayCompletion,
        ...(parsed.dayCompletion || {})
      },
      confidenceByDay: {
        ...createDefaultProgress().confidenceByDay,
        ...(parsed.confidenceByDay || {})
      },
      notesByDay: {
        ...createDefaultProgress().notesByDay,
        ...(parsed.notesByDay || {})
      }
    }
  } catch {
    return createDefaultProgress()
  }
}

const progress = ref(loadProgress())

watch(
  progress,
  (value) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
    }
  },
  { deep: true }
)

export function useSprintStorage() {
  const hasStartedSprint = computed(() => Boolean(progress.value.sprintStartDate))

  const completedDaysCount = computed(
    () => Object.values(progress.value.dayCompletion).filter(Boolean).length
  )

  const nextOpenDay = computed(() => {
    const nextDay = Object.entries(progress.value.dayCompletion).find(([, done]) => !done)
    return nextDay ? Number(nextDay[0]) : roadmapDays.length
  })

  function toggleRoutineItem(key, checked) {
    progress.value.dailyRoutine[key] = checked
  }

  function toggleCheckpointItem(key, checked) {
    progress.value.checkpointGoals[key] = checked
  }

  function toggleDayCompletion(day, checked) {
    progress.value.dayCompletion[day] = checked
  }

  function setConfidence(day, value) {
    progress.value.confidenceByDay[day] = Number(value)
  }

  function setNote(day, value) {
    progress.value.notesByDay[day] = value
  }

  function startSprint(date = new Date()) {
    const year = date.getFullYear()
    const month = `${date.getMonth() + 1}`.padStart(2, '0')
    const day = `${date.getDate()}`.padStart(2, '0')
    progress.value.sprintStartDate = `${year}-${month}-${day}`
  }

  function resetProgress() {
    progress.value = createDefaultProgress()
  }

  return {
    progress,
    hasStartedSprint,
    completedDaysCount,
    nextOpenDay,
    toggleRoutineItem,
    toggleCheckpointItem,
    toggleDayCompletion,
    setConfidence,
    setNote,
    startSprint,
    resetProgress
  }
}
