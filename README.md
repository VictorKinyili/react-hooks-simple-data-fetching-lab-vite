# Random Dog Generator

A React application that fetches and displays random dog images from the [Dog CEO API](https://dog.ceo). Users can view a new random dog image when the page loads and click a button to fetch another image at any time.

## Screenshot

![Random Dog Generator App](./screenshot.png)

## Features

- **Initial Data Fetching:** Automatically loads a random dog image when the application mounts using `useEffect`.
- **Interactive Refresh:** Allows users to fetch a new random dog image on demand via a button click.
- **Loading State:** Displays a clear `"Loading..."` message while waiting for the API response.

## Technologies Used

- React (`useState`, `useEffect`)
- JavaScript (ES6+ Fetch API)
- HTML5 / CSS3

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation & Local Setup

1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project-folder-name>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Running Tests

To run the automated test suite:

```bash
npm run test
```