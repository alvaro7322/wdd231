export async function getMembersData() {
  try {
    const response = await fetch('data/members.json');
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error(error);
  }
  return [];
}