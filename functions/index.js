const { onRequest } = require('firebase-functions/v2/https')
const admin = require('firebase-admin')
const cors = require('cors')({ origin: true })
const { onDocumentCreated } = require('firebase-functions/v2/firestore')

admin.initializeApp()

exports.countBooks = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const snapshot = await admin.firestore().collection('books').get()
      res.status(200).json({ count: snapshot.size })
    } catch (error) {
      console.error('Error counting books:', error)
      res.status(500).send('Error counting books')
    }
  })
})

exports.capitalizeBook = onDocumentCreated('books/{bookId}', async (event) => {
  const snapshot = event.data
  if (!snapshot) return

  const name = snapshot.get('name')
  if (typeof name !== 'string') return

  const uppercaseName = name.toUpperCase()
  if (name !== uppercaseName) {
    await snapshot.ref.update({ name: uppercaseName })
  }
})

exports.getAllBooks = onRequest(
  {
    region: 'us-central1',
    cors: true,
  },
  async (req, res) => {
    try {
      const snapshot = await admin.firestore().collection('books').get()

      const books = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))

      res.status(200).json(books)
    } catch (err) {
      console.error(err)
      res.status(500).json({
        error: 'Error fetching books',
      })
    }
  },
)
