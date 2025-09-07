import React, { useState } from "react";
import './ctasection.css';
export default function CTASection() {
  
  const [text, setText] = useState(
    "At Lodha, we stand for excellence, integrity, and innovation in the real estate industry."
  );
  const [isEditing, setIsEditing] = useState(false);

 
  const [buttons, setButtons] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newButton, setNewButton] = useState({
    text: "",
    url: "",
    style: "Fill",
    size: "Medium",
    color: "#007bff",
  });


  const handleSave = async () => {
    setIsEditing(false);
    try {
      const response = await fetch("http://localhost:5000/update-section", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          component: "CTASection",
          field: "paragraph",
          value: text,
        }),
      });
      const result = await response.json();
      console.log("Server Response:", result);
    } catch (error) {
      console.error("Error saving edit:", error);
    }
  };

 
  const handleAddButton = async () => {
    setButtons([...buttons, newButton]);

    try {
      const response = await fetch("http://localhost:5000/add-button", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newButton),
      });
      const result = await response.json();
      console.log("Server Response (Button):", result);
    } catch (error) {
      console.error("Error saving button:", error);
    }

 
    setNewButton({ text: "", url: "", style: "Fill", size: "Medium", color: "#007bff" });
    setShowModal(false);
  };

  return (
    <div className="edit">
      <h2>Blogs</h2>

      {isEditing ? (
        <div className="textarea-wrapper">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="edit-textarea"
          />
        </div>
      ) : (
        <p>{text}</p>
      )}

      <div className="Groupbutton">
        {isEditing ? (
          <button onClick={handleSave} className="btn btn-save">
            Save
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="btn btn-edit">
            Edit
          </button>
        )}
        <button onClick={() => setShowModal(true)} className="btn btn-add">
          +
        </button>
      </div>

     
      <div style={{ marginTop: "15px" }}>
        {buttons.map((btn, index) => (
          <a
            key={index}
            href={btn.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginRight: "10px",
              padding:
                btn.size === "Small"
                  ? "5px 10px"
                  : btn.size === "Large"
                  ? "12px 24px"
                  : "8px 16px",
              backgroundColor: btn.style === "Outline" ? "transparent" : btn.color,
              border: `2px solid ${btn.color}`,
              color: btn.style === "Outline" ? btn.color : "white",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            {btn.text}
          </a>
        ))}
      </div>

      {showModal && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              width: "300px",
            }}
          >
            <h3>Add Button</h3>

            <label>Button Text</label>
            <input
              type="text"
              value={newButton.text}
              onChange={(e) => setNewButton({ ...newButton, text: e.target.value })}
              style={{ width: "100%", marginBottom: "10px" }}
            />

            <label>Button URL</label>
            <input
              type="text"
              value={newButton.url}
              onChange={(e) => setNewButton({ ...newButton, url: e.target.value })}
              style={{ width: "100%", marginBottom: "10px" }}
            />

            <label>Button Style</label>
            <select
              value={newButton.style}
              onChange={(e) => setNewButton({ ...newButton, style: e.target.value })}
              style={{ width: "100%", marginBottom: "10px" }}
            >
              <option value="Fill">Fill</option>
              <option value="Outline">Outline</option>
            </select>

            <label>Button Size</label>
            <select
              value={newButton.size}
              onChange={(e) => setNewButton({ ...newButton, size: e.target.value })}
              style={{ width: "100%", marginBottom: "10px" }}
            >
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>

            <label>Color</label>
            <input
              type="color"
              value={newButton.color}
              onChange={(e) => setNewButton({ ...newButton, color: e.target.value })}
              style={{ width: "100%", marginBottom: "10px" }}
            />

            <div style={{ textAlign: "right" }}>
              <button onClick={() => setShowModal(false)} style={{ marginRight: "10px" }}>
                Cancel
              </button>
              <button onClick={handleAddButton}>Save Button</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
