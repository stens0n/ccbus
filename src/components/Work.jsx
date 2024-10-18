import React from 'react';

const Work = () => {
  return (
    <section id='work' name='Work' className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Portfolio</h1>
        <div className="flex flex-wrap -m-4">
          
          {/* Portfolio Item 1 */}
          <div className="p-4 md:w-1/3">
            <div className="relative h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden group">
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={require('../assets/stensonprepphoto.png')} alt="Web Development" />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Restaurant</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Meal Prep</h1>
                <p className="leading-relaxed mb-3">Simple, modern design for quick meal selection. Easy navigation, vibrant photos, and mobile-friendly.</p>
              </div>
              {/* Hover Box with Link */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-2xl font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <a href="https://stensonprep.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Website
                </a>
              </div>
            </div>
          </div>

          {/* Portfolio Item 2 */}
          <div className="p-4 md:w-1/3">
            <div className="relative h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden group">
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="blog"/>
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Travel</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Premier Vacation</h1>
                <p className="leading-relaxed mb-3">Modern design for showcasing vacation packages. 
                Easy navigation, beautiful imagery, and a mobile-friendly layout.</p>
              </div>
              {/* Hover Box with Link */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-2xl font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <a href="https://stensonprep.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Website
                </a>
              </div>
            </div>
          </div>

          {/* Portfolio Item 3 */}
          <div className="p-4 md:w-1/3">
            <div className="relative h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden group">
              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/722x402" alt="blog"/>
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
              </div>
              {/* Hover Box with Link */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-2xl font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <a href="https://stensonprep.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Website
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Work;
