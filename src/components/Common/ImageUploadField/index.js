import React, { Component } from 'react';
import Type from 'prop-types';
import IconButton from 'arui-feather/icon-button';
import { MdAddCircleOutline } from 'react-icons/md';
import './styles.scss';

class ImageUploadField extends Component {
  static propTypes = {
    name: Type.string.isRequired,
    descr: Type.string.isRequired,
    onChange: Type.func.isRequired,
  };

  state = {
    imagePreviewUrl: '',
    idButton: `buttonNew_${this.props.name || ''}`,
  };

  componentDidMount() {
    if (this.props.imageUrl) {
      this.setState({ imagePreviewUrl: this.props.imageUrl });
    }
  }

  handleClickNew = () => {
    const newImageInput = document.getElementById(this.state.idButton);
    newImageInput.click();
  };

  handleChangeImage = e => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({ imagePreviewUrl: reader.result }, () => {
        if (this.props.onChange) this.props.onChange({encodedUrl:reader.result, file});
      });
    };
    reader.readAsDataURL(file);
  };

  render() {
    const { imagePreviewUrl, idButton } = this.state;

    return (
      <>
        <div className="image-upload-field">
          <div className="image-upload-field-label">{this.props.descr}</div>
          <div className="image-upload-field-wrapper">
            <div className="image-upload-field-preview">
              {!!imagePreviewUrl && <img src={imagePreviewUrl} alt="" />}
            </div>
            <IconButton size="xl" onClick={this.handleClickNew}>
              <MdAddCircleOutline size="50px" style={{ color: '#979797' }} />
            </IconButton>
          </div>
          <input
            id={idButton}
            name={idButton}
            type="file"
            style={{ display: 'none' }}
            onChange={this.handleChangeImage}
          />
        </div>
      </>
    );
  }
}

export default ImageUploadField;
