# mini-cpu-
Mini CPU Simulator is a simple 8-bit processor that runs inside your web browser. It is made for students who want to learn how a computer works inside. You can write small assembly programs, load them, and watch the CPU run them.

The simulator shows the fetch, decode, and execute cycle step by step. You can run the whole program at once or press Step to run one instruction at a time. Every action is written in an execution log, so it is easy to follow what the CPU is doing.

The screen shows the Program Counter, Instruction Register, Accumulator, and clock cycles. There are four registers, R0 to R3, and a small memory. Values are shown in decimal and in 8-bit binary, which helps you understand how numbers are stored.

These instructions are supported: LOAD, STORE, ADD, SUB, MOV, INC, DEC, JMP, JZ, and HALT. Numbers stay between 0 and 255, so they wrap around just like in a real 8-bit processor. A sample program is already included, so you can start right away.

The project uses only HTML, CSS, and JavaScript in one file. There is nothing to install and no server is needed. Just open the file in any modern browser. The dark design is clean and works on phones, tablets, and computers.

To use it, download or clone this repository and open the HTML file. Edit the sample program if you like, then click Run or Step. Use Reset to start again. You can add comments after a semicolon, and they will be ignored.

This project is great for students, teachers, and beginners who want to learn about CPUs, registers, memory, and instructions in a fun way. Ideas for the future include more instructions, jump labels, and animations. Feedback and contributions are welcome. Happy learning, everyone!
