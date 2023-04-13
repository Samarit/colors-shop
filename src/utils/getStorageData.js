export default function getStorageData() {

  const storage = localStorage.getItem('basket')

  if (storage) return JSON.parse(storage)

  return []

}