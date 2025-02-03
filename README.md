# Stryker AI Training Module

This project is a fully interactive HR training module on AI in the workplace, inspired by Stryker’s branding and design. It is built using React, Material UI, and React DnD. The application is divided into multiple modules with interactive components such as multiple‑choice questions, flip cards, drag‑and‑drop matching and ordering exercises, and dynamic tool comparison sections.

## Features

- **Module 1 – Introduction to AI:**  
  - Embedded YouTube video on "What is AI?"
  - Interactive quiz with pop effects for correct/incorrect answers.
  - Flip cards explaining the AI workflow.
  - Drag-and-drop matching exercise for key AI terms and definitions.
  - Accordion component with detailed explanations.

- **Module 2 – Chatbots and Assistants:**  
  - Visual demonstration of AI capabilities via flip cards.
  - Interactive multi‑select question for selecting the best creative writing tools.
  - Expanded tool comparison section with tabs and interactive details.
  - Drag-and-drop ordering exercise to arrange the AI workflow correctly (with visual feedback).
  - A responsive progress bar that tracks progression throughout the module.

## Project Structure

```
ai-training-module/
├── node_modules/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── (other public assets)
├── src/
│   ├── assets/
│   │   └── Stryker_logo.png
│   ├── components/
│   │   ├── DragAndDropOrder.js
│   │   ├── FlipCard.js
│   │   ├── ProgressBar.js
│   │   ├── ToolComparisonDetails.js
│   │   ├── ToolSelectionMultiQuestion.js
│   │   ├── Module1.js
│   │   ├── Module2.js
│   │   ├── ToolSelectionQuestion.js (deprecated, replaced by multi-select)
│   │   └── (other components)
│   ├── contexts/
│   │   └── ProgressContext.js
│   ├── index.css
│   ├── App.js
│   ├── index.js
│   ├── reportWebVitals.js
│   └── theme.js
├── .eslintrc.json
├── package.json
└── README.md
```

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/groupproject/ai-training-module.git #update later - Khaled
   cd ai-training-module
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm start
   ```

   The application should be available at [http://localhost:3000](http://localhost:3000).

## Usage

- **Navigation:**  
  Use the header navigation to switch between modules.  
- **Module Interactivity:**  
  - In Module 1, interact with the quiz, flip cards, and drag-and-drop matching exercise.  
  - In Module 2, explore the interactive multi‑select question, compare AI tools using tabs (with expandable details), and complete the ordering exercise.
- **Progress Tracking:**  
  The progress bar at the top of each module dynamically updates as you complete interactive activities (e.g., multi-select questions, drag-and-drop exercises).

## Customization

- **Styling & Theme:**  
  The global styles are defined in `src/index.css` and the Material UI theme is configured in `src/theme.js`. Adjust colors, typography, and animations as needed.
- **Interactive Components:**  
  Components such as `ToolSelectionMultiQuestion`, `DragAndDropOrder`, and `ToolComparisonDetails` are designed to be modular and easily extendable.

## Contributing

Feel free to submit pull requests for improvements or bug fixes. Please adhere to the project’s coding standards and update the documentation accordingly.

## License

[MIT License](LICENSE)

```

---

This updated README provides an overview of the project, details on its features and structure, installation and usage instructions, and guidance on customization. Adjust the content as needed to reflect any additional details specific to your organization’s standards or deployment requirements.