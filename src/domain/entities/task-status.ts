export const taskStatus = {
  PENDING: 'PENDING',
  ON_HOLD: 'ONHOLD',
  IN_PROGRESS: 'INPROGRESS',
  UNDER_REVIEW: 'UNDERREVIEW',
  COMPLETED: 'COMPLETED'
} as const

export type TaskStatus = typeof taskStatus[keyof typeof taskStatus];