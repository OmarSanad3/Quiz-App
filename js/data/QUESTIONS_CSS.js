const QUESTIONS = [
  {
    question: "What does CSS stand for?",
    answers: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
    ],
    correctAnswer: "Cascading Style Sheets",
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    answers: ["<style>", "<css>", "<script>", "<link>"],
    correctAnswer: "<style>",
  },
  {
    question:
      "Which property is used to change the background color of an element?",
    answers: ["background-color", "color", "bgcolor", "background"],
    correctAnswer: "background-color",
  },
  {
    question: "How do you add an external CSS file to an HTML document?",
    answers: [
      "<link rel='stylesheet' href='style.css'>",
      "<style src='style.css'>",
      "<css src='style.css'>",
      "<stylesheet src='style.css'>",
    ],
    correctAnswer: "<link rel='stylesheet' href='style.css'>",
  },
  {
    question: "Which property is used to change the text color of an element?",
    answers: ["color", "font-color", "text-color", "text-style"],
    correctAnswer: "color",
  },
  {
    question: "How do you center-align text in CSS?",
    answers: [
      "text-align: center;",
      "align-text: center;",
      "text-center: true;",
      "center-align: true;",
    ],
    correctAnswer: "text-align: center;",
  },
  {
    question: "Which property is used to change the font of an element?",
    answers: ["font-family", "font-style", "font-weight", "font"],
    correctAnswer: "font-family",
  },
  {
    question: "What does the 'z-index' property do?",
    answers: [
      "Changes the stacking order of elements",
      "Sets the zoom level of an element",
      "Adjusts the opacity of an element",
      "Specifies the number of child elements",
    ],
    correctAnswer: "Changes the stacking order of elements",
  },
  {
    question: "How do you make a list not display bullet points?",
    answers: [
      "list-style-type: none;",
      "text-decoration: none;",
      "bullet: none;",
      "display: none;",
    ],
    correctAnswer: "list-style-type: none;",
  },
  {
    question: "Which property controls the size of an element's font?",
    answers: ["font-size", "font-style", "text-size", "text-style"],
    correctAnswer: "font-size",
  },
  {
    question: "What is the default value of the position property in CSS?",
    answers: ["static", "relative", "absolute", "fixed"],
    correctAnswer: "static",
  },
  {
    question: "Which property is used to make the text bold?",
    answers: ["font-weight", "font-style", "text-bold", "text-weight"],
    correctAnswer: "font-weight",
  },
  {
    question: "How do you make the text italic in CSS?",
    answers: [
      "font-style: italic;",
      "text-style: italic;",
      "font-weight: italic;",
      "text-decoration: italic;",
    ],
    correctAnswer: "font-style: italic;",
  },
  {
    question: "Which CSS property controls the space between lines of text?",
    answers: ["line-height", "line-spacing", "text-spacing", "line-width"],
    correctAnswer: "line-height",
  },
  {
    question: "How do you select an element with id 'header' in CSS?",
    answers: ["#header", ".header", "header", "id=header"],
    correctAnswer: "#header",
  },
  {
    question:
      "Which property is used to change the border color of an element?",
    answers: ["border-color", "border-style", "border-width", "border-bg"],
    correctAnswer: "border-color",
  },
  {
    question: "How do you apply a style to all <p> elements inside a <div>?",
    answers: ["div p", "div > p", "p div", "div.p"],
    correctAnswer: "div p",
  },
  {
    question:
      "Which property is used to set the space between the element's border and its content?",
    answers: ["padding", "margin", "border-spacing", "content-spacing"],
    correctAnswer: "padding",
  },
  {
    question: "How do you make an element's background color semi-transparent?",
    answers: [
      "background-color: rgba(255, 255, 255, 0.5);",
      "background-color: #ffffff;",
      "background-color: transparent;",
      "background-color: opacity(0.5);",
    ],
    correctAnswer: "background-color: rgba(255, 255, 255, 0.5);",
  },
  {
    question: "Which CSS property is used to create space between elements?",
    answers: ["margin", "padding", "border", "spacing"],
    correctAnswer: "margin",
  },
  {
    question: "Which pseudo-class targets the first child of an element?",
    answers: [":first-child", ":first-of-type", ":only-child", ":nth-child(1)"],
    correctAnswer: ":first-child",
  },
  {
    question: "What is the 'display: flex' property used for?",
    answers: [
      "Creating a flexible layout",
      "Making text bold",
      "Aligning text",
      "Hiding an element",
    ],
    correctAnswer: "Creating a flexible layout",
  },
  {
    question:
      "How do you make an element hidden, but still take up space on the page?",
    answers: [
      "visibility: hidden;",
      "display: none;",
      "opacity: 0;",
      "display: hidden;",
    ],
    correctAnswer: "visibility: hidden;",
  },
  {
    question: "Which property is used to specify the width of an element?",
    answers: ["width", "max-width", "min-width", "size"],
    correctAnswer: "width",
  },
  {
    question:
      "How do you apply a style only to <a> elements that have been visited?",
    answers: ["a:visited", "a:link", "a:hover", "a:active"],
    correctAnswer: "a:visited",
  },
  {
    question: "Which property is used to round the corners of an element?",
    answers: [
      "border-radius",
      "border-corner",
      "corner-radius",
      "round-corner",
    ],
    correctAnswer: "border-radius",
  },
  {
    question: "What is the default display value of a <div> element?",
    answers: ["block", "inline", "inline-block", "flex"],
    correctAnswer: "block",
  },
  {
    question: "Which property is used to change the cursor's appearance?",
    answers: ["cursor", "pointer", "hover", "mouse-cursor"],
    correctAnswer: "cursor",
  },
  {
    question: "How do you make text appear with a line through it?",
    answers: [
      "text-decoration: line-through;",
      "text-decoration: underline;",
      "font-style: italic;",
      "text-style: strike;",
    ],
    correctAnswer: "text-decoration: line-through;",
  },
  {
    question: "Which CSS unit is relative to the size of the parent element?",
    answers: ["em", "px", "rem", "vh"],
    correctAnswer: "em",
  },
];

export default QUESTIONS;