export const makeDateWithLessHours = (withoutHours: number = 2) => {
  const date = new Date()
  return new Date(date.setHours(date.getHours() - withoutHours))
}
