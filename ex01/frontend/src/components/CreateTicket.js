import React, { useState } from "react";
import styles from "./CreateTicket.module.css";

const CreateTicket = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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
  const handleSubmit = (e) => {
    e.preventDefault();
    const ticketData = {
      title,
      description,
      image,
    };
    // const info = await fetch('url api', {
    // method:"POST"
    // });
    // const data = await info.json();
    console.log("Ticket Submitted:", ticketData);
    setTitle("");
    setDescription("");
    setImage(null);
  };
  return (
    <div className={styles.createTicketContainer}>
      <h2>Create a New Ticket</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Enter the ticket title"
            className={styles.inputField}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Enter a description"
            className={styles.textareaField}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="image">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className={styles.uploadInput}
          />
        </div>
        {image && (
          <div className={styles.imagePreview}>
            <h4>Image Preview</h4>
            <img src={image} alt="Preview" className={styles.previewImage} />
          </div>
        )}
        <button type="submit" className={styles.submitButton}>
          Submit Ticket
        </button>
      </form>
    </div>
  );
};

export default CreateTicket;
