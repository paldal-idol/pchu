const getColor = (category) => {
  if (category === "flower") {
    // background, border, plum, glass
    return [
      ["#FFFFFF"],
      ["#574133", "#222222"],
      ["#FB6C66", "#539400", "#00943B"],
      ["#4CDA88", "#A13368", "#FFA800", "#5A70A7"]
    ];
  }
  return ["#FFFFFF"];
};

const getRandomColor = (category) => {
  const colors = getColor(category);

  const colorInfo = colors.reduce((res, color) => {
    const index = Math.floor(Math.random() * color.length);
    res.push(color[index]);
    return res;
  }, []);
  return colorInfo;
};

const object = {
  flower: [
    "0000001111000000",
    "0000012222101000",
    "0000122212212100",
    "0000121222211000",
    "0000122221210000",
    "0001122212211100",
    "0012121222212210",
    "0001122221211100",
    "0000122222210000",
    "0111111111111110",
    "1333333333333333",
    "1333333333333331",
    "0111111111111110",
    "0001313333131000",
    "0001313333131000",
    "0001313333131000",
    "0000111111110000"
  ],
  github: [
    "1000001111000000",
    "0000012222101000",
    "0000122212212100",
    "0000121222211000",
    "0000122221210000",
    "0001122212211100",
    "0012121222212210",
    "0001122221211100",
    "0000122222210000",
    "0111111111111110",
    "1333333333333333",
    "1333333333333331",
    "0111111111111110",
    "0001313333131000",
    "0001313333131000",
    "0001313333131000",
    "0000111111110000"
  ]
};

export { object, getRandomColor };
