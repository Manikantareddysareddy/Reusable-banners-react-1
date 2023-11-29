import './index.css'

const BannerProfile = props => {
  const {bannerDetails} = props
  const {id, headerText, description, className} = bannerDetails
  return (
    <li className={className}>
      <h1 className="heading">{headerText}</h1>
      <p className="desc">{description}</p>
      <button className="button"> Show More</button>
    </li>
  )
}
export default BannerProfile
