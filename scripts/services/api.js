export async function fetchJSON(path) {
  try {
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error(`Erro ao carregar ${path}: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Erro na requisição para ${path}:`, error);
    return [];
  }
}
