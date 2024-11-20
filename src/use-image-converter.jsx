import { useState } from 'react'

export function useImageConverter(initialFormat = 'png') {
  const [images, setImages] = useState([]);
  const [format, setFormat] = useState(initialFormat);

  const convertImage = async (file, format) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error('Image conversion failed'));
            }
          },
          `image/${format}`,
          1
        );
      };
      img.onerror = reject;
    });
  }

  const handleFileSelection = (e) => {
    const files = Array.from(e.target.files);
    const imageFiles = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
      name: file.name,
    }));
    setImages(imageFiles);
  };

  const generateFileName = (originalName, format) => {
    const nameWithoutExtension =
      originalName.substring(0, originalName.lastIndexOf('.')) || originalName;
    return `${nameWithoutExtension}-converted.${format}`;
  };

  const handleDownload = async (file, name) => {
    try {
      const blob = await convertImage(file, format);
      const fileName = generateFileName(name, format);
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      link.click();

      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error(`Failed to convert or download image ${name}:`, error);
    }
  };

  return {
    images,
    format,
    setFormat,
    handleFileSelection,
    handleDownload,
  };
}
