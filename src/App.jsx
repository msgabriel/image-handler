import './App.css';
import { DragAndDrop } from './DragAndDrop';
import { FormatSelect } from './FormatSelect';
import { ImageGrid } from './ImageGrid';
import { useImageConverter } from './use-image-converter';

function App() {
  const {
    images,
    format,
    setFormat,
    handleFileSelection,
    handleDownload,
  } = useImageConverter();

  const handleDragOver = (e) => e.preventDefault();

  return (
    <div className='mx-auto p-10 max-w-max'>
      <header className='py-6'>
        <h1 className='text-primary font-display'>image handler</h1>
        <p>convert your images locally and hassle-free</p>
      </header>
      <main className='grid grid-cols-1 gap-6 max-w-lg'>
        <DragAndDrop onDrop={handleFileSelection} onDragOver={handleDragOver} />
        <FormatSelect currentFormat={format} setFormat={setFormat} />
        <ImageGrid images={images} onDownload={handleDownload} />
      </main>
    </div>
  )
}

export default App
