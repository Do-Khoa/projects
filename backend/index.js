const express = require("express");
const cors = require("cors");

// const bodyParser = require('body-parser');
// app.use(bodyParser.json());

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

const axios = require("axios");
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  // Get or create user on Chat Engine!
  try {
    const r = await axios.put (
        'https://api.chatengine.io/users/',
        { username: username, secret: username, first_name: username },
        { headers: { "private-key": "65883fad-46b1-4cc0-98b5-c79c842877bb" } }
    );
    return res.status(200).json(r.data);
} catch (e) {
    // Kiểm tra xem có phản hồi lỗi không
    if (e.response) {
        // Xử lý lỗi và trả về dữ liệu lỗi từ phản hồi
        return res.status(e.response.status).json(e.response.data);
    } else {
        // Nếu không có phản hồi từ máy chủ, trả về một lỗi mặc định
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
});

app.listen(3001);