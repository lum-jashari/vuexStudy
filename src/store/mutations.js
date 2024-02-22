export function setName(state, data) {
    state.default.cousins.push(data);
    console.log(state.default.cousins);
}
