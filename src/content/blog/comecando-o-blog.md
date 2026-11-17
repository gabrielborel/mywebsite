---
title: "Começando o blog"
description: "O que este espaço vai cobrir e como um post técnico fica por aqui."
date: 2026-11-17
tags: ["meta", "firmware"]
---

Este blog nasce junto com os projetos que documenta: a flight controller com STM32F405, a PDB própria e o que eu for aprendendo de firmware, eletrônica e matemática no caminho.

A ideia é registrar o raciocínio, incluindo o que deu errado. Quando uma decisão vem de um manual, o post diz de qual documento e de qual seção.

## Como um post de firmware fica

Um exemplo de bloco de código, só para ver a formatação. Habilitar o clock do GPIOA e configurar o pino PA5 como saída, direto nos registradores:

```c
// Habilita o clock do GPIOA.
RCC->AHB1ENR |= RCC_AHB1ENR_GPIOAEN;
(void)RCC->AHB1ENR;  // leitura de espera, ver abaixo

// PA5 como saída (MODER5 = 01).
GPIOA->MODER = (GPIOA->MODER & ~GPIO_MODER_MODER5) | GPIO_MODER_MODER5_0;
```

A leitura de espera existe porque o errata do STM32F405 (ES0182 Rev 19, seção 2.2.13) avisa que pode haver um atraso entre habilitar o clock no RCC e o periférico responder de fato. Entre as soluções do documento está justamente uma leitura dummy do registrador logo depois de habilitar o clock.

Este post é um exemplo: substitua pelo primeiro texto de verdade.
