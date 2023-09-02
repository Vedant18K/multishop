import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';


export default function MapComponent() {
    // Construct the URL with parameters using a URLSearchParams object
    // const params = new URLSearchParams({
    //     pb: '!1m18!1m12!1m3!1d115681.29592731265!2d-77.47713270775661!3d25.0326996781907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x892f7c99b981dbc9%3A0x2aef01d3485e50d2!2sNassau%2C%20Bahamy!5e0!3m2!1spl!2spl!4v1624445118063!5m2!1spl!2spl',
    //     hl: 'en', // Specify English as the language
    // });

    return (
        <MDBRow className='w-100'>
      <MDBCol className='my-4'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4622625.996241788!2d77.20902124616695!3d20.59368420699252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f843d9d7f2c51%3A0x52f2adfc4e48f1e5!2sIndia!5e0!3m2!1sen!2sus!4v1628992663035!5m2!1sen!2sus'
          className='w-100'
          height='350'
          loading='lazy'
          title='Google Map of India'
          allowFullScreen=''
          frameBorder='0'
          style={{ border: '0' }}
        ></iframe>
      </MDBCol>
    </MDBRow>
    );
}

