export default function getListStudentIds(arrayOfObjects) {
  if (!Array.isArray(arrayOfObjects)) return [];
  const arrayOfIds = arrayOfObjects.map((obj) => obj.id);

  return arrayOfIds;
}
