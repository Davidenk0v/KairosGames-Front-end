<script setup>
    import FooterPage from '@/components/FooterPage.vue';
    import NavBarNoSearch from '@/components/NavBarNoSearch.vue'
</script>

<template>
  <header class="sticky-top">
    <NavBarNoSearch> Conoce al Equipo de KairósGames </NavBarNoSearch>
  </header>
  <body class="bg-light">
    <div class="container-fluid">
      <div class="row">
        <aside
          class="col-2 bg-light position-fixed top-0 start-0"
          style="height: auto; text-align: center; margin-top: 100px"
        >
          <!-- Contenedor izquierda superpuesto -->
          <img
            src="../../public/publicidad/publi1.jpg"
            alt="KairósGames Logo"
            style="width: 100%; height: 100%; margin-bottom: 5px; margin-top: 10px"
          />
          <img
            src="../../public/publicidad/publi2.jpg"
            alt="KairósGames Logo"
            style="width: 100%; height: 100%; margin-bottom: 5px"
          />
          <img
            src="../../public/publicidad/publi10.jpg"
            alt="KairósGames Logo"
            style="width: 100%; height: 100%; margin-bottom: 5px"
          />
          <img
            src="../../public/publicidad/publi7.jpg"
            alt="KairósGames Logo"
            style="width: 100%; height: 100%; margin-bottom: 5px"
          />
        </aside>

        <section class="col bg-light">
            <div class="container">
                <div class="highlight">
                    <div>
                        <p><strong>¡Hola a todos!</strong></p>
                    </div>
                    <div>
                        <p>Somos David y Blanca, los cofundadores y desarrolladores principales de KairósGames. Queremos darte la bienvenida al corazón de nuestra empresa, donde la pasión por los videojuegos se une a nuestra visión de crear algo especial.</p>
                    </div>
                    <div class="mensaje">
                        <div class="nombre">David</div>
                        <div class="texto">
                            <p>
                                Soy David, cofundador y desarrollador principal de KairósGames. Desde que era niño, los videojuegos han sido mi pasión. Pasaba horas explorando mundos virtuales, superando desafíos y compartiendo esta pasión con amigos. Como desarrollador, siempre soñé con crear una plataforma que hiciera que encontrar los mejores juegos fuera fácil y accesible para todos.
                            </p>
                            <p>
                                KairósGames es el resultado de ese sueño. Como desarrollador, me enorgullece construir una plataforma que no solo ofrece grandes juegos, sino que también fomenta la conexión y el compañerismo entre los jugadores de todo el mundo.
                            </p>
                        </div>
                    </div>
                    <div class="mensaje">
                        <div class="nombre">Blanca</div>
                        <div class="texto">
                            <p>
                                Soy Blanca, cofundadora y desarrolladora principal de KairósGames. Desde que era joven, siempre estuve fascinada por la magia de los videojuegos. La idea de crear mundos y contar historias a través de la interactividad siempre me cautivó. Como desarrolladora, siempre quise construir algo que no solo fuera funcional, sino también inspirador. 
                            </p>
                            <p>
                                KairósGames es mi visión de eso. No solo es una tienda en línea, es un lugar donde los jugadores pueden conectarse, compartir experiencias y encontrar nuevas formas de disfrutar de su pasión compartida.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Contenedor central -->

        <aside
          class="col-2 bg-light position-fixed top-0 end-0"
          style="height: auto; text-align: center; margin-top: 100px"
        >
          <!-- Contenedor derecha superpuesto -->
          <img
            src="../../public/publicidad/publi11.jpg"
            alt="KairósGames Logo"
            style="width: 100%; height: 100%; margin-bottom: 5px; margin-top: 10px"
          />
          <img
            src="../../public/publicidad/publi16.jpeg"
            alt="KairósGames Logo"
            style="width: 100%; height: 110px; margin-bottom: 5px"
          />
          <img
            src="../../public/publicidad/publi14.png"
            alt="KairósGames Logo"
            style="width: 100%; height: 100%; margin-bottom: 5px"
          />
          <img
            src="../../public/publicidad/publi8.jpg"
            alt="KairósGames Logo"
            style="width: 100%; height: 130px; margin-bottom: 5px"
          />
          <img
            src="../../public/publicidad/publi15.jpg"
            alt="KairósGames Logo"
            style="width: 100%; height: 90px; margin-bottom: 5px"
          />
        </aside>
        <div>
            <FooterPage/>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
    body {
        margin: 0;
        padding: 0;
        color: #333;
    }

    .container {
        max-width: 100%;
        height: 100%;
        margin: 20px auto;
        padding: 20px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    p {
        line-height: 1.6;
    }

    .highlight {
        background-color: #f9f9f9;
        padding: 10px;
        border-radius: 4px;
        margin-bottom: 20px;
    }
    .mensaje {
        margin-top: 40px;
        margin-bottom: 20px;
        max-width: 70%;
        background-color: #dcf8c6;
        border-radius: 10px;
        padding: 10px;
    }

    .nombre {
        font-weight: bold;
        margin-bottom: 5px;
    }

    .texto {
        font-size: 14px;
    }
</style>