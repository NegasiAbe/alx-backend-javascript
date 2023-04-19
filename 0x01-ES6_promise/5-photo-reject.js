export default function uploadPhoto(fileName) {
    return new Promise((resolve, reject) => {
      // Simulate processing of file by waiting for 2 seconds
      setTimeout(() => {
        // Check if file name ends with ".jpg" or ".png"
        if (fileName.endsWith('.jpg') || fileName.endsWith('.png')) {
          resolve(`File ${fileName} uploaded successfully`);
        } else {
          reject(new Error(`$fileName cannot be processed`));
        }
      }, 2000);
    });
  }
  