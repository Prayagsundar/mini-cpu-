# ⚡ Mini CPU Simulator

---

## 🚀 LIVE DEMO

👉 [**CLICK HERE TO OPEN THE MINI CPU SIMULATOR**](YOUR-LIVE-DEMO-LINK-HERE)

---

## 📌 Project Overview

The **Mini CPU Simulator** is an interactive web-based project developed to demonstrate the working of a simple **8-bit processor**. It was created as part of the **Computer Organisation and Architecture (COA)** subject.

The simulator lets you write small assembly programs and run them on a virtual CPU. It also shows the **fetch, decode, and execute cycle** step by step, making it useful for understanding how a processor works internally.

---

## 🎯 Objectives

- To understand the basic working of a simple 8-bit CPU.
- To demonstrate the fetch, decode, and execute cycle.
- To show how registers, memory, and the ALU work together.
- To visualize values in both decimal and 8-bit binary form.
- To help students learn assembly-style instructions in an easy way.

---

## ✨ Features

- Built-in program editor to write assembly instructions
- **Run** button to execute the whole program at once
- **Step** button to execute one instruction at a time
- **Reset** button to restart the CPU
- Live display of the Program Counter, Instruction Register, Accumulator, and Clock Cycles
- Four general-purpose registers (R0 to R3)
- Memory table that shows stored values
- Decimal and 8-bit binary display for registers and memory
- Execution log that explains every fetch, decode, and execute step
- Highlighting of the current instruction being executed
- Responsive dark theme that works on desktop, tablet, and mobile

---

## 🧠 CPU Components

| Component | Description |
|-----------|-------------|
| **Program Memory** | Stores the list of instructions to be executed |
| **Program Counter (PC)** | Holds the address of the next instruction |
| **Instruction Register (IR)** | Holds the instruction currently being executed |
| **Control Unit** | Controls the fetch, decode, and execute process |
| **Registers (R0 to R3)** | Small, fast storage for data |
| **ALU** | Performs addition and subtraction |
| **Accumulator** | Shows the result of the latest ALU operation |
| **Memory** | Stores values using the STORE instruction |

---

## 📋 Supported Instructions

| Instruction | Example | Description |
|-------------|---------|-------------|
| `LOAD` | `LOAD R1, 10` | Load a number into a register |
| `STORE` | `STORE R1, 100` | Store a register value in memory address 100 |
| `ADD` | `ADD R1, R2` | Add R2 to R1 and save the result in R1 |
| `SUB` | `SUB R1, R3` | Subtract R3 from R1 and save the result in R1 |
| `MOV` | `MOV R2, R1` | Copy the value of R1 into R2 |
| `INC` | `INC R1` | Increase the register value by 1 |
| `DEC` | `DEC R1` | Decrease the register value by 1 |
| `JMP` | `JMP 2` | Jump to the given instruction address |
| `JZ` | `JZ R1, 5` | Jump to the given address if the register is zero |
| `HALT` | `HALT` | Stop the processor |

> 💡 Values are kept in the 8-bit range (0 to 255). If a result goes above 255 or below 0, it wraps around, just like in a real 8-bit CPU.

---

## 🧪 Sample Program

```
LOAD R1, 10
LOAD R2, 20
ADD R1, R2
STORE R1, 100
LOAD R3, 5
SUB R1, R3
STORE R1, 101
HALT
```

**What it does:**

1. Loads 10 into R1 and 20 into R2.
2. Adds them, so R1 becomes 30.
3. Stores 30 in memory address 100.
4. Loads 5 into R3 and subtracts it from R1, so R1 becomes 25.
5. Stores 25 in memory address 101.
6. Stops the CPU.

> 📝 You can add comments after a semicolon (`;`). They will be ignored by the simulator.

---

## ▶️ How to Use

1. Open the simulator in your browser.
2. Write your assembly program in the **Instruction Program** box, or use the sample program.
3. Click **Load Program** to load it into the CPU.
4. Click **Run** to execute everything, or **Step** to go one instruction at a time.
5. Watch the registers, memory, and execution log update.
6. Click **Reset** to start again.

---

## 🛠️ Technologies Used

- **HTML5** for the structure
- **CSS3** for the dark, responsive design
- **JavaScript (Vanilla)** for the CPU logic

No frameworks, libraries, or installations are needed.

---

## 📁 Project Structure

```
MINI-CPU-SIMULATOR
│
├── index.html     # Complete simulator (HTML, CSS, and JavaScript)
└── README.md      # Project documentation
```

---

## 💻 Run Locally

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git
cd YOUR-REPOSITORY-NAME
```

Then simply open `index.html` in any modern web browser. No server is required.

---

## 🔮 Future Improvements

- Add more instructions such as AND, OR, XOR, and CMP
- Add a flag register (Zero, Carry, and Negative flags)
- Add labels for jump instructions
- Add a stack with PUSH and POP
- Add data-path animations
- Add an option to save and load programs

---

## 🎓 Learning Outcomes

- Understanding of the fetch, decode, and execute cycle
- Knowledge of how registers and memory store data
- Basic idea of how an ALU performs operations
- Understanding of binary representation and 8-bit overflow
- Practice with simple assembly-style programming

---

## 👨‍💻 Author

**Jayakarthick**
Computer Organisation and Architecture Project

---

## ⭐ Support

If you like this project, please give it a **star** on GitHub. Feedback and suggestions are always welcome!
