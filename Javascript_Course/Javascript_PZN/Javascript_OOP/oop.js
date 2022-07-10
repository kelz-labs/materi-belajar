class Motor {
  constructor(warna, mesin) {
    this.warna = warna
    this.mesin = mesin
    this.mesinStatus = 'off'
  }

  mesinStart () {
    this.mesinStatus = 'on'
    console.log('Mesin menyala')
  }

  mesinStop () {
    this.mesinStatus = 'off'
    console.log('Mesin mati')
  }

  static isMesinOn (motor) {
    if (motor.mesinStatus = 'on') {
      console.log('Motor siap dikendarai')
    }

    else {
      console.log('Motor belum siap untuk dikendarai')
    }
  }
}

class Laptop {
  constructor(cpu, gpu, ram, storage) {
    this.cpu = cpu
    this.gpu = gpu
    this.ram = ram
    this.storage = storage
    this.ramUsage = 'high'
    this.cpuUsage = 'high'
  }

  ramStatus () {
    this.ramUsage = 'high'
    console.log("Ngos-ngosan")
  }

  cpuStatus () {
    this.cpuUsage = 'high'
    console.log("Ngos-ngosan")
  }

  static isRamStatus (laptop) {
    if (laptop.ramStatus == 'high') {
      console.log("Ngos-ngosan cui")
    }

    else {
      console.log("Mantap lancar cui")
    }
  }

  static isCpuStatus (laptop) {
    if (laptop.cpuStatus == 'high') {
      console.log("Ngos-ngosan cui")
    }

    else {
      console.log("Mantap lancar cui")
    }
  }
}
