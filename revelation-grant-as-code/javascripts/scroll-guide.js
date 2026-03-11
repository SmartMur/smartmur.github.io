(function () {
  const links = Array.from(document.querySelectorAll('.page-guide a[data-guide]'));
  const sections = Array.from(document.querySelectorAll('.guide-section[id]'));

  if (!links.length || !sections.length) {
    return;
  }

  const byId = new Map(links.map((link) => [link.getAttribute('href').slice(1), link]));

  function setActive(id) {
    links.forEach((link) => link.classList.remove('active'));
    const active = byId.get(id);
    if (active) {
      active.classList.add('active');
    }
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible.length) {
        setActive(visible[0].target.id);
      }
    },
    {
      rootMargin: '-42% 0px -42% 0px',
      threshold: [0.1, 0.3, 0.6],
    }
  );

  sections.forEach((section) => observer.observe(section));

  if (location.hash) {
    setActive(location.hash.slice(1));
  } else {
    setActive(sections[0].id);
  }
})();
