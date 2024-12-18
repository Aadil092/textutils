import React  from 'react'

export default function About(props) {

  // const [mystyle, setMyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white'
  // })

  let mystyle = {
     color: props.mode ==='dark'?'white':'black',
     backgroundColor: props.mode ==='dark'?'grey':'white'
    
  }
  

  return (
    <div className="container">
      <h1 className='my-3' style={{color: props.mode ==='dark'?'white':'black'}}>About Us </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" style={mystyle}>
            <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><strong> Analyze the Text</strong></button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
               TextUtills gives a way to  Analyze your text quikly and efficientliy.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" style={mystyle}>
            <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
              This is a free of coast app.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={mystyle}>
          <h2 className="accordion-header" style={mystyle}>
            <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Browser Compatiblity</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
              Browser Support.
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
