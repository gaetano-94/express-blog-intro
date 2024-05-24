const { readJSON, writeJSON } = require('../utils');

module.exports = {
  get: (req, res) => {
    const posta = readJSON('posts');
    res.format({
      html: () => {
        let html = '<main>';
        posta.forEach(({ title, content, image, tags }) => {
          html += `
                        <div>
                            <h2>${title}</h2>
                            <img width="200" src="/${image}"/>
                            <p>${content}</p>
                            <ul>
                    `;
          tags.forEach((i) => (html += `<li>${i}</li>`));
          html += `
                            </ul>
                        </div>
                        `;
        });
        html += '</main>';
        res.send(html);
      },
      json: () => {
        res.json(posta);
      },
    });
  },
  post: (req, res) => {
    const posta = readJSON('posts');
    writeJSON('posts', [...posta, req.body]);
    res.send('Post effettuato correttamente');
  },
};
