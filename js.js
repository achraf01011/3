app.get('/random-category', (req, res) => {
  const categories = [
    { short_name: 'L', name: 'Lunch' },
    { short_name: 'D', name: 'Dinner' },
    { short_name: 'S', name: 'Sushi' },
   
  ];
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];

  res.json({ short_name: randomCategory.short_name });
});

fetch('/random-category')
  .then(response => response.json())
  .then(data => {
    const specialsLink = document.querySelector('#specials-link');
    specialsLink.setAttribute('onclick', `$dc.loadMenuItems('${data.short_name}');`);
  });
