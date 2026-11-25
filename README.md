# Calculadora de potência óptica

Programa em Node.js que calcula o orçamento de potência de um enlace de fibra óptica (FTTH): soma as perdas da fibra, das emendas, dos conectores e do splitter, calcula a potência que chega na ONU e diz se o enlace passa.

Primeiro projeto que escrevi do zero, unindo o que aprendi em projetos de redes FTTH com JavaScript.

## Como rodar

Precisa do [Node.js](https://nodejs.org) instalado.

```
git clone https://github.com/G4brielRosa98/calculadora-potencia.git
cd calculadora-potencia
node potencia.js
```

## Exemplo

Com uma OLT de 5 dBm, 3 km de fibra, 4 emendas, 2 conectores e um splitter 1:8:

```
Perda na fibra: 1.05 dB
Perda nas emendas: 0.40 dB
Perda nas conectores: 1.00 dB
Perda total: 12.95 dB
Potência na ONU: -7.95 dBm
Enlace OK
```

Com 60 km de fibra, a potência na ONU cai para −27.90 dBm e o programa responde `Enlace reprovado`.

## Como funciona

| Item | Conta | Valor usado |
| :---- | :---- | :---- |
| Fibra | distância × perda por km | 0,35 dB/km |
| Emendas | quantidade × perda por emenda | 0,1 dB cada |
| Conectores | quantidade × perda por conector | 0,5 dB cada |
| Splitter 1:8 | valor fixo | 10,5 dB |

- **Perda total** = fibra + emendas + conectores + splitter
- **Potência na ONU** = potência da OLT − perda total
- **Enlace OK** se a potência na ONU for maior que −27 dBm

Para testar outro enlace, mude os valores no início do arquivo `potencia.js`.

## O que aprendi

- Variáveis com `const` e operações matemáticas em JavaScript.
- Por que `0.35 * 3` dá `1.0499999999999998` (números decimais em binário) e como arredondar com `.toFixed(2)`.
- Tomar decisões com `if` / `else`.
- Testar os dois caminhos do programa: o enlace que passa e o que reprova.

## Próximos passos

- Ler os valores pelo terminal, sem precisar editar o código.
- Escolher o tipo de splitter (1:2, 1:4, 1:8, 1:16, 1:32).
- Adicionar testes automáticos.
