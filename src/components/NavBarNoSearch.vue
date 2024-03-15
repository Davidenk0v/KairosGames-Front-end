<script setup></script>
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img
          src="../../public/favicon.ico"
          alt="KairósGames Logo"
          style="width: 70px; height: 70px"
        />
        KairósGames
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <h2>
          <slot> Título </slot>
        </h2>
      </div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link active" to="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" to="/create-account">Create Account</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">My Account</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
