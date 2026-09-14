<template>
  <div>
    <h1>First 3 Books with ISBN > 1000 (Ascending)</h1>
    <ul>
      <li v-for="book in books" :key="book.id">
        {{ book.name }} (ISBN: {{ book.isbn }})

        <button @click="updateBook(book)">Update</button>
        <button @click="deleteBook(book)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import db from '../firebase/init.js';
import { collection, query, where, getDocs, doc, updateDoc, deleteDoc, orderBy, limit } from 'firebase/firestore';

const books = ref([]);

const fetchBooks = async () => {
  try {
    const q = query(collection(db, 'books'),
                    where('isbn', '>', 1000),
                    orderBy('isbn', 'asc'),
                    limit(3));
    const querySnapshot = await getDocs(q);
    const booksArray = [];
    querySnapshot.forEach((doc) => {
      booksArray.push({ id: doc.id, ...doc.data() });
    });
    books.value = booksArray;
  } catch (error) {
    console.error('Error fetching books: ', error);
  }
};

const updateBook = async (book) => {
  const newName = prompt('Enter the new book name:', book.name)

  if (newName === null || newName.trim() === '') {
    return
  }

  const newIsbnInput = prompt('Enter the new ISBN:', book.isbn)

  if (newIsbnInput === null) {
    return
  }

  const newIsbn = Number(newIsbnInput)

  if (isNaN(newIsbn)) {
    alert('Please enter a valid ISBN number.')
    return
  }

  try {
    const bookReference = doc(db, 'books', book.id)

    await updateDoc(bookReference, {
      name: newName.trim(),
      isbn: newIsbn
    })

    await fetchBooks()

    alert('Book updated successfully!')
  } catch (error) {
    console.error('Error updating book: ', error)
    alert('Error updating book: ' + error.message)
  }
}

const deleteBook = async (book) => {
  const confirmed = confirm(
    `Are you sure you want to delete "${book.name}"?`
  )

  if (!confirmed) {
    return
  }

  try {
    const bookReference = doc(db, 'books', book.id)

    await deleteDoc(bookReference)

    await fetchBooks()

    alert('Book deleted successfully!')
  } catch (error) {
    console.error('Error deleting book: ', error)
    alert('Error deleting book: ' + error.message)
  }
}

defineExpose({
  fetchBooks
});

onMounted(() => {
  fetchBooks();
})
</script>
