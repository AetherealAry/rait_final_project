import React from 'react'
import SingleFact from './SingleFact'

const FunFacts = () => {

    const funfacts = {
        funfact1: {
            icon:'icofont-home',
            counter:3468,
            content:'Hospital Rooms'
        },
        funfact2: {
            icon:'icofont-user-alt-3',
            counter:557,
            content:'Specialist Doctors'
        },
        funfact3: {
            icon:'icofont-simple-smile',
            counter:4379,
            content:'Happy Patients'
        },
        funfact4: {
            icon:'icofont-table',
            counter:32,
            content:'Years of Experience'
        }
    }
  return (
    <>
    <div id="fun-facts" className="fun-facts section overlay">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-12">
          {/* Start Single Fun */}
          {/* <div className="single-fun">
            <i className="icofont icofont-home" />
            <div className="content">
              <span className="counter">3468</span>
              <p>Hospital Rooms</p>
            </div>
          </div> */}
          {/* For Layout Reference */}
          <SingleFact funfacts={funfacts.funfact1}/>
          {/* End Single Fun */}
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          {/* Start Single Fun */}
          <SingleFact funfacts={funfacts.funfact2}/>
          {/* End Single Fun */}
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          {/* Start Single Fun */}
          <SingleFact funfacts={funfacts.funfact3}/>
          {/* End Single Fun */}
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          {/* Start Single Fun */}
          <SingleFact funfacts={funfacts.funfact4}/>
          {/* End Single Fun */}
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default FunFacts
