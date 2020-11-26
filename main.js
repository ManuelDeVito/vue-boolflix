// Milestone 3:
// In questa milestone come prima cosa aggiungiamo la copertina del film o della serie al nostro elenco. Ci viene passata dall’API solo la parte finale dell’URL, questo perché poi potremo generare da quella porzione di URL tante dimensioni diverse. Dovremo prendere quindi l’URL base delle immagini di TMDB: https://image.tmdb.org/t/p/​ per poi aggiungere la dimensione che vogliamo generare (troviamo tutte le dimensioni possibili a questo link: https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400​) per poi aggiungere la parte finale dell’URL passata dall’API.
// Esempio di URL che torna la copertina di BORIS:
// https://image.tmdb.org/t/p/w185/s2VDcsMh9ZhjFUxw77uCFDpTuXp.jpg

var app = new Vue ({

    el: '#root',

    data: {

        risultati_totali: [],
        ricerca: '',
        testo_titolo: '',
        ricerca_in_corso: false,
        array_bandiere: ['en','de','es','fr','it','ja','us']

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
