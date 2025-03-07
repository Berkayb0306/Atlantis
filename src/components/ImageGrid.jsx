import PropTypes from "prop-types";


const ImageGrid = ({ images }) => {
  // Eğer `images` boş veya undefined ise, varsayılan resimleri kullan
  const defaultImages = [
    "https://via.placeholder.com/500x500/ffcccc?text=Big+Image",
    "https://via.placeholder.com/250x250/ccffcc?text=Small1",
    "https://via.placeholder.com/250x250/ccccff?text=Small2",
    "https://via.placeholder.com/250x250/ffccff?text=Small3",
    "https://via.placeholder.com/250x250/ffffcc?text=Small4",
  ];

  const imageList = images && images.length === 5 ? images : defaultImages;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 max-w-7xl mx-auto mb-12">
      {/* Soldaki Büyük Görsel */}
      <div className="col-span-2 row-span-2">
        <img
          src={imageList[0]}
          alt="Big"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Sağdaki 4 Küçük Görsel */}
      {imageList.slice(1).map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Small ${index + 1}`}
          className="w-full h-full object-cover rounded-lg"
        />
      ))}
    </div>
  );
};

ImageGrid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default ImageGrid;
