document.getElementById('searchBtn').addEventListener('click', async () => {
    const word = document.getElementById('wordInput').value;
    const resultDiv = document.getElementById('result');
    
    if (!word) {
      resultDiv.innerHTML = "<p>Please enter a word.</p>";
      return;
    }
  
    const apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    try {
      const response = await fetch(apiURL);
      if (!response.ok) throw new Error('Word not found');
      

  



      resultDiv.innerHTML = `
        <h3>${data[0].word}</h3>
        ${meanings}
      `;
    } catch (error) {
      resultDiv.innerHTML = `<p>${error.message}</p>`;
    }
  });
  