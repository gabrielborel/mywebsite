---
title: "Flight controller STM32F405"
summary: "Controladora de voo própria, com firmware escrito do zero. O layout se inspira na SpeedyBee F7 V3, mas o design é autoral."
order: 1
status: "em-andamento"
repo: "https://github.com/gabrielborel/stm32f405_fc"
parts: ["STM32F405RGT6", "BMI270", "BMP280"]
specs:
  - label: "MCU"
    value: "STM32F405RGT6 (LQFP64, Cortex-M4 a 168 MHz)"
  - label: "Sensores"
    value: "IMU BMI270 (SPI) e barômetro BMP280 (I2C, opcional)"
  - label: "Armazenamento"
    value: "Cartão microSD via SDIO, para blackbox"
  - label: "Comunicação"
    value: "UART dedicada para GPS (NMEA) e UART dedicada para receptor ELRS via CRSF, com DMA no RX"
  - label: "Alimentação"
    value: "5 V, 12 V e VBAT vindos de uma PDB externa. O 3V3 é gerado na placa por um LDO AP2112K-3.3"
  - label: "USB"
    value: "USB-C para flash e debug"
  - label: "Placa"
    value: "4 camadas, furação de 30,5 x 30,5 mm (padrão stack)"
  - label: "Fabricação"
    value: "PCB e montagem SMD pela JLCPCB"
  - label: "Escopo da v1"
    value: "Sem VTX, OSD ou WiFi/BLE. Isso fica para uma v2, depois de validar o essencial."
---

## Visão geral

Placa de flight controller de design próprio. O layout se inspira na SpeedyBee F7 V3, mas não é um clone: as escolhas de componentes são minhas, e o firmware é escrito do zero, sem Betaflight nem INAV.

## Como o projeto avança

O circuito é fechado um bloco por vez: alimentação, sensores, comunicação e indicadores. Cada decisão de componente cita o documento e a seção de onde veio o valor. Esta página ganha uma seção por bloco conforme ele fecha.
