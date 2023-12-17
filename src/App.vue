<script setup lang="ts">
import { defineProps } from "vue";

const books = [
  {
    id: 1,
    title: "El gran Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    image: "https://via.placeholder.com/150",
    downloadUrl: "https://example.com/book1.pdf",
  },
  {
    id: 2,
    title: "Orgullo y prejuicio",
    author: "Jane Austen",
    year: 1813,
    image: "https://via.placeholder.com/150",
    downloadUrl: "https://example.com/book2.pdf",
  },
  {
    id: 3,
    title: "Matar a un ruiseñor",
    author: "Harper Lee",
    year: 1960,
    image: "https://via.placeholder.com/150",
    downloadUrl: "https://example.com/book3.pdf",
  },
  {
    id: 4,
    title: "1984",
    author: "George Orwell",
    year: 1949,
    image: "https://via.placeholder.com/150",
    downloadUrl: "https://example.com/book4.pdf",
  },
  {
    id: 5,
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    year: 1605,
    image: "https://via.placeholder.com/150",
    downloadUrl: "https://example.com/book5.pdf",
  },
  {
    id: 6,
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    year: 1967,
    image: "https://via.placeholder.com/150",
    downloadUrl: "https://example.com/book6.pdf",
  },
  {
    id: 7,
    title: "Ulises",
    author: "James Joyce",
    year: 1922,
    image: "https://via.placeholder.com/150",
    downloadUrl: "https://example.com/book7.pdf",
  },
  {
    id: 8,
    title: "La Odisea",
    author: "Homero",
    year: "Siglo VIII a.C.",
    image: "https://via.placeholder.com/150",
    downloadUrl: "https://example.com/book8.pdf",
  },
];
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
