# Vocal Remover Application

This project is a web application that allows users to upload audio files and process them to remove vocals using machine learning models.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   cd vocal-remover
   ```

2. **Install dependencies:**
   Ensure you have Python, Node.js, and npm installed on your machine.
   ```bash
   # Install Python dependencies
   pip install -r requirements.txt



3. **Start the Flask server:**
   ```bash
   python inference-server.py
   ```

4. **Start the React client:**
   ```bash
   # In a new terminal tab/window
   cd client
   npm start
   ```

5. **Access the application:**
   Open your web browser and go to [http://localhost:3000](http://localhost:3000) to use the application.

## Usage

1. **Upload Audio File:**
   - Click on the "Choose File" button to select an audio file from your computer.

2. **Process Audio:**
   - After selecting the file, click on the "Upload and Process" button to initiate the vocal removal process.

3. **View Results:**
   - Once the processing is complete, the results will be displayed & downloadable.

## Dependencies

- **Python:**
    IMPORTANT
  - Flask
  - librosa
  - numpy
  - torch

- **Node.js:**
  - axios
  - react
  - react-dom

## License

This project is licensed under the [MIT License](LICENSE).

---
