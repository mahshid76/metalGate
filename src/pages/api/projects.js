const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'db.json');
  const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  if (req.method === 'GET') {
    res.status(200).json(jsonData.projects);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
