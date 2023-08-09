import fs from 'fs';

const file = './db/data.json';

export const saveDatabase = (data) => {
  fs.writeFileSync(file, JSON.stringify(data));
}

export const readDatabase = () => {
  if (!fs.existsSync(file)) {
    return null;
  }
  const dbInfo = fs.readFileSync(file, { encoding: 'utf-8' });
  const data = JSON.parse(dbInfo);
  return data;
}