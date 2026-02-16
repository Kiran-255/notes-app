import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getNotes, createNote, updateNote, deleteNote } from "../services/noteService"
import NoteCard from "../components/NoteCard"
import NoteForm from "../components/NoteForm"

function Home() {
  const navigate = useNavigate()

  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingNote, setEditingNote] = useState(null)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (!token) {
      navigate("/login")
      return
    }

    const fetchNotes = async () => {
      setLoading(true)

      try {
        const data = await getNotes(token)

        if (Array.isArray(data)) {
          setNotes(data)
        } else {
          console.log("Auth error:", data)
          localStorage.removeItem("token")
          navigate("/login")
        }
      } catch (err) {
        console.log("Fetch error:", err)
        navigate("/login")
      }

      setLoading(false)
    }

    fetchNotes()
  }, [navigate])

  const handleSave = async (noteData) => {
    const token = localStorage.getItem("token")
    if (!token) return navigate("/login")

    if (editingNote) {
      await updateNote(editingNote._id, noteData, token)
      setEditingNote(null)
    } else {
      await createNote(noteData, token)
    }

    setShowForm(false)
    const updatedNotes = await getNotes(token)
    if (Array.isArray(updatedNotes)) setNotes(updatedNotes)
  }

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token")
    if (!token) return navigate("/login")

    await deleteNote(id, token)
    const updatedNotes = await getNotes(token)
    if (Array.isArray(updatedNotes)) setNotes(updatedNotes)
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <div className="min-h-screen bg-blue-50 flex">
      <aside className="w-64 bg-blue-800 shadow-xl p-6 hidden md:flex flex-col">
        <h2 className="text-2xl font-bold mb-10 text-gray-200">Notes Dashboard</h2>

        <button
          onClick={() => {
            setShowForm(true)
            setEditingNote(null)
          }}
          className="bg-white text-gray-800 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
        >
          + New Note
        </button>

        <div className="mt-auto">
          <button
            onClick={handleLogout}
            className="text-gray-800 bg-gray-300 w-full font-bold hover:bg-gray-400 hover:text-white transition-all duration-200 py-3 rounded-xl shadow-sm"
          >
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 p-6 md:p-10">
        
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">My Notes</h1>
            <p className="text-gray-500 text-sm mt-1 mb-5">
              Organize and manage your notes efficiently
            </p>
          </div>
          <span className="text-gray-500 text-medium">
            {notes.length} {notes.length === 1 ? "Note" : "Notes"}
          </span>
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <NoteForm
              noteToEdit={editingNote}
             onSave={handleSave}
              onCancel={() => setShowForm(false)}
            />
          </div>
        )}

     {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : notes.length === 0 ? (
          <div className="text-center text-gray-500 mt-20">
            <p className="text-xl">No notes yet</p>
            <p className="text-sm mt-2">Create your first note to get started</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {notes.map((note) => (
              <NoteCard
            key={note._id}
                note={note}
                onEdit={(note) => {
                  setEditingNote(note)
                  setShowForm(true)
                }}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default Home