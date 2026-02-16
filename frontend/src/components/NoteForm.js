import { useState, useEffect } from "react"

function NoteForm({ noteToEdit, onSave, onCancel }) {
  const [noteData, setNoteData] = useState({
    title: "",
    content: "",
    category: "",
  })

  useEffect(() => {
    if (noteToEdit) setNoteData(noteToEdit)
  }, [noteToEdit])
  const handleChange = (e) => {
    setNoteData({ ...noteData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
 onSave(noteData)
    setNoteData({ title: "", content: "", category: "" })
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-10 max-w-2xl">

      <h2 className="text-2xl font-bold mb-6 text-gray-900">
        {noteToEdit ? "Edit Note" : "Create New Note"}
      </h2>

    <form onSubmit={handleSubmit} className="space-y-5">
        <input
     type="text"
          name="title"
          placeholder="Note title"
          value={noteData.title}
          onChange={handleChange}
          className="w-full bg-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <textarea
  name="content"
          placeholder="Write your note..."
        value={noteData.content}
          onChange={handleChange}
          rows="5"
          className="w-full bg-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
     type="text"
          name="category"
          placeholder="Category (optional)"
          value={noteData.category}
          onChange={handleChange}
          className="w-full bg-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex gap-4 pt-2">
          <button
          type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
       {noteToEdit ? "Update" : "Save"}
          </button>

 <button
            type="button"
            onClick={onCancel}
            className="bg-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-400 transition"
          >
     Cancel
          </button>
        </div>

      </form>
    </div>
  )
}

export default NoteForm