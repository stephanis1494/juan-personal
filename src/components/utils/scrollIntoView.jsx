export const scrollIntoView = id => {
  const element = document.getElementById(id)

  if (typeof element?.scrollIntoView === 'function') {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}
