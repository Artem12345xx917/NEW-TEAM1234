const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../data/petitions.json');

let petitions = [];

function saveToFile() {
  fs.writeFileSync(dataPath, JSON.stringify(petitions, null, 2));
}

function loadFromFile() {
  if (fs.existsSync(dataPath)) {
    const content = fs.readFileSync(dataPath, 'utf8');
    petitions = JSON.parse(content || '[]');
  }
}

loadFromFile();

exports.getAll = () => petitions;

exports.getById = (id) => petitions.find(p => p.id === id);

exports.create = ({ title, description }) => {
  const id = Date.now().toString();
  const petition = { id, title, description, votes: 0, url: `/petition/${id}` };
  petitions.push(petition);
  saveToFile();
  return petition;
};

exports.delete = (id) => {
  const index = petitions.findIndex(p => p.id === id);
  if (index === -1) return false;
  petitions.splice(index, 1);
  saveToFile();
  return true;
};

exports.vote = (id) => {
  const petition = petitions.find(p => p.id === id);
  if (!petition) return false;
  petition.votes += 1;
  saveToFile();
  return true;
};