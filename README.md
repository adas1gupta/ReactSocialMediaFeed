# React Social Media Feed with Infinite Scrolling

This project is a **React-based social media feed** that showcases posts fetched from an API. The application features **infinite scrolling**, allowing users to load more posts dynamically as they scroll down. Additionally, users can interact with posts by liking and commenting on them.

---

## Features

### 1. **Infinite Scrolling**
- Posts are fetched incrementally as the user scrolls to the bottom of the page.
- Utilizes the `IntersectionObserver` API for efficient performance.

### 2. **Like and Comment Functionality**
- Users can like a post, incrementing its like count in real time.
- Users can add comments to posts, with immediate updates to the UI.

### 3. **Dynamic State Management**
- The application uses a custom React Hook (`usePosts`) to manage fetching and appending posts.
- Local state is updated dynamically for likes and comments.

---

## Project Structure

```
.
├── src
│   ├── components
│   │   ├── App.jsx           # Main application component
│   │   ├── Post.jsx          # Component for rendering individual posts
│   │   └── hooks
│   │       └── usePosts.js   # Custom hook for managing posts and pagination
│   ├── index.js              # Entry point
│   └── styles
│       └── styles.css        # Application styling (optional)
└── public
    └── index.html            # HTML template
```

---

## Installation

### Prerequisites
- Node.js (v14 or higher recommended)
- npm or yarn package manager

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd react-social-media-feed
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

---

## Usage

### Infinite Scrolling
- Scroll down the page to load more posts automatically.

### Interacting with Posts
- Click the "Like" button on a post to increment its like count.
- Add comments to a post via the input field provided.

---

## Key Components

### `App.jsx`
- Main container for the feed.
- Manages state for pagination and integrates the `usePosts` custom hook.
- Implements `IntersectionObserver` to detect when to load more posts.

### `Post.jsx`
- Renders individual posts.
- Handles user interactions for likes and comments.

### `usePosts.js`
- Custom hook for fetching and managing posts.
- Tracks pagination and appends new posts to the feed dynamically.

---

## API Used
- **JSONPlaceholder**: A free online REST API for testing and prototyping.
  - Endpoint: `https://jsonplaceholder.typicode.com/posts`
  - Pagination: Uses `?_page=<page>&_limit=10` to fetch posts in batches.

---

## License
This project is open-source and available under the [MIT License](LICENSE).

