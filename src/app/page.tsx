"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Palette } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="mediumLargeSizeLargeTitles"
        background="floatingGradient"
        cardStyle="inset"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "About",          id: "#about"},
        {
          name: "Features",          id: "#features"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="ArtPaint"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Redefine Your Canvas"
      description="Experience the most intuitive digital painting app designed for artists who crave perfection. Bring your imagination to life effortlessly."
      testimonials={[
        {
          name: "Clara S.",          handle: "@clara_art",          testimonial: "The best brush engine I've ever used. Truly incredible.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/artistic-color-strokes-isolated_23-2151897743.jpg?_wi=1",          imageAlt: "abstract painting background"},
        {
          name: "Marc L.",          handle: "@marc_draws",          testimonial: "Everything feels so natural. I can't imagine my workflow without it.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/art-concept-with-smartphone-template_23-2148023743.jpg?_wi=1",          imageAlt: "abstract painting background"},
        {
          name: "Elena P.",          handle: "@elena_paint",          testimonial: "Intuitive, clean, and fast. Perfect for my daily sketches.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-taking-photos-heart-shaped-macarons-planes-with-smartphone_23-2149428226.jpg?_wi=1",          imageAlt: "abstract painting background"},
        {
          name: "Javier D.",          handle: "@javier_design",          testimonial: "Unparalleled performance for large canvases.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/colorful-abstract-geometric-wallpaper_23-2151898368.jpg?_wi=1",          imageAlt: "abstract painting background"},
        {
          name: "Sofia R.",          handle: "@sofia_illust",          testimonial: "My creative process is now 2x faster than ever before.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-brush-with-watercolor-set_23-2148612633.jpg?_wi=1",          imageAlt: "abstract painting background"},
      ]}
      buttons={[
        {
          text: "Start Painting",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/artistic-color-strokes-isolated_23-2151897743.jpg?_wi=2"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/top-view-blue-paint-brush-strokes_23-2148815428.jpg",          alt: "Artist portrait 1"},
        {
          src: "http://img.b2bpic.net/free-photo/top-view-three-blue-paint-brush-strokes_23-2148815426.jpg",          alt: "Artist portrait 2"},
        {
          src: "http://img.b2bpic.net/free-photo/top-view-creative-blue-paint-brush-strokes-surface_23-2148815443.jpg",          alt: "Artist portrait 3"},
        {
          src: "http://img.b2bpic.net/free-photo/flat-lay-mixed-painting-colors_23-2148636828.jpg",          alt: "Artist portrait 4"},
        {
          src: "http://img.b2bpic.net/free-photo/female-painter-posing-with-empty-palette-brush_114579-31186.jpg",          alt: "Artist portrait 5"},
      ]}
      avatarText="Join 1M+ creative artists worldwide"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="About Us"
      title="Empowering Creativity Worldwide"
      description="We are dedicated to building tools that help every artist explore their potential. With cutting-edge technology, we make painting digital art feel like traditional painting."
      subdescription="Our team consists of passionate artists and engineers working together."
      icon={Palette}
      imageSrc="http://img.b2bpic.net/free-photo/art-concept-with-smartphone-template_23-2148023743.jpg?_wi=2"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "1",          title: "Smart Brushes",          author: "Precision Engine",          description: "Adaptive brush dynamics that react to every nuance.",          tags: [
            "AI",            "Tech"],
          imageSrc: "http://img.b2bpic.net/free-photo/woman-taking-photos-heart-shaped-macarons-planes-with-smartphone_23-2149428226.jpg?_wi=2"},
        {
          id: "2",          title: "Infinite Layers",          author: "Layer Studio",          description: "Complex composition management for professional results.",          tags: [
            "Efficiency",            "Layering"],
          imageSrc: "http://img.b2bpic.net/free-photo/colorful-abstract-geometric-wallpaper_23-2151898368.jpg?_wi=2"},
        {
          id: "3",          title: "Color Harmony",          author: "Color Logic",          description: "Intelligent color palettes that ensure visual balance.",          tags: [
            "Creative",            "Color"],
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-brush-with-watercolor-set_23-2148612633.jpg?_wi=2"},
      ]}
      title="Master Every Stroke"
      description="Innovative features tailored for modern creators."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "1",          value: "1M+",          title: "Active Artists",          description: "Joining our community every month.",          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-enjoying-life-offline_23-2149172715.jpg"},
        {
          id: "2",          value: "500+",          title: "Custom Brushes",          description: "High-quality presets included.",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-hands-holding-smartphone_23-2149636262.jpg"},
        {
          id: "3",          value: "24/7",          title: "Stable Support",          description: "We are always here for you.",          imageSrc: "http://img.b2bpic.net/free-photo/smear-blue-paint-blue_23-2147746828.jpg"},
      ]}
      title="Unmatched Performance"
      description="By the numbers: ArtPaint is the choice of professionals."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Clara S.",          role: "Digital Artist",          testimonial: "Truly revolutionary brush engine.",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-professional-female-artist-painting-canvas_273443-455.jpg"},
        {
          id: "2",          name: "Marc L.",          role: "Illustrator",          testimonial: "Everything feels so natural to use.",          imageSrc: "http://img.b2bpic.net/free-photo/smiley-tattoo-artist-indoors-side-view_23-2149445974.jpg"},
        {
          id: "3",          name: "Elena P.",          role: "Designer",          testimonial: "Perfect for my workflow.",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-career-guidance-items-designers_23-2149443526.jpg"},
        {
          id: "4",          name: "Javier D.",          role: "Artist",          testimonial: "Reliability like no other app.",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-painting-tool_23-2148467277.jpg"},
        {
          id: "5",          name: "Sofia R.",          role: "Painter",          testimonial: "I love the new layer features.",          imageSrc: "http://img.b2bpic.net/free-photo/digital-art-style-illustration-graphic-designer_23-2151536941.jpg"},
      ]}
      title="Loved By Artists"
      description="Hear what the community says about ArtPaint."
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "ArtGallery",        "CreativeFirm",        "DigitalArtCo",        "PaintSupplies",        "AcademyDesign",        "IllustratorCo",        "GalleryExpo"]}
      title="Trusted Globally"
      description="Partners who support creative innovation."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",          title: "Is it cross-platform?",          content: "Yes, ArtPaint works seamlessly on macOS, Windows, and iPadOS."},
        {
          id: "2",          title: "Can I import brushes?",          content: "Absolutely! You can import custom brush files easily."},
        {
          id: "3",          title: "Do you offer tutorials?",          content: "We have an extensive library of video tutorials available."},
      ]}
      sideTitle="Common Questions"
      sideDescription="Everything you need to know to get started with ArtPaint."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Ready to Start?"
      description="Join 1M+ artists. Get exclusive early access to new brush sets and weekly creative tips directly in your inbox."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Your Email",          required: true,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/watercolor-painting-artist-his-studio_23-2149908450.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "About",              href: "#about"},
            {
              label: "Features",              href: "#features"},
          ],
        },
        {
          items: [
            {
              label: "Contact",              href: "#contact"},
            {
              label: "Support",              href: "#"},
          ],
        },
        {
          items: [
            {
              label: "Privacy",              href: "#"},
            {
              label: "Terms",              href: "#"},
          ],
        },
      ]}
      logoText="ArtPaint"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}