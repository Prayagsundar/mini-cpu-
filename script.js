let cpu = {
    pc: 0,
    ir: "—",
    acc: 0,
    cycles: 0,
    regs: [0, 0, 0, 0],
    mem: {},
    program: [],
    halted: false
};


function bin(value) {
    return (value & 255)
        .toString(2)
        .padStart(8, "0");
}


function log(message) {
    let logBox = document.getElementById("log");

    logBox.innerHTML += `<div>› ${message}</div>`;

    logBox.scrollTop = logBox.scrollHeight;
}


function parseProgram() {
    return document
        .getElementById("program")
        .value
        .split("\n")
        .map(line => line.split(";")[0].trim())
        .filter(line => line.length);
}


function loadProgram() {
    resetCPU(false);

    cpu.program = parseProgram();

    render();

    log(`Loaded ${cpu.program.length} instructions.`);
}


function resetCPU(clearLog = true) {
    cpu = {
        pc: 0,
        ir: "—",
        acc: 0,
        cycles: 0,
        regs: [0, 0, 0, 0],
        mem: {},
        program: parseProgram(),
        halted: false
    };

    if (clearLog) {
        document.getElementById("log").innerHTML =
            "CPU reset. Program loaded.";
    }

    render();
}


function regIndex(register) {
    return parseInt(register.replace("R", ""));
}


function getValue(value) {
    value = value.trim();

    if (/^R[0-3]$/i.test(value)) {
        return cpu.regs[regIndex(value)];
    }

    return parseInt(value) || 0;
}


function setRegister(register, value) {
    cpu.regs[regIndex(register)] = ((value % 256) + 256) % 256;
}


function step() {
    if (cpu.halted) {
        log("CPU is halted.");
        return;
    }

    if (cpu.pc >= cpu.program.length) {
        cpu.halted = true;
        log("End of program reached.");
        render();
        return;
    }

    let line = cpu.program[cpu.pc];

    let parts = line
        .replace(/,/g, " ")
        .trim()
        .split(/\s+/);

    let operation = parts[0].toUpperCase();

    cpu.ir = line;

    log(`FETCH: PC=${cpu.pc} → ${line}`);

    log(`DECODE: opcode = ${operation}`);

    cpu.pc++;

    cpu.cycles++;


    if (operation === "LOAD") {

        setRegister(parts[1], getValue(parts[2]));

        log(`EXECUTE: ${parts[1]} ← ${getValue(parts[2])}`);

    }

    else if (operation === "STORE") {

        let address = getValue(parts[2]);

        cpu.mem[address] = getValue(parts[1]);

        log(`EXECUTE: MEM[${address}] ← ${getValue(parts[1])}`);

    }

    else if (operation === "ADD") {

        setRegister(
            parts[1],
            getValue(parts[1]) + getValue(parts[2])
        );

        cpu.acc = getValue(parts[1]);

        log(`ALU: ${parts[1]} + ${parts[2]} = ${getValue(parts[1])}`);

    }

    else if (operation === "SUB") {

        setRegister(
            parts[1],
            getValue(parts[1]) - getValue(parts[2])
        );

        cpu.acc = getValue(parts[1]);

        log(`ALU: ${parts[1]} - ${parts[2]} = ${getValue(parts[1])}`);

    }

    else if (operation === "MOV") {

        setRegister(parts[1], getValue(parts[2]));

        log(`EXECUTE: ${parts[1]} ← ${getValue(parts[2])}`);

    }

    else if (operation === "INC") {

        setRegister(parts[1], getValue(parts[1]) + 1);

        log(`EXECUTE: ${parts[1]} incremented`);

    }

    else if (operation === "DEC") {

        setRegister(parts[1], getValue(parts[1]) - 1);

        log(`EXECUTE: ${parts[1]} decremented`);

    }

    else if (operation === "JMP") {

        cpu.pc = getValue(parts[1]);

        log(`CONTROL: Jumped to address ${cpu.pc}`);

    }

    else if (operation === "JZ") {

        if (getValue(parts[1]) === 0) {

            cpu.pc = getValue(parts[2]);

            log(`CONTROL: Zero detected, jumped to ${cpu.pc}`);

        }

        else {

            log("CONTROL: Zero condition false");

        }

    }

    else if (operation === "HALT") {

        cpu.halted = true;

        log("CONTROL: HALT — processor stopped.");

    }

    else {

        log(`ERROR: Unknown instruction ${operation}`);

    }


    render();
}


function runProgram() {
    if (!cpu.program.length) {
        loadProgram();
    }

    while (!cpu.halted && cpu.pc < cpu.program.length) {
        step();
    }
}


function render() {
    document.getElementById("pc").textContent = cpu.pc;

    document.getElementById("ir").textContent = cpu.ir;

    document.getElementById("acc").textContent = cpu.acc;

    document.getElementById("cycles").textContent = cpu.cycles;


    document.getElementById("regs").innerHTML =
        cpu.regs.map((value, index) => `
            <tr>
                <td>R${index}</td>
                <td class="value">${value}</td>
                <td class="value">${bin(value)}</td>
            </tr>
        `).join("");


    let entries = Object.entries(cpu.mem);

    if (!entries.length) {
        entries = [
            ["100", "—"],
            ["101", "—"]
        ];
    }

    document.getElementById("memory").innerHTML =
        entries.map(([address, value]) => `
            <tr>
                <td>${address}</td>
                <td class="value">${value}</td>
                <td class="value">${value === "—" ? "—" : bin(value)}</td>
            </tr>
        `).join("");


    document.getElementById("instructions").innerHTML =
        cpu.program.map((instruction, index) => `
            <tr class="${index === cpu.pc ? "active" : ""}">
                <td>${index}</td>
                <td class="value">${instruction}</td>
                <td>
                    ${
                        index < cpu.pc
                            ? "Executed"
                            : index === cpu.pc
                                ? "Next"
                                : "Waiting"
                    }
                </td>
            </tr>
        `).join("");
}


loadProgram();
