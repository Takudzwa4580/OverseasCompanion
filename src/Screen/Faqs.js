import Navbar from "./Navbar";

function Faqs({ Toggle }) {
  return (
    <>
      <Navbar Toggle={Toggle} />

      <div className=" d-flex justify-content-center align-items-center vh-100">
        <div className=" col-10 text-center ">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item  border mb-3">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  What success stories or testimonials can you share from past
                  clients?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  We have numerous success stories and testimonials from
                  satisfied clients who have achieved their educational and
                  career goals with our assistance. You can find some of these
                  testimonials on our website or request more information during
                  your consultation.
                </div>
              </div>
            </div>

            <div class="accordion-item  border mb-3 ">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Is Overseas Companion only for students, or can working
                  professionals benefit from your services too?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Our services are not limited to students; working
                  professionals seeking further education, career advancement,
                  or skill development can also benefit from our expertise. We
                  provide tailored support to meet the unique needs of
                  professionals at all career stages.
                </div>
              </div>
            </div>

            <div class="accordion-item  border mb-3">
              <h2 class="accordion-header" id="flush-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  How long does the application process take, and when should I
                  start?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  The application timeline varies depending on the program and
                  institution you're interested in. Generally, we recommend
                  starting the application process at least 3-6 months before
                  the desired enrollment date. However, we can assist with
                  expedited timelines if necessary.
                </div>
              </div>
            </div>

            <div class="accordion-item  border mb-3">
              <h2 class="accordion-header" id="flush-headingFour">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  Do I need to visit your office in person, or can I receive
                  services online?
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  We offer both in-person and online consultations to
                  accommodate your preferences and needs. Many of our services
                  can be provided remotely, making it convenient for clients
                  worldwide to access our expertise.
                </div>
              </div>
            </div>

            <div class="accordion-item  border mb-3">
              <h2 class="accordion-header" id="flush-headingFive">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  What sets Overseas Companion apart from other educational
                  consultancy services?
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingFive"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  What distinguishes us is our personalized approach, global
                  network of educational institutions, expert team, and
                  dedication to excellence. We focus on your unique needs and
                  goals, providing tailored guidance and support throughout your
                  educational journey.
                </div>
              </div>
            </div>

            <div class="accordion-item  border mb-3">
              <h2 class="accordion-header" id="flush-headingSix">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSix"
                  aria-expanded="false"
                  aria-controls="flush-collapseSix"
                >
                  Can Overseas Companion help me find scholarships and financial
                  aid?
                </button>
              </h2>
              <div
                id="flush-collapseSix"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingSix"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Absolutely! We have extensive experience in researching and
                  applying for scholarships and financial aid opportunities. Our
                  team will work with you to identify suitable scholarships and
                  guide you through the application process to maximize your
                  chances of securing funding.
                </div>
              </div>
            </div>

            <div class="accordion-item  border mb-3">
              <h2 class="accordion-header" id="flush-headingSeven">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSeven"
                  aria-expanded="false"
                  aria-controls="flush-collapseSeven"
                >
                  How do I get started with Overseas Companion?
                </button>
              </h2>
              <div
                id="flush-collapseSeven"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingSeven"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Getting started with us is easy! Simply contact our team
                  through the provided contact information, and one of our
                  consultants will schedule an initial consultation. During this
                  consultation, we'll discuss your goals, interests, and needs
                  to create a personalized plan for your educational journey.
                </div>
              </div>
            </div>

            <div class="accordion-item  border mb-3">
              <h2 class="accordion-header" id="flush-headingEight">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseEight"
                  aria-expanded="false"
                  aria-controls="flush-collapseEight"
                >
                  What services does Overseas Companion offer?
                </button>
              </h2>
              <div
                id="flush-collapseEight"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingEight"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Overseas Companion offers a range of services, including
                  educational counseling, university/college selection,
                  application support, test preparation, scholarship assistance,
                  visa guidance, career counseling, study abroad programs, and
                  more. Our services are designed to support students and
                  professionals at every stage of their educational journey.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Faqs;
