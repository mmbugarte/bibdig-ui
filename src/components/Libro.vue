<!-- Libro.vue -->

<template>
  <div class="card mb-4">
    <img
      :src="libro.portada.data.attributes.url"
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
      >
        Descargar
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Libro {
  id: number;
  titulo: string;
  autor: string;
  publicado: number;
  urlImagenPortada: string;
  urlDownload: string;
}

const props = defineProps<{ libro: Libro }>();
const libro = props.libro;
console.log(libro);
</script>

<style scoped>
/* Estilos específicos para el componente Libro */
</style>
