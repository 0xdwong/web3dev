async function main() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 1;
}

module.exports = main;