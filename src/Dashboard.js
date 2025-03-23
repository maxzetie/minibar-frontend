
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard({ token, onLogout }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://minibar-api.onrender.com/api/inventory', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setItems(res.data)).catch(() => setItems([]));
  }, [token]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Minibar Inventory</h2>
      <button onClick={onLogout}>Logout</button>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item.product_name} - Qty: {item.quantity} - Room: {item.room_id}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
