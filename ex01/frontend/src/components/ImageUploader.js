import React, { useState } from "react";
import styles from "./ImageUploader.module.css";

const ImageUploader = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleRemoveImage = () => {
    setImage(null);
  };
  return (
    <div className={styles.uploaderContainer}>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className={styles.uploadInput}
      />
      {image && (
        <div className={styles.previewContainer}>
          <img src={image} alt="Preview" className={styles.previewImage} />
          <br />
          <button onClick={handleRemoveImage} className={styles.removeButton}>
            Remove Image
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
