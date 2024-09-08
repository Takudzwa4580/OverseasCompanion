import React from "react";
function Step3Component() {
  return (
    <div className="pt-3  d-flex flex-column justify-content-center align-items-center">
     
  
  <div className=" col-8 card shadow my-3 p-2">
          <div className="card-body d-flex flex-column justify-content-evenly">
          <h3>Admission Particulars</h3>
          <p >
        Please provide your educational background information accurately to facilitate
        the admission process.
      </p>

      
            <div className=" mb-3 row">
                  <div className="col text-start">
                    <label>Previous Level of Study</label>
                    <select class="form-select" aria-label="Default select example">
                    <option selected>Select Level of Study</option>
                    <option value="1">Secondary School</option>
                    <option value="2">High/AS/Advanced Level</option>
                    <option value="2">Undergraduate</option>
                    <option value="2">Postgraduate</option>
                  </select>
                  </div>

                <div className="col text-start">
                  <label>Country Acquired</label>
                  <input type="text" className="form-control"  name="Lastname"/>
                </div>
            </div>

            <div className=" mb-3 text-start">
              <label> Program Applied For</label>
            <input type="email" className="form-control" name="email"/>
            </div>
             
             <div className="mb-3 row">
                <div className=" col text-start">
                  <label>Alternative: 1</label>
                  <input type="text" className="form-control" name="email"/>
                </div>
                <div className="col text-start">
                  <label>Alternative: 2</label>
                  <input type="text" className="form-control"  name="Lastname"/>
                </div>  
            </div>
            <div className="mt-3 row">
                  <div className="col text-start">
                    <label>Preferred Destination</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Select Destination</option>
                            <option value="1">India</option>
                            <option value="2">China</option>
                            <option value="2">Germany</option>
                        </select>
                  </div>

                <div className="col text-start">
                  <label>Alternative Destination</label>
                   <select class="form-select" aria-label="Default select example">
                            <option selected>Select Alternative Destination</option>
                            <option value="1">India</option>
                            <option value="2">China</option>
                            <option value="2">Germany</option>
                    </select>
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

export default Step3Component;
