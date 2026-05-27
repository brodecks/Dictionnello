document.getElementById('search').addEventListener('click', async () => {
  const term = document.getElementById('term').value.trim();
  
  if (!term) {
    alert('Entrez un mot !');
    return;
  }
  
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '⏳ Chargement...';
  
  try {
    const response = await fetch(
      `https://fr.wiktionary.org/api/rest_v1/page/html/${term}`
    );
    
    if (!response.ok) throw new Error('Mot non trouvé');
    
    const html = await response.text();
    
    // Parse simple : extraire le premier paragraphe
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const definition = doc.querySelector('li')?.textContent || 'Définition non trouvée';
    
    resultDiv.innerHTML = `<strong>${term}</strong><br>${definition}`;
    
  } catch (error) {
    resultDiv.innerHTML = `❌ Erreur : ${error.message}`;
  }
});