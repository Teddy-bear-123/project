import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import PropTypes from 'prop-types';


// Register the plugins
registerPlugin(FilePondPluginFileValidateType, FilePondPluginImagePreview);

const FileUpload = ({ files, setFiles }) => {
  return (
    <FilePond
      files={files}
      onupdatefiles={fileItems => {
        setFiles(fileItems.map(fileItem => ({
          id: fileItem.id,
          filename: fileItem.file.name,
          fileType: fileItem.file.type,
          ...fileItem
        })));
      }}
      allowMultiple={true}
      maxFiles={10}
      server="/api" // Configure your server endpoint
      name="files"
      labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
    />
  );
};

FileUpload.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      filename: PropTypes.string.isRequired,
      fileType: PropTypes.string.isRequired,
    })
  ).isRequired,
  setFiles: PropTypes.func.isRequired,
};

export default FileUpload;

