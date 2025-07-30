import React, { useEffect } from 'react';

const genders = [
  { label: 'Kadın', image: 'https://dfcdn.defacto.com.tr/Mobile/kadin-1437x2154_fdf8bb70-a56a-4664-ae51-c1aed962d88e_af563d82-0422-4238-a80b-d2d5086bd3b2_DI_316.jpg' },
  { label: 'Erkek', image: 'https://dfcdn.defacto.com.tr/Mobile/erkek-1437x2154_9b9f203c-f9ee-45bc-a514-1f09b0d1984d_4b962855-e7ac-45c0-a609-98991ad45baf_DI_316.jpg' },
  { label: 'Çocuk', image: 'https://dfcdn.defacto.com.tr/Mobile/cocuk-1437x2154_c7880622-0208-49b6-a4ae-ed330b5e72c3_ee68dc78-f311-4a43-90b2-3c6d12776804_DI_316.jpg' },
];

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const cardStyle = {
  flex: '0 0 33.3333333333%',
  maxWidth: '33.3333333333%',
  minHeight: 'unset',
};

const imageStyle = {
  height: '100%',
  objectFit: 'cover',
  width:'100%',
  maxWidth:'700px'

};

const labelBoxStyle = {
  position: 'absolute',
  bottom: '40%',
  transform: 'translateX(-50%)',
  backgroundColor: 'white',
  color: 'black',
  border: '1px solid black',
  padding: '10px 20px',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  textTransform: 'uppercase',
  marginLeft:'300px'
};

const Widget = () => {
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.fontFamily = 'Arial, sans-serif';
    document.body.style.backgroundColor = '#f5f5f5';
    // istediğin diğer stiller
  }, []);
  return (
    <div style={containerStyle}>
      {genders.map((gender, index) => (
        <div key={index} style={cardStyle}>
          <img src={gender.image} alt={gender.label} style={imageStyle} />
          <div style={labelBoxStyle}>{gender.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Widget;
