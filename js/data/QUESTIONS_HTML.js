const QUESTIONS = [
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Tool Markup Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    question: "Which HTML tag is used to define the main content of a webpage?",
    answers: ["<main>", "<body>", "<section>", "<content>"],
    correctAnswer: "<body>",
  },
  {
    question: "Which HTML tag is used for the largest heading?",
    answers: ["<h1>", "<head>", "<h6>", "<h2>"],
    correctAnswer: "<h1>",
  },
  {
    question: "How do you create a hyperlink in HTML?",
    answers: [
      "<a href='url'>Link text</a>",
      "<link href='url'>Link text</link>",
      "<url>Link text</url>",
      "<href='url'>Link text</href>",
    ],
    correctAnswer: "<a href='url'>Link text</a>",
  },
  {
    question:
      "Which HTML element is used to specify a footer for a document or section?",
    answers: ["<footer>", "<section>", "<bottom>", "<end>"],
    correctAnswer: "<footer>",
  },
  {
    question: "Which tag is used to create a line break in HTML?",
    answers: ["<br>", "<lb>", "<break>", "<line>"],
    correctAnswer: "<br>",
  },
  {
    question: "How do you create an ordered list in HTML?",
    answers: ["<ol>", "<ul>", "<list>", "<order>"],
    correctAnswer: "<ol>",
  },
  {
    question: "Which tag is used to define an image in HTML?",
    answers: ["<img>", "<image>", "<picture>", "<photo>"],
    correctAnswer: "<img>",
  },
  {
    question: "How do you create a table in HTML?",
    answers: ["<table>", "<tab>", "<tr>", "<td>"],
    correctAnswer: "<table>",
  },
  {
    question:
      "Which attribute is used to provide a unique identifier to an HTML element?",
    answers: ["id", "class", "name", "key"],
    correctAnswer: "id",
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    answers: ["<style>", "<css>", "<script>", "<link>"],
    correctAnswer: "<style>",
  },
  {
    question:
      "What is the correct HTML element for inserting a line across the page?",
    answers: ["<hr>", "<line>", "<break>", "<tr>"],
    correctAnswer: "<hr>",
  },
  {
    question: "Which attribute is used to open a link in a new tab or window?",
    answers: ["target='_blank'", "new='_tab'", "window='_new'", "rel='_new'"],
    correctAnswer: "target='_blank'",
  },
  {
    question: "Which tag is used to define a list item in an unordered list?",
    answers: ["<li>", "<ul>", "<ol>", "<item>"],
    correctAnswer: "<li>",
  },
  {
    question: "What is the correct HTML element for the title of a document?",
    answers: ["<title>", "<head>", "<meta>", "<header>"],
    correctAnswer: "<title>",
  },
  {
    question: "How do you create a text input field in HTML?",
    answers: [
      "<input type='text'>",
      "<input text>",
      "<textbox>",
      "<textfield>",
    ],
    correctAnswer: "<input type='text'>",
  },
  {
    question: "Which HTML tag is used to define a paragraph?",
    answers: ["<p>", "<para>", "<text>", "<pg>"],
    correctAnswer: "<p>",
  },
  {
    question:
      "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    answers: ["alt", "title", "src", "description"],
    correctAnswer: "alt",
  },
  {
    question: "How do you add a comment in HTML?",
    answers: [
      "<!-- This is a comment -->",
      "// This is a comment",
      "/* This is a comment */",
      "<comment>This is a comment</comment>",
    ],
    correctAnswer: "<!-- This is a comment -->",
  },
  {
    question:
      "Which HTML tag is used to define a block of content that can be formatted with CSS?",
    answers: ["<div>", "<span>", "<section>", "<format>"],
    correctAnswer: "<div>",
  },
  {
    question: "Which HTML tag is used to define a hyperlink?",
    answers: ["<a>", "<link>", "<href>", "<url>"],
    correctAnswer: "<a>",
  },
  {
    question: "What is the purpose of the <head> element in HTML?",
    answers: [
      "To contain metadata and links to external resources",
      "To define the main content of the page",
      "To display the title of the page",
      "To include JavaScript functions",
    ],
    correctAnswer: "To contain metadata and links to external resources",
  },
  {
    question: "Which HTML element is used to play video files?",
    answers: ["<video>", "<movie>", "<media>", "<play>"],
    correctAnswer: "<video>",
  },
  {
    question: "Which attribute is used to define inline styles?",
    answers: ["style", "css", "class", "id"],
    correctAnswer: "style",
  },
  {
    question: "Which HTML element is used to embed audio files?",
    answers: ["<audio>", "<sound>", "<music>", "<play>"],
    correctAnswer: "<audio>",
  },
  {
    question: "How do you create a drop-down list in HTML?",
    answers: ["<select>", "<dropdown>", "<list>", "<input type='dropdown'>"],
    correctAnswer: "<select>",
  },
  {
    question: "What is the purpose of the <meta> tag in HTML?",
    answers: [
      "To provide metadata about the HTML document",
      "To define the main content of the page",
      "To include CSS styles",
      "To link to external JavaScript files",
    ],
    correctAnswer: "To provide metadata about the HTML document",
  },
  {
    question: "Which tag is used to define a table cell in HTML?",
    answers: ["<td>", "<tr>", "<th>", "<cell>"],
    correctAnswer: "<td>",
  },
  {
    question:
      "How do you specify that an input field must be filled out in an HTML form?",
    answers: ["required", "validate", "mustfill", "mandatory"],
    correctAnswer: "required",
  },
  {
    question: "Which HTML tag is used to create a form?",
    answers: ["<form>", "<input>", "<button>", "<submit>"],
    correctAnswer: "<form>",
  },
];

export default QUESTIONS;
