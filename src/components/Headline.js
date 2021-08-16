import React from 'react'
import styled from 'styled-components'
import {MdMyLocation} from 'react-icons/md'
import {FaAngleDown} from 'react-icons/fa'

function Headline() {
    return (
        <div>
        <div className="container mt-4">
        <div className="row">
          <h className="d-flex justify-content-center">Search and look appointment</h>
          <div className="col-4">
            Locations
            <MdMyLocation className="" color="lightblue" size="1rem" />
          </div>
          <div className="col-4">
            Select Specialities
            <FaAngleDown className=""  size="1rem" />
          </div>
          <div className="col-4">
            Select Insurance
            <FaAngleDown size="1rem" />
          </div>
        </div>

        <button type="button" className="btn btn-dark">Search</button>
    </div>
    </div>
        
    )
}

export default Headline;
