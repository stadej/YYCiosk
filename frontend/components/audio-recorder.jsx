import React, { useState } from 'react';
import { ReactMediaRecorder } from 'react-media-recorder';
import axios from 'axios';

const AudioRecorder = () => {
  const [audioData, setAudioData] = useState('');

  const handleStop = (blobUrl, blob) => {
    // Handle the recorded audio data, e.g., set it in state
    setAudioData(blob);
  };

  const handleImageClick = async () => {
    // Send the recorded audio to the server
    const formData = new FormData();
    formData.append('audio', audioData);

    try {
      await axios.post('YOUR_SERVER_ENDPOINT', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Do something after successfully sending audio to the server
      console.log('Audio sent successfully!');
    } catch (error) {
      console.error('Error sending audio:', error);
    }
  };

  return (
    <div>
      <ReactMediaRecorder
        audio
        render={({ status, startRecording, stopRecording }) => (
          <div>
            <p>{status}</p>
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>
          </div>
        )}
        onStop={handleStop}
      />
      <button onClick={handleImageClick}>
        Trigger Server Upload (On Image Click)
      </button>
    </div>
  );
};

export default AudioRecorder;
