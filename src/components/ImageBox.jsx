const ImageBox = ({ position }) => {
  return (
    <img
      src="/elipse-star-right-side.png"
      alt="decorative star ellipse"
      className={`absolute ${position} w-auto h-auto object-contain pointer-events-none z-100 hidden sm:hidden md:block`}
    />
  );
};

export default ImageBox;
