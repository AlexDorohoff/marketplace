import React, { createRef, useState, useEffect } from 'react';
// import { FaPencilAlt } from 'react-icons/fa';
import { MdAddCircleOutline } from 'react-icons/md';
import Carousel from '../../Site/Carousel/CarouselBase';
import './styles.scss';

const settings = {
  dots: false,
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  margin: 0,
};

export default function DocsBrowser({ title, files, value, index, programm, setProgramm, setFieldValue }) {
  const [upFiles, setUpFiles] = useState([]);

  useEffect(() => {
    if (value) setUpFiles(value)
  }, []);

  let refPopup = createRef();

  const handleClickNew = () => {
    refPopup.click()
  };
  
  const materialsArr = programm ? programm[index].materials : [];

  const setFieldDocuments = (f) => {
    if (title === 'Документы') {
      setFieldValue('documents', f)
    }
  };

  const handleDeleteFile = (id) => {
    const newUpFiles = upFiles.filter(item => item.id !== id);
    setUpFiles(newUpFiles);
    setFieldDocuments(newUpFiles);
  };

  const handleChangeImage = e => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => {
      const f = [...upFiles];
      f.push({ id: upFiles.length, img: reader.result });
      if (programm) {
        materialsArr.push(reader.result);
        const newProgramm = programm;
        newProgramm[index] = {...newProgramm[index], materials: materialsArr};
        setProgramm(newProgramm);
        setFieldValue('programm', programm);
      }
      setUpFiles(f);
      setFieldDocuments(f);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="docs-browser">
      <h2 className="docs-browser-title">
        {title}
        <div className="docs-browser-controls">
          {/* <FaPencilAlt size="30px" onClick={handleClickNew} /> */}
          <input
            ref={popup => {
              refPopup = popup;
            }}
            type="file"
            style={{ display: 'none' }}
            onChange={handleChangeImage}
          />

          {/* <Link pseudo><img src={Eye} alt="" /></Link> */}
        </div>
      </h2>
      <div className="docs-browser-carousel-wrapper">
        <MdAddCircleOutline
          size="50px"
          style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '1',
            color: '#979797',
            cursor: 'pointer' 
          }}
          onClick={handleClickNew}
        />
        <Carousel settings={settings} className="docs-browser-carousel">
          {upFiles.length > 0 ?  
            upFiles.map(item =>
              <img
                key={item.id} 
                src={item.img}
                title='9999'
                alt=""
                onClick={() => handleDeleteFile(item.id)}
              />)
          : files.map(item => <img key={item.id} src={item.img} title='2222' alt="" />)}
        </Carousel>
      </div>
    </div>
  );
}
