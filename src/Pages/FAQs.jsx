import { Link } from "react-router-dom";
import Container from "./../Shared/Container";
import dribble from "./../assets/images/FAQ/dribbble.png";
import behance from "./../assets/images/FAQ/Behance.png";
import adobe from "./../assets/images/FAQ/Adobe.png";
import instagram from "./../assets/images/FAQ/Instagram.png";

const FAQs = () => {
  return (
    <div className="pt-5">
      <Container>
        <button className="text-xl px-3 py-2  font-inter font-light border-2 rounded-md text-primary border-primary bg-red-50 ">
          FAQs
        </button>
        <h1 className="text-5xl font-inter py-3">Frequently Asked Questions</h1>
        <p className="font-inter text-xl">
          We understand that you may have some questions about sunduckfilm. We
          have compiled a list of frequently asked questions to help you get the
          information you need. If you have any other questions, please do not
          hesitate to contact us.
        </p>
        <section>
          <div className="collapse collapse-plus bg-white">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              What is Sonduckfilm <br /> Web?
            </div>
            <div className="collapse-content flex lg:flex-row flex-col justify-between lg:gap-0 gap-5">
              <div className="lg:w-1/2 w-full">
                <iframe
                  className="rounded-md lg:h-[500px] md:h-[320px] h-[180px]"
                  width="100%"
                  height="500px"
                  src="https://www.youtube.com/embed/ZXWEXrKbn_M"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="lg:w-1/2 w-full lg:pl-4 pl-0">
                <p>
                  Sonduckfilm Web is a website that offers a variety of UI kits,
                  templates, and design resources for web developers and
                  designers. They have a wide variety of templates to choose
                  from, including templates for landing pages, websites, web
                  applications, and more. They also offer premium features, such
                  as the ability to export your designs in high resolution, the
                  ability to add custom fonts and colors, and the ability to
                  collaborate with other designers.
                </p>
              </div>
            </div>
          </div>
          <div className="collapse collapse-plus bg-white">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Are your packs digital or physical?
            </div>
            <div className="collapse-content">
              <p>
                All of our templates and packs are digital only. Meaning, once
                you make a purchase you will be able to instantly download your
                product.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-white">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Do you have a Free Trial for your templates?
            </div>
            <div className="collapse-content">
              <p>
                Yes, we have a pack for After Effects and Premiere pro with the
                MotionDuck Extension panel. <br /> You can download them for
                free <span className="text-red-300">here:</span> <br />
                <Link
                  className="text-red-300"
                  target="blank"
                  to="https://www.sonduckfilm.com/tutorials/duck-pack/"
                >
                  100 Free Templates for After Effects & Premiere Pro
                </Link>
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-white">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              What are the drawbacks of using Sonduckfilm Web?
            </div>
            <div className="collapse-content">
              <p>
                While Sonduckfilm Web might offer a convenient solution for
                building and managing websites, it’s essential to weigh these
                potential drawbacks against the benefits it provides. If any of
                these issues are significant for your use case, you may want to
                explore alternative platforms or solutions that better align
                with your specific needs.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-white">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Is Sonduckfilm Web a good resource for beginners?
            </div>
            <div className="collapse-content">
              <p>
                Sonduckfilm Web is a good resource for beginners, especially
                those interested in video production and motion graphics using
                Adobe tools. The tutorials are well-produced and accessible,
                making it easier for beginners to get started and improve their
                skills. However, beginners should be aware of the focus on Adobe
                products and be prepared for the associated costs and learning
                curve. If you are committed to learning these tools, Sonduckfilm
                Web can be an excellent starting point.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-white">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Is Sonduckfilm Web a good resource for experienced designers?
            </div>
            <div className="collapse-content">
              <p>
                Sonduckfilm Web is a strong resource for experienced designers,
                particularly those who work with Adobe After Effects and
                Premiere Pro. The platform offers advanced tutorials, creative
                inspiration, and time-saving techniques that can be highly
                beneficial. However, experienced designers should consider their
                specific needs and whether they require more theoretical or
                alternative software training, as Sonduckfilm’s focus is
                primarily practical and tool-specific.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-white">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              What are your refund conditions?
            </div>
            <div className="collapse-content">
              <p>
                We can provide a full refund before you activate the “activation
                code” on your pack. If there’s any issues with your pack after
                activate your code, please message us or check this support
                page. <br />
                <br /> If there’s any issues with installation, please contact
                us at <br />{" "}
                <span className="font-bold text-red-300">
                  motionduckhelp@gmail.com
                </span>
                , as we will help you get the pack working! <br />
                <br />
                For more information on our refund policy, click here to view
                more.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-white">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How to contact you?
            </div>
            <div className="collapse-content">
              <p>
                Please email us at
                <span className="font-bold text-red-300">
                  motionduckhelp@gmail.com
                </span>
                <br />
                We’ll get back to you as soon as we can. <br />
                Our reply time is 9:00 AM to 8:00 PM EST.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-col justify-center items-center space-y-3 py-8 ">
            <h1 className="lg:text-5xl text-3xl font-bold">What They Say</h1>
            <p className="lg:text-xl text-base lg:w-2/3 w-full text-center">
              Hear from our satisfied clients and learn how we've helped them
              take their businesses to new heights.
            </p>
          </div>
          <div>
            
              <div className="flex justify-between gap-8 overflow-x-auto">
                <img src={dribble} alt="" />
                <img src={behance} alt="" />
                <img src={adobe} alt="" />
                <img src={instagram} alt="" />
              </div>
            
          </div>
        </section>
        
      </Container>
    </div>
  );
};

export default FAQs;
