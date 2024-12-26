const span = document.querySelector('h4 span');
const wordsList = ['Web Developer.', 'UI/UX Designer.', 'Graphic Designer.'];

function autoType(wordsList, element, time) {
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const type = () => {
    const currentWord = wordsList[wordIndex];
    const visibleText = currentWord.substring(0, charIndex);

    element.innerText = visibleText;

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++; // Typing forward
    } else if (isDeleting && charIndex > 0) {
      charIndex--; // Deleting backward
    }

    // When the word is completely typed
    if (charIndex === currentWord.length && !isDeleting) {
      isDeleting = true;
      setTimeout(type, time * 10); // Pause before deleting
      return;
    }

    // When the word is completely deleted
    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % wordsList.length; // Move to the next word
    }

    setTimeout(type, isDeleting ? time / 2 : time);
  };

  type();
}

// Call the function with your desired time interval (e.g., 200ms)
autoType(wordsList, span, 110);
