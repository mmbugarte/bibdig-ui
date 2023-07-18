<script setup lang="ts">
import { defineProps } from "vue";

const books = [
  {
    id: 1,
    title: "El jardín de senderos que se bifurcan",
    author: "Jorge Luis Borges",
    year: 1941,
    image: "https://via.placeholder.com/150",
    downloadUrl: "https://example.com/book1.pdf",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    year: 1949,
    image: "https://via.placeholder.com/150",
    downloadUrl: "https://example.com/book2.pdf",
  },
  {
    id: 3,
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    year: 1967,
    image: "https://via.placeholder.com/150",
    downloadUrl: "https://example.com/book3.pdf",
  },
  // Agrega más libros ficticios aquí
];
</script>

<template>
  <div class="container mt-4">
    <h1>Listado de Libros</h1>
    <div class="row">
      <div class="col-lg-4 col-md-6" v-for="book in books" :key="book.id">
        <div class="card mb-4">
          <img :src="book.image" class="card-img-top" alt="Portada del libro" />
          <div class="card-body">
            <h5 class="card-title">{{ book.title }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ book.author }}</h6>
            <p class="card-text">Año: {{ book.year }}</p>
            <a
              :href="book.downloadUrl"
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
