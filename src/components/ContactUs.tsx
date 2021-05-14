import React from 'react'
import Paragraph from '../components/paragraph';
import { animated, config, useSpring } from 'react-spring';
import Logo from '../components/logo'
const AnimatedLogo = animated(Logo);
const AnimatedParagraph = animated(Paragraph);
function contact(){
    const paragraphProps = useSpring({
        opacity: 0,
        x: 20,
        to: {
          opacity: 1,
          x: 0,
        },
        config: config.slow,
      });
    
    return <>
    
         <div className="container-fluid content_contact">
             <div className="container m-auto ">
                 <div className="flex flex-row justify-around gap-5 text-left py-10 px-10 flex-wrap contact_text">
                    <div>
                        <AnimatedLogo />
                    </div>
                    <div>
                        <h1 className="font-bold">About</h1>
                        <ul>
                            <li>Our Company</li>
                            <li>Working</li>
                            <li>Partner</li>
                            <li>Career</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-bold">Services</h1>
                        <ul>
                            <li>Discovery</li>
                            <li>Development</li>
                            <li>Design</li>
                            <li>Deployment</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-bold">Talk to us</h1>
                        <ul>
                            <li>You can write to us.</li>
                            <li>hello@wesence.com</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-bold">Follow</h1>
                        <div>
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                        </div>
                    </div>
                 </div>
                <AnimatedParagraph className="copyright" style={paragraphProps}>
                    &copy; 2020 Wesence Technologies Private Limited
                </AnimatedParagraph>
             </div>
         </div>
    
    
    
            </>
}
export default contact