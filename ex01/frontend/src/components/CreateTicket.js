import React, { useState, useRef } from "react";
import styles from "./CreateTicket.module.css";
import CameraComponent from "./CameraComponent";

const CreateTicket = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const fileInputRef = useRef(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const ticketData = {
      title,
      description,
      image,
    };

    try {
      const response = await fetch("http://localhost:5000/tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: title, description: description, image: image }),
      });
      const result = await response.json();
      console.log("Successfuly uploaded photo", result);
    } catch (error) {
      console.error("Error trying to upload photo", error);
    }

    console.log("Ticket Submitted:", ticketData);
    setTitle("");
    setDescription("");
    setImage(null);
    setIsOpen(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  return (
    <div className={styles.createTicketContainer}>
      <button onClick={handleToggle} className={styles.menuButton}>
        Create a New Ticket
      </button>
      {isOpen && (
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
              type="text"
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
              ref={fileInputRef}
            />
          </div>
          {image && (
            <div className={styles.imagePreview}>
              <h4>Image Preview</h4>
              <img src={image} alt="Preview" className={styles.previewImage} />
            </div>
          )}
          <CameraComponent />
          <button type="submit" className={styles.submitButton}>
            Submit Ticket
          </button>
        </form>
      )}
    </div>
  );
};

export default CreateTicket;
