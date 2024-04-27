<script setup>
    import FooterPage from '@/components/FooterPage.vue';
    import NavBarNoSearch from '@/components/NavBarNoSearch.vue'
</script>

<template>
  <header class="sticky-top">
    <NavBarNoSearch> About KairósGames </NavBarNoSearch>
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
                        <p><strong>Bienvenido a KairósGames,</strong> donde la pasión por los videojuegos se encuentra con la innovación. Fundada por David y Blanca, nuestra empresa se compromete a revolucionar la experiencia de compra de videojuegos en línea.</p>
                    </div>
                    <div>
                        <p>En KairósGames, nuestro objetivo es simple pero ambicioso: proporcionar a los usuarios una plataforma integral que les permita explorar todas las opciones de precio disponibles para los videojuegos en diferentes plataformas. Desde los últimos lanzamientos hasta los clásicos atemporales, estamos aquí para satisfacer todas las necesidades de los jugadores.</p>
                    </div>
                    <div>
                        <p>¿Cómo financiamos esta visión? A través de una combinación de publicidad en nuestra plataforma y la venta de estadísticas relacionadas con las preferencias de los usuarios, así como datos selectos. Esto nos permite mantener nuestros servicios accesibles para todos los aficionados a los videojuegos sin comprometer la calidad ni la integridad de nuestra plataforma.</p>
                    <p>Si bien reconocemos que existen otras plataformas similares, en KairósGames nos esforzamos por destacar mediante características únicas. Nuestra comunidad multijugador permite a los jugadores conectarse, formar clanes y organizar torneos, mientras que nuestro análisis de hardware ofrece recomendaciones expertas para optimizar la experiencia de juego. Además, nuestras guías y tutoriales detallados ayudan a los jugadores a superar desafíos y desbloquear contenido exclusivo.</p>
                    </div>
                    <div>
                        <p>Nuestro alcance es amplio y nuestro compromiso es firme: estamos comprometidos a desarrollar todos los aspectos de nuestra aplicación para ofrecer la mejor experiencia posible a nuestros usuarios.</p>
                    </div>
                    <div>
                        <p>Cada aspecto de nuestra plataforma está diseñado para ofrecer una experiencia fluida e intuitiva. En KairósGames, estamos emocionados de embarcarnos en esta aventura junto a la comunidad de jugadores de todo el mundo.</p>
                    </div>
                    <div>
                        <p>Únete a nosotros en KairósGames, donde el futuro del gaming está a tu alcance.</p>
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
</style>