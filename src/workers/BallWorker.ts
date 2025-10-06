interface BallState {
    x: number;
    y: number;
    dx: number;
    dy: number;
    speed: number;
}

let state: BallState;

self.onmessage = (event: MessageEvent) => {
    if (event.data.type == "init") {
        state = event.data.payload;
        tick
    }
}

function tick() {
    state.x += state.dx;
    state.y += state.dy;

    if (state.x) return;
}