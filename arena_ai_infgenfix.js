/*
arena_ai_infgenfix.js
fixes frozen chat input on arena.ai
usage: paste in console or load via:
fetch('https://raw.githubusercontent.com/username/repo/main/arena_ai_infgenfix.js').then(r=>r.text()).then(eval)
*/

(function() {
  console.log('arena.ai chat fix running.');
  
  const submitBtn = document.querySelector('button[type="submit"]') || 
                    document.querySelector('button[aria-label*="Send"]') ||
                    Array.from(document.querySelectorAll('button')).find(b => 
                      b.textContent.includes('Send') || 
                      b.querySelector('svg')
                    );

  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.style.opacity = '1';
    submitBtn.style.pointerEvents = 'auto';
    submitBtn.style.cursor = 'pointer';
    console.log('chat fixed! you can now send messages. type something in the chat prompt and press the submit button.');
  } else {
    console.error('submit button not found. make sure you\'re on arena.ai chat page.');
  }
})();
