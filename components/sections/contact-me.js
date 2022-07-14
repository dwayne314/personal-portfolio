function ContactMe({ contactMeRef, isVisible }) {
  return (
    <section id="contact-me">
      <div
        ref={contactMeRef}
        className={`max-w-2xl p-3 mx-auto space-y-4 text-justify duration-300 delay-200${
          isVisible ? " opacity-100" : " opacity-0"
        }`}
      >
        <h3 className="mb-4 text-3xl font-bold text-center text-header sm:text-4xl">
          Get In Touch
        </h3>
        <h3>
          I&apos;m pretty accessible and love to connect with new people! If you
          have any questions, advice, or just want to say hi; drop me a note,
          and I&apos;ll get back to you as soon as possible.
        </h3>
        <div>
          <a href="mailto:dwaynemanlovesportfolio@gmail.com">
            <div className="flex items-center justify-center w-32 h-12 mx-auto border rounded cursor-pointer border-header text-header hover:bg-cta">
              Say Hi!
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
