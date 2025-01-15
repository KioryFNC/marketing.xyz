import { Header } from '../components/Header';
import * as Element from './styles';

export function Home() {
  return (
    <Element.Container>
      <Header />
      <Element.Section id="leads">
        <h2>High-Intent Leads Delivered Directly to Your Pipeline</h2>
        <p>
          Take the guesswork out of lead generation. We connect you with high-intent prospects who are genuinely
          interested in what you offer, helping you grow your sales pipeline with ease.
        </p>
        <button>Schedule a Free Call Today</button>
      </Element.Section>

      <Element.Section id="results">
        <h2>We Deliver Results, Not Promises</h2>
        <p>
          At Marketing.xyz, we specialize in providing conversion-ready leads that fuel sustainable business growth.
        </p>
        <ul>
          <li><strong>Entrepreneur-Led Expertise:</strong> Founded by seasoned entrepreneurs with proven lead generation success.</li>
          <li><strong>Performance-Based Model:</strong> No upfront costs—we succeed only when you do.</li>
          <li><strong>Comprehensive Approach:</strong> From SEO to PPC campaigns and high-value content creation, we manage it all.</li>
        </ul>
      </Element.Section>

      <Element.Section id="generation">
        <h2>Comprehensive End-to-End Lead Generation</h2>
        <p>
          We handle everything needed to deliver high-quality leads so you can focus on scaling your business.
        </p>
        <ul>
          <li><strong>Content Creation:</strong> High-value gated content, articles, and blog posts to attract and convert leads.</li>
          <li><strong>Design & Development:</strong> Professional assets and optimized landing pages for maximum engagement.</li>
          <li><strong>PPC Campaigns:</strong> Targeted paid search to drive qualified leads.</li>
          <li><strong>SEO & Social Media:</strong> Organic strategies to attract quality traffic and generate leads.</li>
          <li><strong>Real-Time Optimization:</strong> Ongoing analysis and adjustments for peak performance and ROI.</li>
        </ul>
      </Element.Section>

      <Element.Section id="testimonials">
        <h2>Proven Success Stories</h2>
        <p>Discover how our clients have achieved exceptional growth with Marketing.xyz:</p>
        <blockquote>
          "Marketing.xyz has completely transformed our lead generation efforts. We’ve seen a 35% increase in high-quality
          leads in just three months."
          <cite>— Alex J., VP of Sales at a Mid-Sized B2B Firm</cite>
        </blockquote>
        <blockquote>
          "The team at Marketing.xyz took care of everything—from content to campaigns. Their performance-based model meant
          we only paid when results came in. It’s a win-win!"
          <cite>— Samantha L., CEO of a Professional Services Company</cite>
        </blockquote>
        <blockquote>
          "Working with Marketing.xyz is like having an in-house growth team. Their ability to create and optimize
          content-driven campaigns helped us double our inbound inquiries."
          <cite>— Daniel G., Marketing Director at a SaaS Company</cite>
        </blockquote>
        <p>
          Ready to unlock scalable growth for your business? Schedule a call to learn how we can help your business grow
          predictably and efficiently.
        </p>
        <ul>
          <li>High-Intent Leads that match your ideal customer profile.</li>
          <li>Custom Campaigns designed to engage and convert your audience.</li>
          <li>Actionable Insights to optimize performance and scale effectively.</li>
        </ul>
        <button>Schedule Your Call Now</button>
      </Element.Section>
    </Element.Container>
  );
}
