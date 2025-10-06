import React from 'react';
import Testimonials from '../components/soloProject/Testimonials';

export default function TestimonialsPage (){
    const [withImage, setWithImage] = React.useState(true);
    const [position, setPosition]   = React.useState("horizontal");
    const [show, setShow]           = React.useState({ withImage, position });

    function handleSubmit(e) {
    e.preventDefault();
    setShow({ withImage, position }); // simpan pilihan terakhir
  }
    return (
    <div className="testimonials-page">
      <h2>Testimonials</h2>

      <form className="testimonials-form" onSubmit={handleSubmit}>
        <label htmlFor="image">Include Image</label>
        <input
          id="image"
          type="checkbox"
          checked={withImage}
          onChange={(e) => setWithImage(e.target.checked)}
        />

        <label htmlFor="position">Position</label>
        <select
          id="position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        >
          <option value="horizontal">Horizontal</option>
          <option value="vertical">Vertical</option>
        </select>

        <button type="submit">Show</button>
      </form>

      <Testimonials
        withImage={show.withImage}
        position={show.position}
        quote="This is a great product! It changed the way I work and boosted my productivity."
        author="John Doe"
        title="CEO, Example Corp"
      />
    </div>
  );
}