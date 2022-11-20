$(document).ready(function () {
  const main = $("#main");
  const steps = $("#steps");
  const jumping = $("#jumping");
  const flying = $("#fly");
  const kierunek = $("#kierunek");
  const state = {
    positions: [],
    currentStep: 0,
    direction: true,
    isJumping: false,
  };
  let { positions, currentStep, direction, isJumping } = { ...state };
  const rakieta = $("<div>").addClass("rakieta");
  main.append(rakieta);

  main.on("click", (e) => {
    addPosition(e);
  });

  steps.on("click", step);

  jumping.on("click", jump);

  flying.on("click", fly);

  kierunek.on("change", changeDir);

  function addPosition(e) {
    const x = e.clientX - main.offset().left;
    const y = e.clientY - main.offset().top;

    const planet = $("<div>").addClass("planet");
    planet.css("top", `${y - 10}px`);
    planet.css("left", `${x - 10}px`);
    planet.text(positions.length);
    main.append(planet);

    positions.push({ x: x, y: y });
  }

  function step(isFlying) {
    if (currentStep === positions.length && direction) currentStep = 0;

    if (currentStep === 0 && !direction) currentStep = positions.length;

    if (direction) {
      currentStep++;
    } else {
      currentStep--;
    }

    if (currentStep === 0 || !direction) {
      rakieta.css("top", `${positions[currentStep].y}px`);
      rakieta.css("left", `${positions[currentStep].x}px`);
    } else {
      rakieta.css("top", `${positions[currentStep - 1].y}px`);
      rakieta.css("left", `${positions[currentStep - 1].x}px`);
    }
    if (isFlying) requestAnimationFrame(step);
  }

  function changeDir() {
    direction = !direction;
  }

  function jump() {
    let interval = setInterval(step, 500);
  }
  function fly() {
    requestAnimationFrame(() => {
      step(true);
    });
  }
});
