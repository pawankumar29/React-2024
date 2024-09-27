
const Sidebar=({option,optionSelected})=>{
    return(
        <div classNameName="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{width:"180px",height:"775px"}}>
    <a href="/" classNameName="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg classNameName="bi pe-none me-2" style={{width:"40", height:"32"}} ><use xlinkHref="#bootstrap"></use></svg>
      <span classNameName="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul classNameName="nav nav-pills flex-column mb-auto">
      <li classNameName="nav-item" onClick={()=>optionSelected("home")}>
        <a href="#" classNameName={`nav-link ${option==="home"&&"active"} text-white`} aria-current="page" >
          <svg classNameName="bi pe-none me-2"  style={{width:"16", height:"16"}}><use xlinkHref="#home"></use></svg>
          Home
        </a>
      </li>
      <li onClick={()=>optionSelected("form")}>
        <a href="#" classNameName={`nav-link ${option==="form"&&"active"} text-white`}  >
    <svg classNameName="bi pe-none me-2" style={{width:"16", height:"16" ,textAlign:"center"}}><use xlinkHref="#speedometer2"></use></svg>
    Create Post
        </a>
      </li>
    </ul>
    <hr/>
 
  </div>
    )
}


export default Sidebar;