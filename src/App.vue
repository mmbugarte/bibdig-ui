<script setup lang="ts">
import { ref, onMounted } from "vue";

interface Libro {
  id: number;
  titulo: string;
  autor: string;
  publicado: number;
  urlImagenPortada: string;
  urlDownload: string;
}

const libros = ref<Libro[]>([]);

const fetchData = async () => {
  try {
    const respuesta = await fetch("/api/libros");
    const datos = await respuesta.json();
    console.log(datos);
    libros.value = datos;
  } catch (error) {
    console.error("Error al recuperar los datos:", error);
  }
};

onMounted(fetchData);
</script>

<template>
  <div class="container mt-4">
    <div class="logo-container">
      <h1>Biblioteca Digital</h1>
      <img
        src="@/assets/logo.jpeg"
        alt="Logo de la biblioteca"
        class="logo-img"
      />
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-6" v-for="libro in libros" :key="libro.id">
        <div class="card mb-4">
          <img
            :src="libro.urlImagenPortada"
            class="card-img-top"
            alt="Portada del libro"
          />
          <div class="card-body">
            <h5 class="card-title">{{ libro.titulo }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ libro.autor }}</h6>
            <p class="card-text">Año: {{ libro.publicado }}</p>
            <a
              :href="libro.urlDownload"
              class="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              >Descargar</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.logo-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  h1 {
    color: #f25e3d;
  }
}

.logo-img {
  height: 100px;
  margin-left: 10px;
}
</style>
