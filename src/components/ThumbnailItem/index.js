import './index.css'

const ThumbnailItem = props => {
  const {thumbnail, changeImage, isActive} = props
  const {imageUrl, imageAltText, thumbnailUrl, thumbnailAltText} = thumbnail

  const onClickThumbnail = () => {
    changeImage(imageUrl, imageAltText)
  }

  const isThumbnailActive = isActive ? '' : 'non-active-btn'
  return (
    <li className="thumbnail-image">
      <button
        type="button"
        className={`btn ${isThumbnailActive}`}
        onClick={onClickThumbnail}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} className="thumbnail" />
      </button>
    </li>
  )
}

export default ThumbnailItem
