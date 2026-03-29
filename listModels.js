const API_KEY = "AIzaSyC3P4tSgi8qcWXC6Q4G6A4PuOJO3VJnlUI";
fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`)
  .then(res => res.json())
  .then(data => console.log(data.models.map(m => m.name).join("\n")))
  .catch(console.error);
