import { spaceMono } from '../utils/fonts';

export default function Home() {
  return (
    <div className="container" style={spaceMono.style}>
      <h1 className='title-section'>Card Product</h1>
      <div className="flex-row">
      <div className="card">
        <img src="https://source.unsplash.com/random/?shoes" alt="product" />
        <h2 className='card-title'>Sepatu Baru 2024</h2>
        <p className='card-body line-clam-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat vero eveniet officia error consectetur sapiente numquam. Laudantium minima nemo tenetur, voluptatum consequuntur hic consequatur quasi, ratione, perferendis ducimus provident odio.</p>
        <p className=''>Price: <b>$100</b></p>
      </div>
      <div className="card">
        <img src="https://source.unsplash.com/random/?watch" alt="product" />
        <h2 className='card-title'>Jam Tangan Baru 2024</h2>
        <p className='card-body line-clam-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat vero eveniet officia error consectetur sapiente numquam. Laudantium minima nemo tenetur, voluptatum consequuntur hic consequatur quasi, ratione, perferendis ducimus provident odio.</p>
        <p className=''>Price: <b>$100</b></p>
      </div>
      <div className="card">
        <img src="https://source.unsplash.com/random/?handphone" alt="product" />
        <h2 className='card-title'>Handphone Baru 2024</h2>
        <p className='card-body line-clam-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat vero eveniet officia error consectetur sapiente numquam. Laudantium minima nemo tenetur, voluptatum consequuntur hic consequatur quasi, ratione, perferendis ducimus provident odio.</p>
        <p className=''>Price: <b>$100</b></p>
      </div>
      <div className="card">
        <img src="https://source.unsplash.com/random/?laptop" alt="product" />
        <h2 className='card-title'>Laptop Baru 2024</h2>
        <p className='card-body line-clam-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat vero eveniet officia error consectetur sapiente numquam. Laudantium minima nemo tenetur, voluptatum consequuntur hic consequatur quasi, ratione, perferendis ducimus provident odio.</p>
        <p className=''>Price: <b>$100</b></p>
      </div>
      </div>
    </div>
  );
}
