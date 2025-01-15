import { Header } from '../components/Header';
import * as Element from './styles';
import { BookOpen, ChartBar, Globe, Lightning, Phone } from 'phosphor-react';
import section1 from '../assets/section1.jpg'
import section2 from '../assets/section2.jpg'
import section3 from '../assets/section3.jpg'
import section4 from '../assets/section4.jpg'
import section5 from '../assets/section5.jpg'
import section6 from '../assets/section6.jpg'
import section7 from '../assets/section7.jpg'
import section8 from '../assets/section8.jpg'
import section9 from '../assets/section9.jpg'
import section10 from '../assets/section10.jpg'

export function Home() {
  return (
    <Element.Container>
      {/* Header */}
      <Header />

      {/* Section 1 */}
      <Element.Section className="beige">
        <Element.Content>
          <Element.Image src={section1} alt="High-Intent Leads" />
          <Element.Text>
            <h2>High-Intent Leads Delivered Directly to Your Pipeline</h2>
            <p>
            Take the guesswork out of lead generation. We connect you with high-intent prospects who are genuinely 
            interested in what you offer, helping you grow your sales pipeline with ease. 
            </p>
            <strong>Let’s talk about how we can deliver the leads your business needs.</strong>
            <Element.Button>
              <Phone size={24} /> Schedule a Free Call Today
            </Element.Button>
          </Element.Text>
        </Element.Content>
      </Element.Section>

      {/* Section 2 */}
      <Element.Section className="blue">
        <Element.Content>
          <Element.Text>
            <h2>We Deliver Results, Not Promises</h2>
            <p>
              At Marketing.xyz, we specialize in providing conversion-ready leads that fuel sustainable business growth. 
            </p>
            <ul>
              <li>
                <Lightning size={20} /> <strong>Entrepreneur-Led Expertise:</strong> Founded by seasoned entrepreneurs with proven lead generation success.
              </li>
              <li>
                <ChartBar size={20} /> <strong>Performance-Based Model:</strong> No upfront costs—we succeed only when you do.
              </li>
              <li>
                <BookOpen size={20} /> <strong>Comprehensive Approach:</strong> From SEO to PPC campaigns and high-value content creation, we manage it all.
              </li>
            </ul>
          </Element.Text>
          <Element.Image src={section2} alt="We Deliver Results" />
        </Element.Content>
      </Element.Section>

      {/* Section 3 */}
      <Element.Section className="blue">
        <Element.Content>
          <Element.Image src={section3} alt="We Deliver Results" />
          <Element.Text>
            <h2>Comprehensive End-to-End Lead Generation</h2>
            <p>
              We handle everything needed to deliver high-quality leads so you can focus on scaling your business.
            </p>
            <ul>
              <li>
                <Lightning size={20} /> <strong>Content Creation: </strong>High-value gated content, articles, and blog posts to attract and convert leads. 
              </li>
              <li>
                <ChartBar size={20} /> <strong>Design & Development: </strong> Professional assets and optimized landing pages for maximum engagement. 
              </li>
              <li>
                <BookOpen size={20} /> <strong>PPC Campaigns: </strong>Targeted paid search to drive qualified leads.
              </li>
              <li>
                <BookOpen size={20} /> <strong>SEO & Social Media: </strong>Organic strategies to attract quality traffic and generate leads.
              </li>
              <li>
                <BookOpen size={20} /> <strong>Real-Time Optimization: </strong>Ongoing analysis and adjustments for peak performance and ROI.
              </li>
            </ul>
          </Element.Text>
        </Element.Content>
      </Element.Section>

      {/* Section 4 */}
      <Element.Section className="orange">
        <Element.Content>
          <Element.Text>
            <h2>Why Choose Marketing.xyz?</h2>
            <p>
              We specialize in delivering high-intent leads that drive measurable growth. Here’s how we stand out: 
            </p>
            <ul>
              <li>
                <Globe size={20} /> <strong>Results-Driven Approach: </strong> We handle all aspects of lead generation, from creating lead magnets to executing advertising and SEO campaigns, delivering high-quality leads that align with your goals.
              </li>
              <li>
                <BookOpen size={20} /> <strong>Tailored Strategies: </strong> Our campaigns are designed to connect you with prospects who are genuinely interested in the type of products or services you offer. 
              </li>
              <li>
                <ChartBar size={20} /> <strong>Simplified Growth Solutions: </strong> With all the heavy lifting managed by our team, you can focus entirely on growing your business and closing more deals. 
              </li>
            </ul>
          </Element.Text>
          <Element.Image src={section4} alt="Why Choose Marketing.xyz?" />
        </Element.Content>
      </Element.Section>

      {/* Section 5 */}
      <Element.Section className="orange">
        <Element.Content>
          <Element.Image src={section5} alt="Tailored Content for High-Intent Lead Capture " />
          <Element.Text>
            <h2>Tailored Content for High-Intent Lead Capture </h2>
            <p>
              We create custom-crafted content tailored for your audience:  
            </p>
            <ul>
              <li>
                 <strong>Guides and eBooks</strong>
              </li>
              <li>
                <strong>Industry Insights Reports</strong> 
              </li>
              <li>
                <strong>Infographics & Visual Guides </strong> 
              </li>
              <li>
                 <strong>Glossary of Industry Terms</strong>
              </li>
              <li>
                <strong>Checklist for Best Practices</strong> 
              </li>
              <li>
                <strong>Trend Spotting Forecast </strong> 
              </li>
              <li>
                 <strong>Templates and Toolkits </strong>
              </li>
              <li>
                <strong>Competitive Landscape </strong> 
              </li>
              <li>
                <strong>Whitepapers </strong> 
              </li>
            </ul>
          </Element.Text>
        </Element.Content>
      </Element.Section>

         {/* Section 6 */}
         <Element.Section className="orange">
        <Element.Content>
          <Element.Text>
            <h2>How We Deliver High-Quality Leads</h2>
            <p>
              Our streamlined process ensures you receive ready-to-engage leads without the hassle: 
            </p>
            <ul>
              <li>
                <Globe size={20} /> <strong>Precise Market Targeting: </strong> We start by understanding your ideal customer profile and identifying high-intent prospects in your market. 
              </li>
              <li>
                <BookOpen size={20} /> <strong>Customized Campaign Execution: </strong> We take the time to understand your audience, creating and running campaigns tailored to their interests, 
                leveraging insights from advertising, SEO, and lead magnets. 
              </li>
              <li>
                <ChartBar size={20} /> <strong>All-Inclusive Management:</strong>From strategy to execution, we handle every detail, delivering leads while you focus on closing deals. 
              </li>
            </ul>
          </Element.Text>
          <Element.Image src={section6} alt="How We Deliver High-Quality Leads" />
        </Element.Content>
      </Element.Section>

         {/* Section 7 */}
         <Element.Section className="orange">
        <Element.Content>
          <Element.Image src={section7} alt="What Sets Us Apart?" />
          <Element.Text>
            <h2>What Sets Us Apart?</h2>
            <p>
              We’re more than just a lead generation service—our approach ensures valuable opportunities for your business:
            </p>
            <ul>
              <li>
                <Globe size={20} /> <strong>High-Intent Leads: </strong>The high-intent leads we generate provide a solid starting point for building meaningful connections. 
              </li>
              <li>
                <BookOpen size={20} /> <strong>Complete Service: </strong> We take care of everything needed to generate leads, so you can stay focused on growing your business.  
              </li>
              <li>
                <ChartBar size={20} /> <strong>Success-Based Partnership: </strong>With our results-driven model, you pay only for the leads we deliver, ensuring value every step of the way.
              </li>
            </ul>
          </Element.Text>
        </Element.Content>
      </Element.Section>

         {/* Section 8 */}
         <Element.Section className="orange">
        <Element.Content>
          <Element.Text>
            <h2>Effortless Growth, Designed for You </h2>
            <p>
              We simplify lead generation, so you can focus on growing your business: 
            </p>
            <ul>
              <li>
                <Globe size={20} /> <strong>Hands-Off Convenience: </strong> We manage the strategy, content, advertising, and optimization, delivering a steady flow of high-quality prospects.
              </li>
              <li>
                <BookOpen size={20} /> <strong>Built to Scale: </strong> Our process adapts to your growth goals, ensuring consistent lead flow whether you're starting small or scaling rapidly.  
              </li>
            </ul>
          </Element.Text>
          <Element.Image src={section8} alt="Effortless Growth, Designed for You " />
        </Element.Content>
      </Element.Section>

      {/* Section 9 */}
      <Element.Section className="beige">
        <Element.Content>
          <Element.Image src={section9} alt="Success Stories" />
          <Element.Text>
            <h2>Proven Success Stories</h2>
            <p>
              Discover how our clients have achieved exceptional growth with Marketing.xyz:
            </p>
            <blockquote>
              “Marketing.xyz has completely transformed our lead generation
              efforts. We’ve seen a 35% increase in high-quality leads in just
              three months.”
            </blockquote>
            <cite>
              <strong>— Alex J., </strong> VP of Sales at a <strong>Mid-Sized B2B Firm</strong>
            </cite>
            <blockquote>
            "The team at Marketing.xyz took care of everything—from content to campaigns. Their performance-based 
            model meant we only paid when results came in. It’s a win-win!"
            </blockquote>
            <cite>
              <strong>— Samantha L., </strong> CEO of a  <strong>Professional Services Company </strong>
            </cite>
            <blockquote>
            "Working with Marketing.xyz is like having an in-house growth team. Their ability to create and optimize 
            content-driven campaigns helped us double our inbound inquiries."
            </blockquote>
            <cite>
              <strong>— Daniel G., </strong> Marketing Director at a <strong>SaaS Company</strong>
            </cite>
          </Element.Text>
        </Element.Content>
      </Element.Section>

       {/* Section 10 */}
       <Element.Section className="blue">
        <Element.Content>
          <Element.Text>
            <h2>Ready to Unlock Scalable Growth for Your Business?</h2>
            <p>
              Schedule a call to learn how we can help your business grow predictably and efficiently. 
              <br />
              Our proven strategies are tailored to deliver:
            </p>
            <ul>
              <li>
                <Lightning size={20} /> <strong>High-Intent Leads </strong>  that match your ideal customer profile.
              </li>
              <li>
                <ChartBar size={20} /> <strong>Custom Campaigns </strong> designed to engage and convert your audience. 
              </li>
              <li>
                <BookOpen size={20} /> <strong>Actionable Insights </strong> to optimize performance and scale effectively. 
              </li>
            </ul>
          </Element.Text>
          <Element.Image src={section10} alt="We Deliver Results" />
        </Element.Content>
      </Element.Section>

      {/* Footer CTA */}
      <Element.Section className="red" >
        <Element.Button>
          <Phone size={24} /> Schedule Your Call Now
        </Element.Button>
        <h2>Marketing.xyz – Driving Real Growth, One Lead at a Time</h2>
        <p>Copyright 2025 Marketing.xyz, LLC. All rights reserved.</p>
      </Element.Section>
    </Element.Container>
  );
}