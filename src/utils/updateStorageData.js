export default function updateStorageData(data) {
  if (!data) localStorage.removeItem('basket')

  localStorage.setItem('basket', JSON.stringify(data))
}