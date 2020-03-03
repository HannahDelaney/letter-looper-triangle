var newLetter = prompt('Enter a letter:');

for (i = 0; i < 10; i++) {
  for (j = 0; j < i + 1; j++) {
    document.write(newLetter);
  }
  document.write('<br>');
}
