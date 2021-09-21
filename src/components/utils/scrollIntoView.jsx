export const scrollIntoView = (id, block = 'center') => {
  const element = document.getElementById(id)

  if (typeof element?.scrollIntoView === 'function') {
    element.scrollIntoView({ behavior: 'smooth', block })
  }
}
