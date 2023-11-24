type Controls = {
    controls: string
}

export const selectSearch = (state: Controls) => state.controls.search

export const selectRegion = (state: Controls) => state.controls.region

export const selectControls = (state: Controls) => state.controls