// Milestone 4:
// Trasformiamo quello che abbiamo fatto fino ad ora in una vera e propria webapp, creando un layout completo simil-Netflix:
// ● Un header che contiene logo e search bar
// ● Dopo aver ricercato qualcosa nella searchbar, i risultati appaiono sotto forma
// di “card” in cui lo sfondo è rappresentato dall’immagine di copertina (​consiglio
// la poster_path con w342)​
// ● Andando con il mouse sopra una card (on hover), appaiono le informazioni
// aggiuntive già prese nei punti precedenti più la overview

var app = new Vue ({

    el: '#root',

    data: {

        risultati_totali: [],
        ricerca: '',
        testo_titolo: '',
        ricerca_in_corso: false,
        array_bandiere: ['en','de','es','fr','it','ja','us'],
        url_base: 'https://image.tmdb.org/t/p/w185',


    },

    methods: {

    ricerca_nel_sito() {

        if (this.ricerca.trim() != '') {

            this.ricerca_in_corso = true;

            this.risultati_totali = [];

            let testo_utente = this.ricerca;

            this.ricerca = '';

            this.testo_titolo = testo_utente;


                    axios.get('https://api.themoviedb.org/3/search/movie', {
                        params: {
                            api_key: "9b2e1a25fff128b7002a2dffbcceb871",
                            query: testo_utente,
                        }
                    }).then((risposta) => {

                    this.risultati_totali =

                    this.risultati_totali.concat(risposta.data.results);

                    this.ricerca_in_corso = false;

                    });


                    axios.get('https://api.themoviedb.org/3/search/tv', {
                        params: {
                            api_key: "9b2e1a25fff128b7002a2dffbcceb871",
                            query: testo_utente,
                        }
                    }).then((risposta_serie) => {

                    this.risultati_totali =

                    this.risultati_totali.concat(risposta_serie.data.results);
                    console.log(this.risultati_totali);
                    this.ricerca_in_corso = false;

                    });

                    this.ricerca = "";


        }

    },

    voto_stelle(voto) {

    return Math.round(voto / 2);

    },


},

    mounted() {





    }

});
