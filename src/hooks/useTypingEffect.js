import { useEffect, useState } from 'react';

export const useTypingEffect = (words, typingSpeed = 70, deletingSpeed = 45, delay = 1400) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    const nextText = isDeleting
      ? currentWord.slice(0, text.length - 1)
      : currentWord.slice(0, text.length + 1);

    const timeout = setTimeout(
      () => {
        setText(nextText);

        if (!isDeleting && nextText === currentWord) {
          setTimeout(() => setIsDeleting(true), delay);
        } else if (isDeleting && nextText === '') {
          setIsDeleting(false);
          setWordIndex((prev) => prev + 1);
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delay]);

  return text;
};
