const ChuckCard = {
    props: ['icon', 'text'],
    template: `
    <div class="card h-100 card-aesthetic">
        <img :src="icon" class="card-img-top" alt="Chuck Norris">
        <div class="card-body">
            <p class="card-text">{{ text }}</p>
        </div>
    </div>
    `
};

const { createApp } = Vue;

createApp({
    components: {
        'chuck-card': ChuckCard
    },
    data() {
        return {
            chucks: [
                { icon_url: "https://images01.military.com/sites/default/files/styles/full/public/2021-04/chucknorris.jpeg.jpg", value: "Chuck Norris can skydive into outer space." },
                { icon_url: "https://images01.military.com/sites/default/files/styles/full/public/2021-04/chucknorris.jpeg.jpg", value: "The chief export of Chuck Norris is pain." },
                { icon_url: "https://images01.military.com/sites/default/files/styles/full/public/2021-04/chucknorris.jpeg.jpg", value: "Chuck Norris doesn't read books. He stares them down until he gets the information he wants." },
                { icon_url: "https://images01.military.com/sites/default/files/styles/full/public/2021-04/chucknorris.jpeg.jpg", value: "Time waits for no man. Unless that man is Chuck Norris." },
                { icon_url: "https://images01.military.com/sites/default/files/styles/full/public/2021-04/chucknorris.jpeg.jpg", value: "If you spell Chuck Norris in Scrabble, you win. Forever." },
                { icon_url: "https://images01.military.com/sites/default/files/styles/full/public/2021-04/chucknorris.jpeg.jpg", value: "Chuck Norris can divide by zero." },
                { icon_url: "https://images01.military.com/sites/default/files/styles/full/public/2021-04/chucknorris.jpeg.jpg", value: "Chuck Norris counted to infinity. Twice." },
                { icon_url: "https://images01.military.com/sites/default/files/styles/full/public/2021-04/chucknorris.jpeg.jpg", value: "Chuck Norris can slam a revolving door." },
                { icon_url: "https://images01.military.com/sites/default/files/styles/full/public/2021-04/chucknorris.jpeg.jpg", value: "Chuck Norris once kicked a horse in the chin. Its descendants are known today as giraffes." },
            ]
        }
    }
}).mount('#app');
