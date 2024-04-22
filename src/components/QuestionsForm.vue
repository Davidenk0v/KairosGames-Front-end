<template>
    <h5 style="margin-bottom: 20px;text-align:center;">Formulario de Preferencias de Videojuegos</h5>
    <div style="border: 1px solid grey; padding: 10px;">
    <div class="mb-3">
        <label class="title">1. ¿Cuáles son tus géneros de videojuegos favoritos?</label><br>
        <div class="check-group">
            <input type="checkbox" id="Aventura" name="generos[]" value="Aventura">
            <label for="Aventura">Aventura</label>
        </div>
        <div class="check-group">
            <input type="checkbox" id="Acción" name="generos[]" value="Acción">
            <label for="Acción">Acción</label>
        </div>
        <div class="check-group">
            <input type="checkbox" id="Rol" name="generos[]" value="Rol">
            <label for="Rol">Rol</label>
        </div>
    </div>
    <div class="mb-3">
        <label class="title">2. ¿Tienes alguna franquicia de videojuegos favorita?</label>
        <input type="text">
    </div>
    <div class="mb-3">
        <label class="title">3. ¿Prefieres jugar en consolas de sobremesa, PC o dispositivos móviles?</label><br>
        <div class="check-group">
            <input type="checkbox" id="consola1" name="consolas[]" value="Consola de sobremesa">
            <label for="consola1">Consola de sobremesa</label>
        </div>
        <div class="check-group">
            <input type="checkbox" id="consola2" name="consolas[]" value="PC">
            <label for="consola2">PC</label>
        </div>
        <div class="check-group">
            <input type="checkbox" id="consola3" name="consolas[]" value="Dispositivos móviles">
            <label for="consola3">Dispositivos móviles</label>
        </div>
    </div>
    <div class="mb-3">
        <label class="title">4. ¿Qué te motiva a jugar un videojuego?</label><br>
        <div class="check-group">
            <input type="checkbox" id="motivacion1" name="motivacion" value="Historia">
            <label for="motivacion1">Historia</label>
        </div>
        <div class="check-group">
            <input type="checkbox" id="motivacion2" name="motivacion" value="Jugabilidad">
            <label for="motivacion2">Jugabilidad</label>
        </div>
        <div class="check-group">
            <input type="checkbox" id="motivacion3" name="motivacion" value="Gráficos">
            <label for="motivacion3">Gráficos</label>
        </div>
        <div class="check-group">
            <input type="checkbox" id="motivacion4" name="motivacion" value="Competición">
            <label for="motivacion4">Competición</label>
        </div>
        <div class="check-group">
            <input type="checkbox" id="motivacion5" name="motivacion" value="Otro">
            <label for="motivacion5">Otro</label>
        </div>
    </div>
    <div class="mb-3">
        <label class="title">5. ¿Qué tipo de narrativa prefieres en un juego?</label><br>
        <div class="radio-group">
            <input type="radio" id="narrativa1" name="narrativa" value="Profunda y compleja">
            <label for="narrativa1">Profunda y compleja</label>
        </div>
        <div class="radio-group">
            <input type="radio" id="narrativa2" name="narrativa" value="Ligera y divertida">
            <label for="narrativa2">Ligera y divertida</label>
        </div>
        <div class="radio-group">
            <input type="radio" id="narrativa3" name="narrativa" value="Ambas">
            <label for="narrativa3">Ambas</label>
        </div>
    </div>
    <div class="mb-3">
    <label class="title">6. ¿Cuál es tu nivel de experiencia en los videojuegos?</label><br>
    <div class="check-group">
        <input type="checkbox" id="experiencia1" name="experiencia" value="Principiante">
        <label for="experiencia1">Principiante</label>
    </div>
    <div class="check-group">
        <input type="checkbox" id="experiencia2" name="experiencia" value="Intermedio">
        <label for="experiencia2">Intermedio</label>
    </div>
    <div class="check-group">
        <input type="checkbox" id="experiencia3" name="experiencia" value="Avanzado">
        <label for="experiencia3">Avanzado</label>
    </div>
    <div class="check-group">
        <input type="checkbox" id="experiencia4" name="experiencia" value="Experto">
        <label for="experiencia4">Experto</label>
    </div>
</div>

<div class="mb-3">
    <label class="title">7. ¿Hay algún juego que estés esperando con ansias que se lance próximamente?</label>
    <input type="text" id="juego_esperado" name="juego_esperado" style="width: 100%; padding: 5px;">
</div>

<div class="mb-3">
    <label class="title">9. ¿Prefieres juegos de mundo abierto o juegos lineales con una estructura más definida?</label><br>
    <div class="radio-group">
        <input type="radio" id="estructura1" name="estructura" value="Mundo abierto">
        <label for="estructura1">Mundo abierto</label>
    </div>
    <div class="radio-group">
        <input type="radio" id="estructura2" name="estructura" value="Lineales">
        <label for="estructura2">Lineales</label>
    </div>
    <div class="radio-group">
        <input type="radio" id="estructura3" name="estructura" value="Ambas">
        <label for="estructura3">Ambas</label>
    </div>
</div>
<div class="mb-3">
    <label class="title">10. ¿Cuál es tu estilo de juego preferido?</label><br>
    <div class="check-group">
        <input type="checkbox" id="estilo_juego1" name="estilo_juego" value="Acción">
        <label for="estilo_juego1">Acción</label>
    </div>
    <div class="check-group">
        <input type="checkbox" id="estilo_juego2" name="estilo_juego" value="Aventura">
        <label for="estilo_juego2">Aventura</label>
    </div>
    <div class="check-group">
        <input type="checkbox" id="estilo_juego3" name="estilo_juego" value="Rol">
        <label for="estilo_juego3">Rol</label>
    </div>
    <div class="check-group">
        <input type="checkbox" id="estilo_juego4" name="estilo_juego" value="Estrategia">
        <label for="estilo_juego4">Estrategia</label>
    </div>
    <div class="check-group">
        <input type="checkbox" id="estilo_juego5" name="estilo_juego" value="Deportes">
        <label for="estilo_juego5">Deportes</label>
    </div>
    <div class="check-group">
        <input type="checkbox" id="estilo_juego6" name="estilo_juego" value="Otro">
        <label for="estilo_juego6">Otro</label>
    </div>
</div>

</div>
</template>

<style>
    .title{
        margin-bottom: 15px;
        margin-top: 15px;
        font-size: 18px
    }
    button{
        margin-top: 15px;
    }
    .check-group,
    .radio-group {
        margin-bottom: 5px;
        display: inline-block;
        margin-right: 10px;
    }
</style>