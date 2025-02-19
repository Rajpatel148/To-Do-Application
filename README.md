# To-Do Application

The To-Do Application is a modern, lightweight task manager that helps you stay organized by allowing you to easily add, view, and delete tasks. It uses your browser's local storage to save your todo list, ensuring your tasks persist between sessions. With its clean, responsive design and smooth animations, this app provides a user-friendly way to track your daily tasks.

## Features

- **Add Tasks**  
  - Enter a new task in the input field and click the "+" button or press "Enter".  
  - Duplicate tasks are prevented (case-insensitive check).

- **Display Tasks**  
  - All added tasks are displayed in a scrollable list.
  - An empty state message is shown when there are no tasks.

- **Delete Tasks**  
  - Each task is accompanied by a delete button. Click the button to remove the task from the list.
  
- **Local Storage Persistence**  
  - Tasks are saved automatically in the browser's local storage, so your list persists even if you close and reopen your browser.

- **Responsive Design and Modern UI**  
  - Clean, animated gradient background with smooth transitions.
  - Mobile-friendly layout and intuitive design.
  - Animated effects such as fade-in and side-in for a pleasant user experience.

## How It Works

1. **Loading Tasks**  
   - When the page loads, the app reads tasks from local storage (using a predefined storage key) and renders them in the list.
   - If no tasks are found, an empty state message is displayed.

2. **Adding a Task**  
   - The user types into a text input field.
   - When the "+" button is clicked or the "Enter" key is pressed, the app checks if the input is not empty and that the task does not already exist (ignoring case).
   - The task is then added to the list, saved to local storage, and the display is updated.

3. **Deleting a Task**  
   - Next to each task, a delete button (with an icon) is provided.
   - Clicking this button calls a globally exposed function that removes the task from the array, updates local storage, and re-renders the list.

4. **Dynamic UI Updates**  
   - The empty state message is shown or hidden depending on whether any tasks exist.
   - Animations (fadeIn for the container and sideIn for individual list items) enhance visual feedback.

## Technologies Used
  - HTML5: Provides the semantic structure of the application.
  - CSS3: Implements the styling, animations, and responsive design.
  - JavaScript (ES6+): Handles user interactions, task management (adding and deleting), DOM manipulation, and communication with local storage.
  - Web APIs (Local Storage API): Used to persist user data between sessions.

## Author
  - Raj Patel

## Acknowledgments
  - Thanks to the open source community for inspiration and guidance.
  - Special thanks to everyone contributing ideas and tools that empower modern web development.
