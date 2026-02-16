import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline"

function NoteCard({ note, onEdit, onDelete }) {
  return (
    <div className="flex h-full rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-200 overflow-hidden">
      
  <div className="w-1 bg-blue-600"></div>
      <div className="bg-white flex-1 p-6 flex flex-col justify-between">
       
        <div>
          <h3 className="text-xl font-bold text-gray-900 truncate">
            {note.title}
          </h3>

        <p className="text-gray-700 mt-3 line-clamp-4 text-sm leading-relaxed">
            {note.content}
          </p>

          {note.category && (
            <span className="inline-block mt-4 px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 rounded-full">
              {note.category}
            </span>
          )}
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={() => onEdit(note)}
            className="text-blue-600 hover:text-blue-800 transition"
            title="Edit"
          >   <PencilIcon className="w-5 h-5" />
          </button>

          <button
    onClick={() => onDelete(note._id)}
            className="text-red-500 hover:text-red-700 transition"
            title="Delete"
          >
            <TrashIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default NoteCard