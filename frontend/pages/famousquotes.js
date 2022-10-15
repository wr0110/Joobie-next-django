import styles from '../styles/Home.module.css';


export default function FamousQuotes() {
    const callAPI = async () => {
        try {
            const res = await fetch(
                `https://famous-quotes4.p.rapidapi.com/random?category=all&count=2`,
                {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': 'd2fd872595mshde247997c50d9e4p171bc8jsn3a222c5346e7',
                        'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
                    },
                }
            );
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <button onClick={callAPI}>Make API call</button>
            </main>
        </div>
    );
}