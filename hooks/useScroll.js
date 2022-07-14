function useScroll() {
  function scrollTo(elemId) {
    const elem = document.getElementById(elemId);
    const offset = elem.getBoundingClientRect().top + window.pageYOffset - 94;
    window.scrollTo({ top: offset, behavior: "smooth" });
  }

  return { scrollTo };
}

export default useScroll;
