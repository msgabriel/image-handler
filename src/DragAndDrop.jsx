export function DragAndDrop({ onDrop, onDragOver }) {
  return (
    <div
      className="flex flex-col items-center border-dashed border-2 border-secondary rounded-lg px-20 py-10 gap-5 relative"
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16"><g fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="#cad3f5" d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1" /><path stroke="#a6da95" d="M14.5 15.5 11 12l-2.5 2.5" /><path stroke="#7dc4e4" d="M9.5 8.5h4.997a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H9.5a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1" /><circle cx="13.5" cy="10.5" r=".5" stroke="#eed49f" /></g></svg>
      <p>drag and drop your images here <br />
        or <label htmlFor="fileInput" className="text-primary underline cursor-pointer">
          click to browse</label>
      </p>
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        multiple
        onChange={onDrop}
        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
      />
    </div>
  )
}