import { Navbar } from 'components/navbar/Navbar';
import { Sidebar } from 'components/sidebar/Sidebar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import './newPage.scss';
import { useState } from 'react';

export const NewPage = ({ inputs, title }) => {
  const [file, setFile] = useState(null);

  // console.log("file", file);

  return (
    <div className="newPage">
      <Sidebar />
      <div className="newPageContainer">
        <Navbar />
        <div className="top">
          <h1 className="title">{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              className="image"
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt=""
            />
          </div>
          <div className="right">
            <form className="form">
              <div className="formInput">
                <label htmlFor="file">
                  Image <DriveFolderUploadIcon className="icon" />
                </label>
                <input
                  onChange={e => setFile(e.target.files[0])}
                  id="file"
                  type="file"
                  style={{ display: 'none' }}
                />
              </div>

              {inputs.map(input => (
                <div key={input.label} className="formInput">
                  <label htmlFor={input.label}>{input.label}</label>
                  <input
                    suggested={
                      input.type === 'password' ? 'current-password' : ''
                    }
                    id={input.label}
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}

              <button type="submit" className="submitButton">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
