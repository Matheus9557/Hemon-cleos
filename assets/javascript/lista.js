let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: new google.maps.LatLng(2.8, -187.3),
    mapTypeId: "terrain",
  });

  function listarPontos() {
    fetch("http://localhost:3000/router/lista", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        lista = document.getElementById("pontos");

        pontosRecarregados = data.map((ponto) => {
          const ponto = document.createElement("Ponto");
          ponto.textContent = JSON.stringify(ponto);
          return ponto;
        });
        lista.replaceChildren(...pontosRecarregados);
      });
  };
};

const Pontos = function (ponto) {
  for (let i = 0; i < ponto.features.length; i++) {
    const coords = ponto.features[i].geometry.coordinates;
    const latLng = new google.maps.LatLng(coords[1], coords[0]);

    new google.maps.Marker({
      position: latLng,
      map: map,
    });
  }
};

window.initMap = initMap;
window.Pontos = Pontos;



