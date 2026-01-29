fetch("/.netlify/functions/health")
  .then(r => r.json())
  .then(data => console.log(data));
