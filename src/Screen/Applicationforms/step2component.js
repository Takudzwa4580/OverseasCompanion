import React from "react";
function Step2Component() {
  return (
    <div className="pt-3  d-flex flex-column justify-content-center align-items-center">
     
  
  <div className=" col-8 card shadow my-3 p-2">
          <div className="card-body d-flex flex-column justify-content-evenly">
          <h3>Contact Details</h3>
          <p >
        Please provide your contact details accurately to facilitate
        the admission process.
      </p>

      
            <div className=" mb-3 row">
                  <div className="col text-start">
                    <label>Phone Number</label>
                    <input type="number" className="form-control"  name="Firstname"/>
                  </div>

                <div className="col text-start">
                  <label>Guardian/Parent Phone Number</label>
                  <input type="number" className="form-control"  name="Lastname"/>
                </div>
            </div>

            <div className=" mb-3 text-start">
              <label> Home Address</label>
            <input type="text" className="form-control" name="email"/>
            </div>
             
             <div className="mb-3 row">
                <div className=" col text-start">
                  <label>Country</label>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Select Your Country</option>
                    <option value="1">Zimbabwe</option>
                    <option value="2">Zambia</option>
                    <option value="2">Malawi</option>
                    <option value="2">South Africa</option>
                    <option value="2">Tanzania</option>
                    <option value="2">Namibia</option>
                    <option value="2">Lesotho</option>
                    <option value="2">Mozambique</option>
                    <option value="2">Botswana</option>
                    <option value="2">South Sudan</option>
                    <option value="2">Nigeria</option>
                    <option value="2">Ghana</option>
                    <option value="2">Ivory Coast</option>
                    <option value="2">Cameroon</option>
                    <option value="2">Liberia</option>
                    <option value="2">Uganda</option>
                    <option value="2">Gambia</option>
                  </select>
                </div>
                <div className="col text-start">
                  <label>Postal Code</label>
                  <input type="Number" className="form-control"  name="postal"/>
                </div>  
            </div>
            <div className="mt-3 row">
                  <div className="col text-start">
                    <label>State/Province</label>
                    <input type="text" className="form-control"  name="Firstname"/>
                  </div>

                <div className="col text-start">
                  <label>City</label>
                  <input type="text" className="form-control"  name="Lastname"/>
                </div>
            </div>
            <p className="">
            <span className="text-danger"> Disclaimer:</span> All information provided will be kept confidential and used solely
              for admission purposes.
            </p>
      </div>

  </div>
    
     
    </div>
  );
}

export default Step2Component;
