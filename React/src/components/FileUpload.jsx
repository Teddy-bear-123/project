import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import axios from "axios";
import PropTypes from "prop-types";

// Register the plugins
registerPlugin(FilePondPluginFileValidateType, FilePondPluginImagePreview);

const FileUpload = ({ setFiles }) => {
	// Function to handle file upload
	const handleFileUpload = (fileItems) => {
		const token = localStorage.getItem("authToken"); // Retrieve JWT token from localStorage

		const formData = new FormData();
		fileItems.forEach((fileItem) => {
			formData.append("files", fileItem.file);
		});

		axios
			.post("http://localhost:8000/api/files/", formData, {
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-Type": "multipart/form-data",
				},
			})
			.then((response) => {
				console.log("File upload successful:", response.data);
				// Optionally update state or notify user of successful upload
			})
			.catch((error) => {
				console.error("Error uploading file:", error);
				// Handle error (notify user or retry)
			});
	};

	return (
		<FilePond
			allowMultiple={true}
			maxFiles={10}
			onupdatefiles={(fileItems) => {
				setFiles(
					fileItems.map((fileItem) => ({
						id: fileItem.id,
						filename: fileItem.file.name,
						fileType: fileItem.file.type,
						...fileItem,
					})),
				);
				handleFileUpload(fileItems); // Call handleFileUpload when files are updated
			}}
			name="files"
			server={{
				process: (fieldName, file, metadata, load, error, progress, abort) => {
					// You can handle file upload process here if needed
				},
				revert: (uniqueFileId, load, error) => {
					// You can handle file revert process here if needed
				},
			}}
			labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
		/>
	);
};

FileUpload.propTypes = {
	setFiles: PropTypes.func.isRequired,
};

export default FileUpload;
