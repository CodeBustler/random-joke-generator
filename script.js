function generate() {
  const jokes = [
    'Why was the math book sad? Because it had too many problems.',
    "Why don't skeletons fight each other? They don't have the guts.",
    'Why did the cookie go to the doctor? It was feeling crummy.',
    'Why did the teddy bear say no to dessert? Because it was stuffed',
    'What do you call a belt made of watches? A waist of time',
    'Why do programmers prefer dark mode? Because light attracts bugs.',
    "Why did the JavaScript developer wear glasses? He didn't want to C#.",
    "Why was the JavaScript developer sad? He didn't know how to null his feelings.",
  ];

  let jokeDisplay = document.getElementById('joke');
  let randomJokes = Math.floor(Math.random() * 8);

  jokeDisplay.innerHTML = ` "${jokes[randomJokes]}"`;
}
