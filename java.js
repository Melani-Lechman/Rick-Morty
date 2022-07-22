const contenedor = document.getElementById("contenedor-tar");
fetch("https://rickandmortyapi.com/api/character")
  .then((respuesta) => respuesta.json())
  .then((data) => {
    console.log(data.results);
    const tarjetaAPI = data.results;
    let acumuladora = "";
    for (let i = 0; i < tarjetaAPI.length; i++) {
      acumuladora =
        acumuladora +
        `
        <div class="card">
        <div class="face front">
        <img src=${tarjetaAPI[i].image} alt=${tarjetaAPI[i].name}>
            <h3>${tarjetaAPI[i].name}</h3>
        </div>
        <div class="face back">
            <h3><mark>${tarjetaAPI[i].name}</h3></mark>
            <p> Name:${tarjetaAPI[i].name}.
            Species:${tarjetaAPI[i].species}.
            Gender:${tarjetaAPI[i].gender}.
            Status:${tarjetaAPI[i].status}.</p>
            <div class="link">
            </div>
        </div>
    </div>

        `;
    }

    contenedor.innerHTML = acumuladora;
  });

$(document).ready(function () {
  $(".ir-arriba").click(function () {
    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      300
    );
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".ir-arriba").slideDown(300);
    } else {
      $(".ir-arriba").slideUp(300);
    }
  });
});
