const posta = [
  {
    title: 'Post 1',
    content: 'Contenuto del post 1',
    image: '/images/image1.jpg',
    tags: ['tag1', 'tag2'],
  },
  {
    title: 'Post 2',
    content: 'Contenuto del post 2',
    image: '/images/image2.jpg',
    tags: ['tag3', 'tag4'],
  },
  {
    title: 'Post 3',
    content: 'Contenuto del post 3',
    image: '/images/image3.jpg',
    tags: ['tag5', 'tag6'],
  },
  {
    title: 'Post 4',
    content: 'Contenuto del post 4',
    image: '/images/image4.jpg',
    tags: ['tag7', 'tag8'],
  },
  {
    title: 'Post 5',
    content: 'Contenuto del post 5',
    image: '/images/image5.jpg',
    tags: ['tag9', 'tag10'],
  },
];

module.exports = {
  posts: (req, res) => {
    res.format({
      html: () => {
        let html = '<main>';
        posta.forEach(({ title, content, image, tags }) => {
          html += `
                        <div>
                            <h2>${title}</h2>
                            <img width="50" src="/${image}"/>
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
        res.json({
          data: posta,
          count: posta.length,
        });
      },
      text: () => {
        res.send(JSON.stringify(posta));
      },
    });
  },
};
