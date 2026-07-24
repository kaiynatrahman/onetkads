(() => {
  const version = Date.now().toString();

  const cacheBust = (assetPath) => {
    const url = new URL(assetPath, document.baseURI);
    url.searchParams.set("v", version);
    return url.href;
  };

  document.querySelectorAll('link[rel="stylesheet"]').forEach((stylesheet) => {
    stylesheet.href = cacheBust(stylesheet.getAttribute("href"));
  });

  const mainScript = document.createElement("script");
  mainScript.src = cacheBust("main.js");
  document.body.appendChild(mainScript);
})();
