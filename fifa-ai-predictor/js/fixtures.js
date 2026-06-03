fetch("data/fixtures.json")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("fixtures");
    data.forEach(match => {
      const li = document.createElement("li");
      li.className = "fixture-item";
      li.innerHTML = `
        <span class="fixture-date">${match.date} · ${match.time}</span>
        <strong>${match.home} vs ${match.away}</strong>
        <span class="fixture-meta">${match.venue} · ${match.status}${match.score ? ' · ' + match.score : ''}</span>
      `;
      list.appendChild(li);
    });
  });
