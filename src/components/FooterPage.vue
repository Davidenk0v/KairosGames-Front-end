<script setup>

  // window.addEventListener('scroll', function () {
  //   var footer = document.getElementById('footer')
  //   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
  //     footer.style.display = 'block'
  //   } else {
  //     footer.style.display = 'none'
  //   }
  // })
</script>

<template>
    <div id="container">
      <div id="footerBody">
        <footer>
          <div class="waves">
            <div class="wave" id="wave1"></div>
            <div class="wave" id="wave2"></div>
            <div class="wave" id="wave3"></div>
            <div class="wave" id="wave4"></div>
          </div>
          <ul class="social_icon">
            <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
            <li><a href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
            <li><a href="#"><ion-icon name="logo-twitch"></ion-icon></a></li>
            <li><a href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li>
            <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
          </ul>
          <ul class="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <p>©2024 Video Games Comparator | All Rights Reserved</p>
        </footer>
      </div>
    </div>
</template>


<style scoped>

  #container{
    margin-top: 15px;
    padding: 0;
  }

  #footerBody{
    display: flex;
    justify-content: center;
    min-height: 100%;
  }

  footer{
    position: relative;
    width: 64rem;
    background-color:#fb863c;
    min-height: 100px;
    padding: 20px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  footer .social_icon, .menu{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    flex-wrap: wrap;
  }

  footer .social_icon li, .menu li{
    list-style: none;
  }

  footer .social_icon li a{
    font-size: 2rem;
    color: beige;
    margin: 0 10px;
    display: inline-block;
    transition: 0.5s;
  }

  footer .social_icon li a:hover {
    transform: translateY(-10px);
  }

  footer .menu li a{
    font-size: 1.2rem;
    color: beige;
    margin: 0 10px;
    display: inline-block;
    text-decoration: none;
    opacity: 0.75;
  }

  footer .menu li a:hover {
    opacity: 1;
  }

  footer p{
    color: beige;
    text-align: center;
    margin-top: 15px;
    font-size: 1.1rem;
  }
  
</style>