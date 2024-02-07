# # Import necessary libraries
# from flask import Flask, request, jsonify
# import numpy as np
# import io
# import librosa
# from lib import dataset
# from lib import nets  # Assuming you have the necessary modules in the lib directory
# from lib import spec_utils

# app = Flask(__name__)

# # Load the pre-trained model
# # Adjust the parameters based on your model architecture
# model = nets.CascadedNet(n_fft=2048, hop_length=1024, nout=32, nout_lstm=128, is_complex=False)

# # Define a route for receiving audio data
# @app.route('/audio', methods=['POST'])
# def process_audio():
#     try:
#         # Receive audio data from the request
#         audio_data = request.files['audio'].read()
        
#         # Convert audio data to numpy array (you may need to adjust based on your data format)
#         y, sr = librosa.load(io.BytesIO(audio_data), sr=44100, mono=True, dtype=np.float32)
        
#         # Process the audio data (perform source separation)
#         # ... (use your existing source separation logic)

#         # Return the separated audio as JSON or any desired format
#         return jsonify({'result': 'success', 'separated_audio': separated_audio.tolist()})
#     except Exception as e:
#         return jsonify({'result': 'error', 'error_message': str(e)})

# if __name__ == '__main__':
#     app.run(port=5000)  # Adjust the port as needed




from flask import Flask, request, jsonify
import numpy as np
import io
import librosa
from lib import nets  # Assuming you have the necessary modules in the lib directory

app = Flask(__name__)

# Load the pre-trained model
# Adjust the parameters based on your model architecture
model = nets.CascadedNet(n_fft=2048, hop_length=1024, nout=32, nout_lstm=128, is_complex=False)

# Add a route for the root URL
@app.route('/')
def hello():
    return 'Hello, this is the root URL!'

@app.route('/audio', methods=['POST'])
def process_audio():
    try:
        audio_data = request.json['audio']
        audio_bytes = io.BytesIO(base64.b64decode(audio_data))
        
        y, sr = librosa.load(audio_bytes, sr=44100, mono=True, dtype=np.float32)

        # Process the audio data using the loaded model
        # ...

        # Return the processed data as needed
        return jsonify({'result': 'success', 'processed_data': processed_data.tolist()})
    except Exception as e:
        return jsonify({'result': 'error', 'error_message': str(e)})

if __name__ == '__main__':
    app.run(port=5000)
