import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
             <span className='sidebarTitle'>Beyond The Canvas Podcast</span>
             <ul className='sidebarListItem'>Spirituality
                <li className='sidebarListItem'>Life</li>
                <li className='sidebarListItem'>Sports</li>
                <li className='sidebarListItem'>Music</li>
                <li className='sidebarListItem'>Tech</li>
                <li className='sidebarListItem'>Art</li>
                <li className='sidebarListItem'>Self Improvemnt</li>
             </ul>
        </div>
        <div className="sidebarItem">
           <span className='sidebarTitle'>Follow Us</span>
           <div className="sidebarSocial">
          <a href="https://twitter.com/btcpodcast33">
            <i  className="TopIcon fa-brands fa-twitter"></i>
            </a> 
            <a href="https://instagram.com/beyond_the_canvas_33">
                    <i  className="TopIcon fa-brands fa-instagram"></i>

            </a>

            <a href="https://m.facebook.com/profile.php?id=61553200865355">
                    <i  className="TopIcon fa-brands fa-square-facebook"></i>

            </a>
           </div>

        </div>
    </div>
  )
}
