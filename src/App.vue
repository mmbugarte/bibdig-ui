<script setup lang="ts">
import { ref, onMounted } from "vue";
import LibroCard from "./components/LibroCard.vue";
import { Libro, StrapiObject } from "./models/Libro";

const libros = ref<StrapiObject<Libro>[]>([]);

const fetchData = async () => {
  try {
    const res = await fetch("/api/libros?populate=portada,descarga");
    const json = await res.json();
    libros.value = json.data;
    console.log("libros", libros.value);
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
        <LibroCard :libro="libro" />
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
