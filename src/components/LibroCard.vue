<script setup lang="ts">
import { defineProps } from "vue";
import { StrapiObject, Libro } from "../models/Libro";

const props = defineProps<{ libro: StrapiObject<Libro> }>();

// eslint-disable-next-line vue/no-setup-props-destructure
const { titulo, autor, publicado, portada, descarga } = props.libro.attributes;
</script>

<template>
  <div class="card mb-4">
    <img
      :src="portada.data.attributes.url"
      class="card-img-top"
      alt="Portada del props.libro"
    />
    <div class="card-body">
      <h5 class="card-title">{{ titulo }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ autor }}</h6>
      <p class="card-text">Año: {{ publicado }}</p>
      <a
        :href="descarga.data.attributes.url"
        class="btn btn-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        Descargar
      </a>
    </div>
  </div>
</template>

<style scoped>
/* Estilos específicos para el componente Libro */
</style>
