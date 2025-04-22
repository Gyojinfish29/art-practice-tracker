
import React, { useState } from "react";

export default function App() {
  const [comment, setComment] = useState("");
  const [color, setColor] = useState("green");
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h1>🎨 絵の練習記録</h1>
      <div>
        <label>今日のひとこと：</label>
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
      </div>
      <div>
        <label>モチベーション：</label>
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="green">高い（緑）</option>
          <option value="yellow">ふつう（黄）</option>
          <option value="red">低い（赤）</option>
        </select>
      </div>
      <div>
        <label>画像アップロード：</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>
      {image && <img src={image} alt="練習画像" style={{ maxWidth: "100%", marginTop: 10 }} />}
      <div style={{ marginTop: 20 }}>
        <strong>保存内容：</strong>
        <p style={{ color }}>・ひとこと：{comment}</p>
        <p>・モチベ色：{color}</p>
      </div>
    </div>
  );
}
