import "./posts.css";

export default function Posts() {
  return (
    <div className="posts-container">
      <div className="thumbnail-area-box-container">
        <div className="thumbnail-area-box">
          <div className="thumbnail-area">
            <div className="thumbnail">
              <img  className='podcast-img'alt="Podcast Thumbnail">

              </img>
            </div>
          </div>
        </div>
      </div>
      <div className="posts-title-box">
        <div className="posts-title">PODCAST TITLE</div>
      </div>
      <div className="subheading-box">
        <div className="subheading">
          Subheading
          <div className="text-area-box-container">
            <div className="text-area-box">
              <div className="text-area">
                <div className="text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Impedit mollitia, ex vel minus rerum inventore magni ea. Ad et
                  alias suscipit voluptatibus est vero culpa, ea non incidunt
                  perferendis nihil deleniti id beatae nulla reiciendis
                  inventore pariatur placeat assumenda dolorem ratione nobis,
                  modi dolorum quaerat?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
