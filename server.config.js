module.exports = {
  // Configurações do comando de som
  permission: ["nil.permissao","Music"],

  command: "som",
  prop: "rojo_jblboombox",

  defaultVolume: 100, // Volume padrão (0-100)
  maxDistance: Infinity,

  dj: [
    { // Bahamas
      table: [-1378.6, -628.89, 30.63],
      speaker: [-1378.6, -628.89, 30.63],
      range: 50,
      volume: 100,
      permission: ["nil.permissao"],
    },
    { // Favela: Igreja (-1625.43,-253.45,52.76)
      table: [-1775.45, -132.34, 88.66],
      speaker: [-1775.45, -132.34, 88.66],
      range: 50,
      volume: 100,
      permission: ["nil.permissao"],
    },
    { // Favela: Barragem (1210.75,-289.7,68.31)
      table: [1266.11, -137.55, 84.57],
      speaker: [1266.11, -137.55, 84.57],
      range: 50,
      volume: 100,
      permission: ["nil.permissao"],
    },
    { // Favela: Helipa (1287.1,-709.49,64.03)
      table: [1353.13, -794.79, 87.3],
      speaker: [1353.13, -794.79, 87.3],
      range: 50,
      volume: 100,
      permission: ["nil.permissao"],
    },
    { // Favela: Porto (1351.68,-2576.21,47.95)
      table: [1342.59, -2496.46, 56.7],
      speaker: [1342.59, -2496.46, 56.7],
      range: 50,
      volume: 100,
      permission: ["nil.permissao"],
    },
    { // Favela: Esgoto (1180.92,-1047.46,42.68)
      table: [1177.73, -1007.43, 49.39],
      speaker: [1177.73, -1007.43, 49.39],
      range: 50,
      volume: 100,
      permission: ["nil.permissao"],
    },
  ],

  range: {
    // vehicle é o som dentro do veículo
    vehicle: {
      "*": 48,  // (48 metros)
    },

    // radio é o som do rádio externo
    radio: [20, 50], // (20 metros padrão, 50 metros com permissão)
  },
  blacklist: ["t20", "voltic2", "stromberg"],
  allowBluetoothOnBikes: false,
}
