function ImageColumn(props) {
    const { images } = props;
  
    return (
      <div class="col-sm-6 col-md px-sm-1">
        {images.map((img, index) => (
          <img
            key={index}
            className="img-fluid mb-2"
            src={img}
            alt={`img${index}`}
            width="100%"
          />
        ))}
      </div>
    );
  }
  
  function ImageGrid(props) {
    const { images } = props;
    const columns = makeArray(4);
  
    return (
      <div className="row px-sm-2">
        {columns.map(col => <ImageColumn key={col} images={shuffle(images)} />)}
      </div>
    );
  }
  
  function ImageGridContainer(props) {
    return (
      <div className="container-fluid">
        <div className="text-center my-4">
          <h2>Responsive Image Grid</h2>
          <p>Resize the browser window to see the responsive effect.</p>
        </div>
        <ImageGrid images={props.images} />
      </div>
    );
  }
  
  const images = [
    "https://images.pexels.com/photos/1496146/pexels-photo-1496146.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/707676/pexels-photo-707676.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/957626/pexels-photo-957626.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1010079/pexels-photo-1010079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1010519/pexels-photo-1010519.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/1115204/pexels-photo-1115204.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  ];
  
  function App() {
    return <ImageGridContainer images={images} />;
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));
  
  // Fisher–Yates shuffle
  function shuffle(arr) {
    let copy = [...arr];
    let m = copy.length,
      t,
      i;
  
    while (m) {
      i = Math.floor(Math.random() * m--);
  
      t = copy[m];
      copy[m] = copy[i];
      copy[i] = t;
    }
  
    return copy;
  }
  
  function makeArray(n) {
    return Array(n)
      .fill(0)
      .map((item, index) => index + 1);
  }
  