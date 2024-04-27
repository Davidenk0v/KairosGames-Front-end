
<template>
    <h5 style="margin-bottom: 20px;text-align:center;margin-top: 20px;">Formulario de Preferencias de Videojuegos</h5>
    <form>
        <div style="border: 1px solid grey; padding: 20px;">
            <div class="form-group">
                <label for="exampleFormControlSelect1">1. ¿Cuáles son tus géneros de videojuegos favoritos?</label>
                <select class="form-control" id="exampleFormControlSelect1" multiple>
                <option>Aventura</option>
                <option>Acción</option>
                <option>Rol</option>
                <option>Terror</option>
                <option>Deportes</option>
                <option>Estrategia</option>
                <option>Arcade</option>
            </select>
            </div>
            <div class="form-group">
                <label class="title">2. ¿Tienes alguna franquicia de videojuegos favorita?</label>
                <input type="text" class="form-control" aria-label="Recipient's last name" aria-describedby="basic-addon2"/>
            </div>
            <div class="form-group">
                
            </div>
        </div>
    </form>  
</template>

<style>
    .title{
        margin-bottom: 15px;
        margin-top: 15px;
        font-size: 18px
    }
</style>