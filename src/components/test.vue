<template>
  <div id="app">
<img src="../assets/images/vank.PNG" alt="">

    <p>this is awesome</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
   
    };
  },
};
</script>






<!-- <template>
  <div>
    <h1 class="text-blue-300">Home Page</h1>
    <div v-if="quotes && quotes.length > 0">
      <div v-for="quote in quotes" :key="quote._id" class="quote flex gap-5">
        <h2>{{ quote.author }}</h2>
        <p>{{ quote.content }}</p>
        <p><strong>Author Slug:</strong> {{ quote.authorSlug }}</p>
        <p><strong>Date Added:</strong> {{ new Date(quote.dateAdded).toLocaleDateString() }}</p>
        <p><strong>Date Modified:</strong> {{ new Date(quote.dateModified).toLocaleDateString() }}</p>
        <hr />
      </div>
    </div>
    <div v-else>
      <p v-if="error">{{ error }}</p>
      <p v-else>Loading quotes...</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      quotes: [], // Store fetched quotes
      error: null, // For error handling
    };
  },
  async mounted() {
    try {
      const response = await axios.get('http://api.quotable.io/quotes');
      this.quotes = response.data.results;
    } catch (error) {
      console.error('Error fetching data:', error);
      this.error = 'Failed to load quotes. Please try again later.';
    }
  },
  name: 'About',
};
</script> -->
