<script setup>

window.addEventListener('scroll', function() {
  var footer = document.getElementById('footer');
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      footer.style.display = 'block';
  } else {
      footer.style.display = 'none';
  }
});

</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="../../public/favicon.ico" alt="KairósGames Logo" style="width: 70px; height: 70px;">
          KairósGames
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <form class="d-flex justify-content-center align-items-center w-50">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
        <ul class="navbar-nav">
          <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Login</a>
          </li>
          <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Create Account</a>
          </li>
          <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">My Account</a>
          </li>
        </ul>
    </div>
  </nav>
  
  <div class="container-fluid">
    <div class="row">
        <div class="col-2 bg-light" style="height: auto; text-align: center;">
          <img src="../../public/favicon.ico" alt="KairósGames Logo" style="width: 170px; height: 170px;">
          <img src="../../public/favicon.ico" alt="KairósGames Logo" style="width: 170px; height: 170px;">
          <img src="../../public/favicon.ico" alt="KairósGames Logo" style="width: 170px; height: 170px;">
          <img src="../../public/favicon.ico" alt="KairósGames Logo" style="width: 170px; height: 170px;">
          <img src="../../public/favicon.ico" alt="KairósGames Logo" style="width: 170px; height: 170px;">
        </div>
        <div class="col bg-light">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quam felis, dignissim vitae mauris quis, porta sagittis urna. Cras lectus eros, ullamcorper at faucibus ac, tincidunt vel turpis. Proin tempor diam ut ligula molestie convallis. Fusce luctus dolor a nulla maximus sodales. Etiam fringilla dui in posuere pellentesque. Fusce fringilla placerat euismod. Nulla auctor eros vel ligula gravida, eget molestie ipsum ultricies. Nullam molestie sollicitudin faucibus. Proin id sollicitudin dui, et porttitor risus. Donec ultricies, neque in sodales dignissim, nibh nibh dictum erat, ut feugiat eros sapien ut erat. Vivamus commodo leo eget velit fermentum, quis consequat odio suscipit.

          Morbi ex sapien, porta id ex interdum, venenatis imperdiet dui. Aenean faucibus ligula in iaculis feugiat. Etiam vestibulum urna in est tempor condimentum. Aenean blandit enim eget dui mollis tempus. Ut nisl quam, faucibus sed diam in, congue molestie neque. Curabitur varius blandit tellus, id ullamcorper neque pellentesque ac. Suspendisse lacinia velit non lorem semper porta. Aliquam non metus nec est fringilla pharetra. Cras commodo arcu vel ultricies efficitur. Maecenas velit leo, sagittis nec condimentum a, vestibulum quis nulla. Sed blandit erat non quam posuere finibus. Maecenas elementum lacus erat, et maximus ante consequat sit amet. Proin iaculis purus id dui dignissim, at accumsan augue consequat. Vivamus ultrices erat ut lobortis sagittis. Nulla feugiat porttitor mattis. Donec nec gravida libero.

          Mauris leo ante, pellentesque et condimentum quis, dapibus vel lorem. Aenean at nibh vel massa maximus tristique. Vivamus consequat dui sed pulvinar porttitor. Quisque tellus orci, consectetur sit amet euismod ac, aliquet sed mauris. Vivamus vestibulum justo nisi, eu feugiat libero feugiat a. Aenean consequat lectus vel odio aliquam, eget consectetur tellus feugiat. In volutpat ac nisl ultricies porttitor. Fusce porta ipsum non leo dignissim, quis elementum nibh sollicitudin.

          Proin quis facilisis mi. Nullam et tellus posuere, dictum velit et, finibus justo. Etiam pulvinar augue sed volutpat semper. Pellentesque tempus auctor erat, eget tempor lectus malesuada nec. Vivamus sit amet tempor justo. Nunc vestibulum condimentum commodo. Phasellus mi mauris, posuere quis consectetur eget, egestas at arcu. Aliquam vel pellentesque nisl, eu vehicula turpis. In arcu tortor, rhoncus nec massa sed, aliquet mollis urna. Quisque fermentum augue ac purus ornare, nec tincidunt nisl congue. Vivamus vel ante at turpis posuere malesuada quis vitae leo. Suspendisse potenti. Ut quis eros ac sem tempus laoreet ac sit amet risus. Aliquam maximus est elit, consequat sollicitudin massa eleifend vel.

          Sed tincidunt libero ac congue condimentum. Donec eget dapibus urna, in rutrum diam. Suspendisse vestibulum efficitur felis ut facilisis. Nulla orci arcu, ullamcorper quis nibh vel, blandit bibendum mi. Aliquam vitae pharetra ante. Cras scelerisque, augue at tempor molestie, magna quam sollicitudin metus, sed dapibus ex purus eget sapien. Donec vel feugiat enim, in rutrum mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

          Phasellus a rhoncus eros, quis blandit mauris. Etiam dictum leo sit amet diam tempus ullamcorper. Ut sed lacinia orci. Duis cursus efficitur blandit. Morbi elit metus, tempus in sapien quis, mattis scelerisque est. Cras tristique ante neque, et pellentesque elit mattis vitae. Quisque eleifend nunc eget ultrices iaculis. Mauris sed tristique ante, eu dictum orci.

          Quisque venenatis interdum massa at tincidunt. Praesent ut quam hendrerit, auctor neque eget, aliquet mi. Nunc nec nulla auctor, tristique nulla non, vehicula risus. Pellentesque ut pellentesque augue, sit amet efficitur ipsum. Suspendisse nec fringilla elit. Duis condimentum rhoncus mi, quis rhoncus justo pulvinar eget. Etiam eleifend augue in orci aliquam, et vulputate magna auctor. Maecenas convallis rutrum urna at pulvinar. Aliquam sollicitudin viverra sem vel sollicitudin. Quisque purus odio, rhoncus quis tincidunt eu, molestie ac turpis. Vivamus ultricies tortor eget tincidunt fringilla. Ut sed diam sem.

          Vestibulum vitae blandit tortor, eu dapibus velit. Nullam aliquet pulvinar magna, vitae malesuada justo scelerisque et. Integer finibus sapien et justo viverra fermentum. Fusce eu augue in erat tempus ultrices. Praesent velit diam, lobortis rhoncus egestas ut, dapibus vitae mauris. Maecenas accumsan id nibh dapibus imperdiet. Mauris suscipit lacus scelerisque est cursus, eget maximus risus porta. Vivamus vehicula convallis orci, eget varius velit malesuada nec. Integer semper vel nunc vel dictum. Cras tempor, ligula ut cursus iaculis, tellus tortor porttitor elit, quis maximus nulla nibh eu ipsum. Praesent quam orci, ultrices vitae lacus ut, semper placerat massa. Aliquam erat volutpat.

          Quisque tincidunt euismod odio quis volutpat. Etiam fermentum lorem at felis consectetur efficitur. Curabitur pretium sodales tellus non sagittis. Maecenas volutpat tortor eu justo porta molestie. Fusce ut nisi sit amet tellus dignissim semper. Vivamus lectus ex, sagittis ut mauris ut, ornare aliquam nulla. Cras vestibulum volutpat sollicitudin.

          Quisque eleifend turpis ut risus viverra, at tempor nibh hendrerit. Quisque rutrum tempus mi, at pellentesque urna iaculis ac. Integer enim diam, malesuada vel ante vitae, rutrum maximus massa. Sed tinLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quam felis, dignissim vitae mauris quis, porta sagittis urna. Cras lectus eros, ullamcorper at faucibus ac, tincidunt vel turpis. Proin tempor diam ut ligula molestie convallis. Fusce luctus dolor a nulla maximus sodales. Etiam fringilla dui in posuere pellentesque. Fusce fringilla placerat euismod. Nulla auctor eros vel ligula gravida, eget molestie ipsum ultricies. Nullam molestie sollicitudin faucibus. Proin id sollicitudin dui, et porttitor risus. Donec ultricies, neque in sodales dignissim, nibh nibh dictum erat, ut feugiat eros sapien ut erat. Vivamus commodo leo eget velit fermentum, quis consequat odio suscipit.

          Morbi ex sapien, porta id ex interdum, venenatis imperdiet dui. Aenean faucibus ligula in iaculis feugiat. Etiam vestibulum urna in est tempor condimentum. Aenean blandit enim eget dui mollis tempus. Ut nisl quam, faucibus sed diam in, congue molestie neque. Curabitur varius blandit tellus, id ullamcorper neque pellentesque ac. Suspendisse lacinia velit non lorem semper porta. Aliquam non metus nec est fringilla pharetra. Cras commodo arcu vel ultricies efficitur. Maecenas velit leo, sagittis nec condimentum a, vestibulum quis nulla. Sed blandit erat non quam posuere finibus. Maecenas elementum lacus erat, et maximus ante consequat sit amet. Proin iaculis purus id dui dignissim, at accumsan augue consequat. Vivamus ultrices erat ut lobortis sagittis. Nulla feugiat porttitor mattis. Donec nec gravida libero.

          Mauris leo ante, pellentesque et condimentum quis, dapibus vel lorem. Aenean at nibh vel massa maximus tristique. Vivamus consequat dui sed pulvinar porttitor. Quisque tellus orci, consectetur sit amet euismod ac, aliquet sed mauris. Vivamus vestibulum justo nisi, eu feugiat libero feugiat a. Aenean consequat lectus vel odio aliquam, eget consectetur tellus feugiat. In volutpat ac nisl ultricies porttitor. Fusce porta ipsum non leo dignissim, quis elementum nibh sollicitudin.

          Proin quis facilisis mi. Nullam et tellus posuere, dictum velit et, finibus justo. Etiam pulvinar augue sed volutpat semper. Pellentesque tempus auctor erat, eget tempor lectus malesuada nec. Vivamus sit amet tempor justo. Nunc vestibulum condimentum commodo. Phasellus mi mauris, posuere quis consectetur eget, egestas at arcu. Aliquam vel pellentesque nisl, eu vehicula turpis. In arcu tortor, rhoncus nec massa sed, aliquet mollis urna. Quisque fermentum augue ac purus ornare, nec tincidunt nisl congue. Vivamus vel ante at turpis posuere malesuada quis vitae leo. Suspendisse potenti. Ut quis eros ac sem tempus laoreet ac sit amet risus. Aliquam maximus est elit, consequat sollicitudin massa eleifend vel.

          Sed tincidunt libero ac congue condimentum. Donec eget dapibus urna, in rutrum diam. Suspendisse vestibulum efficitur felis ut facilisis. Nulla orci arcu, ullamcorper quis nibh vel, blandit bibendum mi. Aliquam vitae pharetra ante. Cras scelerisque, augue at tempor molestie, magna quam sollicitudin metus, sed dapibus ex purus eget sapien. Donec vel feugiat enim, in rutrum mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

          Phasellus a rhoncus eros, quis blandit mauris. Etiam dictum leo sit amet diam tempus ullamcorper. Ut sed lacinia orci. Duis cursus efficitur blandit. Morbi elit metus, tempus in sapien quis, mattis scelerisque est. Cras tristique ante neque, et pellentesque elit mattis vitae. Quisque eleifend nunc eget ultrices iaculis. Mauris sed tristique ante, eu dictum orci.

          Quisque venenatis interdum massa at tincidunt. Praesent ut quam hendrerit, auctor neque eget, aliquet mi. Nunc nec nulla auctor, tristique nulla non, vehicula risus. Pellentesque ut pellentesque augue, sit amet efficitur ipsum. Suspendisse nec fringilla elit. Duis condimentum rhoncus mi, quis rhoncus justo pulvinar eget. Etiam eleifend augue in orci aliquam, et vulputate magna auctor. Maecenas convallis rutrum urna at pulvinar. Aliquam sollicitudin viverra sem vel sollicitudin. Quisque purus odio, rhoncus quis tincidunt eu, molestie ac turpis. Vivamus ultricies tortor eget tincidunt fringilla. Ut sed diam sem.

          Vestibulum vitae blandit tortor, eu dapibus velit. Nullam aliquet pulvinar magna, vitae malesuada justo scelerisque et. Integer finibus sapien et justo viverra fermentum. Fusce eu augue in erat tempus ultrices. Praesent velit diam, lobortis rhoncus egestas ut, dapibus vitae mauris. Maecenas accumsan id nibh dapibus imperdiet. Mauris suscipit lacus scelerisque est cursus, eget maximus risus porta. Vivamus vehicula convallis orci, eget varius velit malesuada nec. Integer semper vel nunc vel dictum. Cras tempor, ligula ut cursus iaculis, tellus tortor porttitor elit, quis maximus nulla nibh eu ipsum. Praesent quam orci, ultrices vitae lacus ut, semper placerat massa. Aliquam erat volutpat.

          Quisque tincidunt euismod odio quis volutpat. Etiam fermentum lorem at felis consectetur efficitur. Curabitur pretium sodales tellus non sagittis. Maecenas volutpat tortor eu justo porta molestie. Fusce ut nisi sit amet tellus dignissim semper. Vivamus lectus ex, sagittis ut mauris ut, ornare aliquam nulla. Cras vestibulum volutpat sollicitudin.

          Quisque 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quam felis, dignissim vitae mauris quis, porta sagittis urna. Cras lectus eros, ullamcorper at faucibus ac, tincidunt vel turpis. Proin tempor diam ut ligula molestie convallis. Fusce luctus dolor a nulla maximus sodales. Etiam fringilla dui in posuere pellentesque. Fusce fringilla placerat euismod. Nulla auctor eros vel ligula gravida, eget molestie ipsum ultricies. Nullam molestie sollicitudin faucibus. Proin id sollicitudin dui, et porttitor risus. Donec ultricies, neque in sodales dignissim, nibh nibh dictum erat, ut feugiat eros sapien ut erat. Vivamus commodo leo eget velit fermentum, quis consequat odio suscipit.

          Morbi ex sapien, porta id ex interdum, venenatis imperdiet dui. Aenean faucibus ligula in iaculis feugiat. Etiam vestibulum urna in est tempor condimentum. Aenean blandit enim eget dui mollis tempus. Ut nisl quam, faucibus sed diam in, congue molestie neque. Curabitur varius blandit tellus, id ullamcorper neque pellentesque ac. Suspendisse lacinia velit non lorem semper porta. Aliquam non metus nec est fringilla pharetra. Cras commodo arcu vel ultricies efficitur. Maecenas velit leo, sagittis nec condimentum a, vestibulum quis nulla. Sed blandit erat non quam posuere finibus. Maecenas elementum lacus erat, et maximus ante consequat sit amet. Proin iaculis purus id dui dignissim, at accumsan augue consequat. Vivamus ultrices erat ut lobortis sagittis. Nulla feugiat porttitor mattis. Donec nec gravida libero.

          Mauris leo ante, pellentesque et condimentum quis, dapibus vel lorem. Aenean at nibh vel massa maximus tristique. Vivamus consequat dui sed pulvinar porttitor. Quisque tellus orci, consectetur sit amet euismod ac, aliquet sed mauris. Vivamus vestibulum justo nisi, eu feugiat libero feugiat a. Aenean consequat lectus vel odio aliquam, eget consectetur tellus feugiat. In volutpat ac nisl ultricies porttitor. Fusce porta ipsum non leo dignissim, quis elementum nibh sollicitudin.

          Proin quis facilisis mi. Nullam et tellus posuere, dictum velit et, finibus justo. Etiam pulvinar augue sed volutpat semper. Pellentesque tempus auctor erat, eget tempor lectus malesuada nec. Vivamus sit amet tempor justo. Nunc vestibulum condimentum commodo. Phasellus mi mauris, posuere quis consectetur eget, egestas at arcu. Aliquam vel pellentesque nisl, eu vehicula turpis. In arcu tortor, rhoncus nec massa sed, aliquet mollis urna. Quisque fermentum augue ac purus ornare, nec tincidunt nisl congue. Vivamus vel ante at turpis posuere malesuada quis vitae leo. Suspendisse potenti. Ut quis eros ac sem tempus laoreet ac sit amet risus. Aliquam maximus est elit, consequat sollicitudin massa eleifend vel.

          Sed tincidunt libero ac congue condimentum. Donec eget dapibus urna, in rutrum diam. Suspendisse vestibulum efficitur felis ut facilisis. Nulla orci arcu, ullamcorper quis nibh vel, blandit bibendum mi. Aliquam vitae pharetra ante. Cras scelerisque, augue at tempor molestie, magna quam sollicitudin metus, sed dapibus ex purus eget sapien. Donec vel feugiat enim, in rutrum mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

          Phasellus a rhoncus eros, quis blandit mauris. Etiam dictum leo sit amet diam tempus ullamcorper. Ut sed lacinia orci. Duis cursus efficitur blandit. Morbi elit metus, tempus in sapien quis, mattis scelerisque est. Cras tristique ante neque, et pellentesque elit mattis vitae. Quisque eleifend nunc eget ultrices iaculis. Mauris sed tristique ante, eu dictum orci.

          Quisque venenatis interdum massa at tincidunt. Praesent ut quam hendrerit, auctor neque eget, aliquet mi. Nunc nec nulla auctor, tristique nulla non, vehicula risus. Pellentesque ut pellentesque augue, sit amet efficitur ipsum. Suspendisse nec fringilla elit. Duis condimentum rhoncus mi, quis rhoncus justo pulvinar eget. Etiam eleifend augue in orci aliquam, et vulputate magna auctor. Maecenas convallis rutrum urna at pulvinar. Aliquam sollicitudin viverra sem vel sollicitudin. Quisque purus odio, rhoncus quis tincidunt eu, molestie ac turpis. Vivamus ultricies tortor eget tincidunt fringilla. Ut sed diam sem.

          Vestibulum vitae blandit tortor, eu dapibus velit. Nullam aliquet pulvinar magna, vitae malesuada justo scelerisque et. Integer finibus sapien et justo viverra fermentum. Fusce eu augue in erat tempus ultrices. Praesent velit diam, lobortis rhoncus egestas ut, dapibus vitae mauris. Maecenas accumsan id nibh dapibus imperdiet. Mauris suscipit lacus scelerisque est cursus, eget maximus risus porta. Vivamus vehicula convallis orci, eget varius velit malesuada nec. Integer semper vel nunc vel dictum. Cras tempor, ligula ut cursus iaculis, tellus tortor porttitor elit, quis maximus nulla nibh eu ipsum. Praesent quam orci, ultrices vitae lacus ut, semper placerat massa. Aliquam erat volutpat.

          Quisque tincidunt euismod odio quis volutpat. Etiam fermentum lorem at felis consectetur efficitur. Curabitur pretium sodales tellus non sagittis. Maecenas volutpat tortor eu justo porta molestie. Fusce ut nisi sit amet tellus dignissim semper. Vivamus lectus ex, sagittis ut mauris ut, ornare aliquam nulla. Cras vestibulum volutpat sollicitudin.

          Quisque eleifend turpis ut risus viverra, at tempor nibh hendrerit. Quisque rutrum tempus mi, at pellentesque urna iaculis ac. Integer enim diam, malesuada vel ante vitae, rutrum maximus massa. Sed tineleifend turpis ut risus viverra, at tempor nibh hendrerit. Quisque rutrum tempus mi, at pellentesque urna iaculis ac. Integer enim diam, malesuada vel ante vitae, rutrum maximus massa. Sed tin
          </p>
        </div>
        <div class="col-2 bg-light" style="right: 0; z-index: 0; height: auto; text-align: center;">
          <img src="../../public/favicon.ico" alt="KairósGames Logo" style="width: 170px; height: 170px;">
          <img src="../../public/favicon.ico" alt="KairósGames Logo" style="width: 170px; height: 170px;">
          <img src="../../public/favicon.ico" alt="KairósGames Logo" style="width: 170px; height: 170px;">
          <img src="../../public/favicon.ico" alt="KairósGames Logo" style="width: 170px; height: 170px;">
          <img src="../../public/favicon.ico" alt="KairósGames Logo" style="width: 170px; height: 170px;">
        </div>
    </div>
</div>
<footer class="bg-light fixed-bottom" id="footer" style="display: none;">
    <div class="container-fluid">
        <div class="row">
            <div class="col text-center">
                Footer
            </div>
        </div>
    </div>
</footer>
</template>

<style scoped>
</style>