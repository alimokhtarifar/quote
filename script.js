document.addEventListener('DOMContentLoaded', () => {
  fetchRandomQuote();
  const changeQuoteBtn = document.getElementById('change-quote-btn');
  changeQuoteBtn.addEventListener('click', fetchRandomQuote);
});

async function fetchRandomQuote() {
  try {
      const apiUrl = 'https://api.quotable.io/random';
      
      const response = await fetch(apiUrl);
      const data = await response.json();

      displayQuote(data);
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

function displayQuote(quote) {
  const quoteContainer = document.getElementById('quote-container');
  const quoteText = document.getElementById('quote-text');
  const quoteAuthor = document.getElementById('quote-author');

  if (quote && quote.content && quote.author) {
      quoteText.textContent = `"${quote.content}"`;
      quoteAuthor.textContent = `- ${quote.author}`;
  } else {
      quoteText.textContent = 'No quote available';
      quoteAuthor.textContent = '';
  }
}
