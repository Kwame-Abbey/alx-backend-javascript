import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const array = [];
  const sizes = [19, 20, 34];

  for (const size of sizes) {
    array.push(new ClassRoom(size));
  }

  return array;
}
