<script setup>
import LoginForm from '@/components/Layout/LoginForm.vue'
import NavBarNoSearch from '@/components/NavBarNoSearch.vue'
import FooterPage from '@/components/FooterPage.vue'
</script>

<template>
  <header>
    <NavBarNoSearch> Inicio de sesión </NavBarNoSearch>
  </header>
  <body>
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
          <LoginForm />
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
      </div>
    </div>
  </body>
  <div class="d-flex justify-content-center fixed-bottom">
    <FooterPage />
  </div>
</template>
