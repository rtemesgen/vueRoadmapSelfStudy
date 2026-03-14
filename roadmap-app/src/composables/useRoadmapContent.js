import { computed, ref } from 'vue'
import { bundledRoadmapContent } from '../data/roadmap'

const REMOTE_CONTENT_URL =
  'https://raw.githubusercontent.com/rtemesgen/vueRoadmapSelfStudy/main/roadmap-content.json'

function cloneBundledContent() {
  return JSON.parse(JSON.stringify(bundledRoadmapContent))
}

const content = ref(cloneBundledContent())
const source = ref('bundled')
const isRefreshing = ref(false)
const lastCheckedAt = ref('')
const lastUpdatedAt = ref('')
const refreshError = ref('')
let hasLoadedRemoteOnce = false

function normalizeContent(payload) {
  if (!payload || !Array.isArray(payload.roadmapDays) || payload.roadmapDays.length === 0) {
    throw new Error('Remote content is missing roadmap days.')
  }

  return {
    sprintSummary: payload.sprintSummary || bundledRoadmapContent.sprintSummary,
    roadmapDays: payload.roadmapDays,
    dailyChecklist: payload.dailyChecklist || bundledRoadmapContent.dailyChecklist,
    checkpointGoals: payload.checkpointGoals || bundledRoadmapContent.checkpointGoals,
    projectBrief: payload.projectBrief || bundledRoadmapContent.projectBrief,
    trackerPrompts: payload.trackerPrompts || bundledRoadmapContent.trackerPrompts
  }
}

async function refreshContent(options = {}) {
  const { force = false } = options

  if (isRefreshing.value || (hasLoadedRemoteOnce && !force)) {
    return
  }

  isRefreshing.value = true
  lastCheckedAt.value = new Date().toISOString()
  refreshError.value = ''

  try {
    const response = await fetch(REMOTE_CONTENT_URL, {
      cache: 'no-store'
    })

    if (!response.ok) {
      throw new Error(`Remote content request failed with ${response.status}.`)
    }

    const payload = await response.json()
    content.value = normalizeContent(payload)
    source.value = 'remote'
    lastUpdatedAt.value = payload.lastUpdatedAt || new Date().toISOString()
    hasLoadedRemoteOnce = true
  } catch (error) {
    content.value = cloneBundledContent()
    source.value = 'bundled'
    refreshError.value = error instanceof Error ? error.message : 'Unable to fetch remote content.'
  } finally {
    isRefreshing.value = false
  }
}

export function useRoadmapContent() {
  return {
    content,
    source: computed(() => source.value),
    isRefreshing: computed(() => isRefreshing.value),
    lastCheckedAt: computed(() => lastCheckedAt.value),
    lastUpdatedAt: computed(() => lastUpdatedAt.value),
    refreshError: computed(() => refreshError.value),
    refreshContent
  }
}
