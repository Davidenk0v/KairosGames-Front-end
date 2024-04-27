<script setup>
    import FooterPage from '@/components/FooterPage.vue';
    import NavBarNoSearch from '@/components/NavBarNoSearch.vue'
</script>
<template>
    <header class="sticky-top">
      <NavBarNoSearch> KairósGames Services </NavBarNoSearch>
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
                    <p class="title">Explora los servicios que ofrecemos para mejorar tu experiencia de juego.</p>

                    <div class="service">
                        <h2>Comparativa de Precios</h2>
                        <p>Proporcionamos una plataforma integral que permite a los usuarios explorar todas las opciones de precio disponibles para videojuegos en diferentes plataformas.</p>
                    </div>

                    <div class="service">
                        <h2>Comunidad Multijugador</h2>
                        <p>Funcionalidades que permiten a los jugadores encontrar amigos para jugar en línea, formar clanes, organizar torneos y compartir experiencias multijugador.</p>
                    </div>

                    <div class="service">
                        <h2>Análisis de Hardware</h2>
                        <p>Ofrecemos información y recomendaciones expertas sobre hardware para juegos, incluyendo tarjetas gráficas, procesadores y periféricos, para optimizar tu experiencia de juego.</p>
                    </div>

                    <div class="service">
                        <h2>Guías y Tutoriales</h2>
                        <p>Accede a guías y tutoriales detallados para superar niveles difíciles, obtener logros específicos o desbloquear contenido secreto en tus juegos favoritos.</p>
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
    .container {
        max-width: 100%;
        height: 100%;
        margin: 20px auto;
        padding: 20px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    h1 {
        text-align: center;
        color: #2c3e50;
    }

    p {
        color: #555;
        line-height: 1.6;
    }

    .title{
        text-align: center;
    }

    .service {
        margin-top: 20px;
        padding: 15px;
        background-color: #eef;
        border-left: 5px solid #3498db;
        border-radius: 4px;
        display: block; /* Asegura que cada servicio se comporte como un bloque */
    }

    .service h2 {
        color: #3498db;
    }

    .service p {
        margin-top: 5px;
    }
</style>