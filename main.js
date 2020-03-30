addEventListener('load', async () => {
    let sw = await navigator.serviceWorker.register('./sw.js')
    console.log(sw)
})

async function subscribe() {
    let sw = await navigator.serviceWorker.ready;
    let push = await sw.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: 'BIKrmCopG9sPwkEktUHwLZ_Fe1aI5Fh9Wx8HdeThGbExgRdP83PBSESYSuoEvizZ3Ainor7sH8wxH3FNwkYYXrc'
    })
    console.log(JSON.stringify(push))
}