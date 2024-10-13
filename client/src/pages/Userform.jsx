import React, { useState } from 'react';

function Userform() {
  const [name, setName] = useState('');
  const [socialMedia, setSocialMedia] = useState('');
  const [image, setImage] = useState(null);

  const formData = new FormData();
  formData.append('name', name);
  formData.append('socialmedia', socialMedia);
  formData.append('avatar', image);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Assuming you allow one image for simplicity
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/data`,{
      method:"POST",
      body:formData
    })
    console.log(image);
    
  };


  return (
    <div className="form-container">
      <h2>User Submission Form</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="socialMedia">Social Media Handle:</label>
          <input
            type="text"
            id="socialMedia"
            value={socialMedia}
            onChange={(e) => setSocialMedia(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Upload Images:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Userform;
