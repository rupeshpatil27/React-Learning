import { useState, useRef } from 'react';
import { FaPlus, FaUpload, FaTrashAlt} from 'react-icons/fa';

function FileUpload() {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const inputRef = useRef(null);

  return (
    <div className="flex flex-col gap-4 p-5">
      <div className="flex gap-3">
        <FileInput
          inputRef={inputRef}
          disabled={uploading}
        />
        <ActionButtons
          disabled={files.length === 0 || uploading}
        />
      </div>
    </div>
  );
}

function FileInput({ inputRef, disabled}) {
  return (
    <>
      <input
        type="file"
        ref={inputRef}
        multiple
        className="hidden"
        id="file-upload"
        disabled={disabled}
      />
      <label
        htmlFor="file-upload"
        className="flex cursor-pointer items-center gap-2 rounded-md bg-gray-700 px-6 py-2 hover:opacity-90"
      >
        <FaPlus size={18} />
        Select Files
      </label>
    </>
  );
}

function ActionButtons({disabled}) {
  return (
    <>
      <button
        disabled={disabled}
        className="flex items-center gap-2"
      >
        <FaUpload size={18} />
        Upload
      </button>
      <button
        className="flex items-center gap-2"
        disabled={disabled}
      >
        <FaTrashAlt size={18} />
        Clear All
      </button>
    </>
  );
}

export default FileUpload;
